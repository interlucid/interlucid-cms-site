import { Link, Outlet, useLoaderData } from 'react-router';
import type { LoaderFunctionArgs } from "react-router";
import type { ILink } from 'types/contentful';
import * as Contentful from '~/contentful.server';

export const loader = async ({ context }: LoaderFunctionArgs) => {
    const url = new URL(context.url);
    return {
        pathname: url.pathname,
        navEntry: await Contentful.getFirstEntryByType('primaryNavigation'),
        coverPhotoAsset: await Contentful.getAssetById('2t9fwEOTVV5AC3KJF2Yg6h'),
        circleLogoAsset: await Contentful.getAssetById('6flJDaTWHN7eVzhZ5xoNb7'),
    };
};

export default function Nav() {
    const { pathname, navEntry, coverPhotoAsset, circleLogoAsset } = useLoaderData();
    console.log(pathname);
    return (
        <>
            {pathname === '/' ? <img src={coverPhotoAsset.fields.file.url} /> : ''}
            <div className="bg-slate-700">
                <ul className="list-none flex justify-end container mx-auto">
                    <li className="mr-auto p-2">
                        <Link to="/"><img src={circleLogoAsset.fields.file.url} alt="Logo Home" style={{ height: '3rem' }} /></Link>
                    </li>
                    {
                        navEntry.fields.links.map((navItem: ILink, index: number) => {
                            return <li className="p-3" key={index}>
                                <Link to={navItem.fields.path}>{navItem.fields.text}</Link>
                            </li>;
                        })
                    }
                </ul>
            </div>
            <Outlet />
        </>
    );
}

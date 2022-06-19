import { useLoaderData } from '@remix-run/react';
import * as Contentful from '~/contentful.server';
import { Release } from '~/components/release';
import type { IRelease } from 'types/contentful';

export const loader = async() => {
    const entry = await Contentful.getFirstEntryByType('homePage');
    return entry;
};

export default function Index() {
    const homePageEntry = useLoaderData();
    const latestRelease: IRelease = homePageEntry.fields.latestRelease;
    // console.log(homePageEntry);
    return (
        <div className="container mx-auto">
            <div className="text-center">
                <img src={homePageEntry.fields.nameLogo.fields.file.url} alt={homePageEntry.fields.nameLogo.fields.description} />
                <h2 className="text-4xl mb-3">{homePageEntry.fields.tagline}</h2>
                <h2 className="text-2xl">{homePageEntry.fields.bio}</h2>
                <Release releaseData={latestRelease} />
            </div>
        </div>
    );
}

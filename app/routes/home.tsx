import { Release } from "@app/components/release";
import { getFirstEntryByType } from "@app/contentful.server";
import type { Route } from "./+types/home";

// { }: Route.LoaderArgs
export function meta() {
    return [
        // TODO: append to global title
        // { title: "homepage" },
        { name: "description", content: "Interlucid homepage" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const latestRelease = await getFirstEntryByType("release");
    // assert("error" in latestRelease || latestRelease.sys.contentType.sys.id === "release");
    console.log(latestRelease);
    return {
        message: params.VALUE_FROM_EXPRESS,
        latestRelease,
    };
}

export default function Home({ loaderData }: Route.ComponentProps) {
    const { latestRelease } = loaderData;
    console.log(latestRelease);
    return (
        <>
            <section className="py-6">
                {!("error" in latestRelease) ? (
                    <Release releaseData={latestRelease} />
                ) : (
                    <></>
                )}
            </section>
            <section className="py-5">
                <div className="row align-items-stretch justify-content-center">
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <a className="btn btn-big btn-fluid" href="/music/">
                            Listen to music
                        </a>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <a className="btn btn-big btn-fluid" href="/contact/">
                            Talk to me
                        </a>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <a className="btn btn-big btn-fluid" href="/store/">
                            Buy things
                        </a>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                        <a
                            className="btn btn-big btn-fluid"
                            href="/support-me/"
                        >
                            Support me
                        </a>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <a className="btn btn-big btn-fluid" href="/shows/">
                            Go to concerts
                        </a>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <p className="text-center">
                    <a href="/projects/" className="btn">
                        Projects
                    </a>
                    <a href="/press/" className="btn">
                        Press
                    </a>
                </p>
            </section>
        </>
    );
}

import {
    Link,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useRouteError,
    isRouteErrorResponse,
} from "react-router";
import tailwindStylesheetUrl from "~/styles/app.css";

import type {
    HeadersFunction,
    LinksFunction,
    MetaFunction,
    LoaderFunction,
} from 'react-router';

// export const links: LinksFunction = () => {
//     return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
// };

export const meta: MetaFunction = ({ matches }) => {
    const parentMeta = matches.flatMap(
        (match) => match.meta ?? [],
    );
    return [...parentMeta, {
        title: "Interlucid - Epic retro synthpop from a dreamer",
        charset: "utf-8",
        viewport: "width=device-width,initial-scale=1",
    }];
};

export function ErrorBoundary() {
    const error = useRouteError();

    // when true, this is what used to go to `CatchBoundary`
    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>Oops</h1>
                <p>Status: {error.status}</p>
                <p>{error.data.message}</p>
            </div>
        );
    }

    // Don't forget to typecheck with your own logic.
    // Any value can be thrown, not just errors!
    let errorMessage = "Unknown error";
    if ((error as Error).message) {
        errorMessage = (error as Error).message;
    }

    return (
        <html>
            <head>
                <title>Oh no!</title>
                <Meta />
                <Links />
            </head>
            <body className="bg-slate-900 text-white m-4">
                There was an error. See the console for details.<br /><br />If you are a visitor this is not your fault. try the <Link to="/">home page</Link> or <a href="https://vibe.to/interlucid">listening to some music</a> in the meantime.
                <pre>{errorMessage}</pre>
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body className="bg-slate-900 text-white">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

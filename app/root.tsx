import {
    Link,
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import tailwindStylesheetUrl from "~/styles/app.css";

import type {
  HeadersFunction,
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from '@remix-run/node'

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Interlucid - Epic retro synthpop from a dreamer",
    viewport: "width=device-width,initial-scale=1",
});

export function ErrorBoundary({ error }: {error: Error}) {
    console.error(error);
    return (
      <html>
        <head>
          <title>Oh no!</title>
          <Meta />
          <Links />
        </head>
        <body className="bg-slate-900 text-white m-4">
          There was an error. See the console for details.<br/><br/>If you are a visitor this is not your fault. try the <Link to="/">home page</Link> or <a href="https://vibe.to/interlucid">listening to some music</a> in the meantime.
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
                <LiveReload />
            </body>
        </html>
    );
}

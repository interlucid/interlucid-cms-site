import type { EntryContext } from "react-router";
import { ServerRouter } from "react-router";
import { renderToString } from "react-dom/server";

export default function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
) {
    const markup = renderToString(
        <ServerRouter context={remixContext} url={request.url} />,
    );

    responseHeaders.set("Content-Type", "text/html");

    return new Response("<!DOCTYPE html>" + markup, {
        status: responseStatusCode,
        headers: responseHeaders,
    });
}

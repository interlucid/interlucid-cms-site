import * as React from "react";

export function Cta(props: React.PropsWithChildren<string>) {
    return (
        <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm">{props.children}</button>
        </>
    );
}

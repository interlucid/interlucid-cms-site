// import type { Props } from 'React';
import type { Props } from 'react';

export function Cta(props: Props<string>) {
    return (
        <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{props.children}</button>
        </>
    );
}

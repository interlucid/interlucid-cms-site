import { Link } from '@remix-run/react';
import { ClientOnly } from "remix-utils/client-only";

export default function Index() {
    

    return (
        <div className="container mx-auto py-5 px-3">
            <h1 className="text-4xl">Player</h1>
            <p><Link to="/">Interlucid Home</Link></p>
            <ClientOnly>
                {() => {
                    const audioBufferSourceNodeContext = new AudioContext();
                    return(
                        <>
                        </>
                    );
                }}
            </ClientOnly>
        </div>
    );
}
  

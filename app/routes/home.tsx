import type { Route } from "./+types/home";

export function meta({ }: Route.LoaderArgs) {
    return [
        // TODO: append to global title
        // { title: "homepage" },
        { name: "description", content: "Interlucid homepage" },
    ];
}

export function loader({ context }: Route.LoaderArgs) {
    return { message: context.VALUE_FROM_EXPRESS };
}

export default function Home({ }) {
    return <>
        Interlucid home page
    </>;
}
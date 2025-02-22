import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";

const root = hydrateRoot(document, <RemixBrowser />);

import { HydratedRouter } from "react-router/dom";
import { hydrateRoot } from "react-dom/client";
import { StrictMode } from "react";

hydrateRoot(
    document,
    <StrictMode>
        <HydratedRouter />
    </StrictMode>,
);

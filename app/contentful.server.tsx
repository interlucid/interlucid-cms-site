import dotenv from "dotenv";
import * as contentful from "contentful";
import { TypeLinkFields, TypeReleaseFields } from "@genTypes/index";

dotenv.config();

type TypeFields = {
    link: TypeLinkFields;
    release: TypeReleaseFields;
};
type ContentTypes = "link" | "release";

let client: contentful.ContentfulClientApi<undefined>;
try {
    console.log(process.env);
    client = contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: process.env.CONTENTFUL_SPACE_ID || "",
        // space: '' || '',
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN || "",
    });
    console.log("Created client");
    console.log(client);
} catch (e) {
    console.error("Error creating Contentful client", e);
}
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

// client
//     .getEntry("5PeGS2SoZGSa4GuiQsigQu")
//     .then(entry => console.log(entry))
//     .catch(err => console.log(err));

export const getEntryById = async (id: string) => {
    let entry;
    try {
        entry = await client.getEntry(id);
    } catch (e) {
        console.error(e);
        return {
            error: "an error occurred when fetching an entry by ID from Contentful",
        };
    }
    console.log(entry);
    return entry;
};

export const getAssetById = async (id: string) => {
    let asset;
    try {
        asset = await client.getAsset(id);
    } catch (e) {
        console.error(e);
        return {
            error: "an error occurred when fetching an asset by ID from Contentful",
        };
    }
    console.log(asset);
    return asset;
};

export const getEntriesByType = async <Type extends ContentTypes>(
    contentType: Type,
    limit = 100,
    skip = 0,
) => {
    let entries;
    try {
        entries = await client.getEntries<
            contentful.EntrySkeletonType<TypeFields[Type], Type>
        >({
            content_type: contentType,
            limit,
            skip,
        });
    } catch (e) {
        console.error(e);
        return {
            error: "an error occurred when fetching entries by type from Contentful",
        };
    }
    console.log(entries);
    return entries;
};

export const getFirstEntryByType = async <Type extends ContentTypes>(
    contentType: Type,
) => {
    let firstEntry;
    try {
        const entries = await client.getEntries<
            contentful.EntrySkeletonType<TypeFields[Type], Type>
        >({
            content_type: contentType,
        });
        firstEntry = entries.items[0];
    } catch (e) {
        console.error(e);
        return {
            error: "an error occurred when fetching entries by type from Contentful",
        };
    }
    return firstEntry;
};

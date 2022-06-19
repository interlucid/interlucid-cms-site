import 'dotenv/config';
import * as contentful from 'contentful';

let client: contentful.ContentfulClientApi;
try {
    client = contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: process.env.CONTENTFUL_SPACE_ID || '',
        // space: '' || '',
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN || '',
    });
} catch (e) {
    console.error(e);
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
            error: `an error occurred when fetching an entry by ID from Contentful`,
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
            error: `an error occurred when fetching an asset by ID from Contentful`,
        };
    }
    console.log(asset);
    return asset;
};

export const getEntriesByType = async (type: string, limit = 100, skip = 0) => {
    let entries;
    try {
        entries = await client.getEntries({
            content_type: type,
        });
    } catch (e) {
        console.error(e);
        return {
            error: `an error occurred when fetching entries by type from Contentful`,
        };
    }
    console.log(entries);
    return entries;
};

export const getFirstEntryByType = async (type: string) => {
    let entries;
    try {
        entries = await client.getEntries({
            content_type: type,
        });
    } catch (e) {
        console.error(e);
        return {
            error: `an error occurred when fetching entries by type from Contentful`,
        };
    }
    console.log(entries);
    return entries.items.length ? entries.items[0] : null;
};

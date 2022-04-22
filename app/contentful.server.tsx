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
            error: `an error occurred when fetching from Contentful`,
        }
    }
    // console.log(entry);
    return entry;
};

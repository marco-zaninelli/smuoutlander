import { createClient } from '@sanity/client';

const sanityClient = createClient({
    projectId: "63hgue1b",
    dataset: "production",
    // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    // dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2023-01-01',
    useCdn: true,
});

export default sanityClient;

// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity/live";
import { client } from './client'

const token = process.env.SANITY_API_READ_TOKEN;

// For development, if token is not set, we'll use a fallback
if(!token) {
  console.warn('SANITY_API_READ_TOKEN is not set. Live content updates will not work. Please set this environment variable for full functionality.');
}

// Only define live functionality if token is available
export const { sanityFetch, SanityLive } = token ? defineLive({
  client,
  serverToken: token,
  browserToken: token,
  fetchOptions: {
    revalidate: 0,
  },
}) : {
  sanityFetch: async ({ query, params = {} }: { query: string; params?: Record<string, unknown> }) => {
    // Fallback to regular client fetch if token is not available
    const result = await client.fetch(query, params)
    return { data: result }
  },
  SanityLive: () => null, // No-op component when token is not available
};

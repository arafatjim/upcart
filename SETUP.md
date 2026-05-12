# Environment Setup Guide

## Local Development

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Fill in your Sanity credentials:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-02-06
```

3. If your dataset is **private**, add the API token:
```
SANITY_API_TOKEN=your_api_token
```

## Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to **Settings > Environment Variables**
3. Add the following variables:

### Required:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Your dataset name (e.g., `production`)
- `NEXT_PUBLIC_SANITY_API_VERSION` - API version (e.g., `2026-02-06`)

### Optional (if dataset is private):
- `SANITY_API_TOKEN` - Your Sanity API token for read access

## Getting Sanity Credentials

1. Go to [https://manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Go to **API** section
4. Find your **Project ID** and **Dataset name**
5. If you need a token:
   - Go to **API tokens** tab
   - Create a new token with **Viewer** role
   - Copy the token

## Troubleshooting

If products don't show on Vercel:
1. Check browser console for error messages (will display if fetch fails)
2. Verify all environment variables are set correctly
3. Ensure your Sanity dataset is configured correctly
4. Check that your dataset has product data
5. If private dataset, ensure token has read permissions

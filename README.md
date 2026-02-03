# Μουσική Γωνιά - Greek Taverna Website

A beautiful, modern website for the traditional Greek taverna "Μουσική Γωνιά" featuring online booking, menu, live music events, and Google Reviews integration.

## Features

- 🏠 **Hero Section** - Stunning taverna imagery with key info
- 📅 **Online Booking** - Real-time availability via Google Sheets
- 🍽️ **Interactive Menu** - Tabbed menu with all categories
- 🎵 **Live Music Events** - Upcoming performances
- 📸 **Photo Gallery** - Lightbox gallery with food & ambiance photos
- ⭐ **Google Reviews** - Dynamic reviews from Google Places API
- 📍 **Location & Hours** - Google Maps integration
- 📱 **Fully Responsive** - Mobile-first design
- 🌍 **All Greek** - Native Greek content

## Tech Stack

- **Frontend**: React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Vercel Serverless Functions
- **Database**: Google Sheets (for bookings)
- **APIs**: Google Places (for reviews)

## Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd mousiki-gonia
npm install
```

### 2. Environment Setup

Copy the example environment file and fill in your credentials:

```bash
cp .env.example .env
```

### 3. Google Cloud Setup

#### Google Sheets (Booking System)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable the **Google Sheets API**
4. Go to **IAM & Admin > Service Accounts**
5. Create a new service account and download the JSON key
6. Create a Google Sheet with columns: Date | Time | PartySize | Name | Phone | Email | Notes | MusicTable | CreatedAt
7. Share the sheet with your service account email (Editor access)

#### Google Places API (Reviews)

1. Enable the **Places API** in Google Cloud Console
2. Create an API key with Places API restriction
3. Find your Place ID using [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)

### 4. Deploy to Vercel

```bash
vercel
```

Add these environment variables in Vercel:

| Variable | Description |
|----------|-------------|
| `GOOGLE_SHEETS_ID` | Your Google Sheet ID |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email |
| `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` | Private key |
| `GOOGLE_PLACES_API_KEY` | Your Places API key |
| `GOOGLE_PLACE_ID` | Your business Place ID |

## API Routes

- `GET /api/availability?date=YYYY-MM-DD` - Check available time slots
- `POST /api/booking` - Create a new reservation
- `GET /api/reviews` - Fetch Google Reviews (24h cache)

## License

© 2026 Μουσική Γωνιά. All rights reserved.

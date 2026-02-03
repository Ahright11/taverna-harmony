import type { VercelRequest, VercelResponse } from '@vercel/node';

// This is a Vercel Serverless Function
// In production, this would connect to Google Sheets API

interface TimeSlot {
  time: string;
  available: boolean;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { date } = req.query;

  if (!date || typeof date !== 'string') {
    return res.status(400).json({ error: 'Date parameter is required (YYYY-MM-DD)' });
  }

  // Validate date format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    return res.status(400).json({ error: 'Invalid date format. Use YYYY-MM-DD' });
  }

  try {
    // TODO: Connect to Google Sheets API
    // const { google } = require('googleapis');
    // 
    // const auth = new google.auth.GoogleAuth({
    //   credentials: {
    //     client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    //     private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    //   },
    //   scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    // });
    //
    // const sheets = google.sheets({ version: 'v4', auth });
    // const response = await sheets.spreadsheets.values.get({
    //   spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    //   range: 'Bookings!A:I',
    // });
    //
    // const rows = response.data.values || [];
    // const bookedSlots = rows
    //   .filter(row => row[0] === date)
    //   .map(row => row[1]); // Time column

    // For demo, generate mock data
    const slots: TimeSlot[] = [];
    for (let hour = 12; hour <= 23; hour++) {
      for (let min = 0; min < 60; min += 30) {
        if (hour === 23 && min === 30) continue;
        const time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
        // Mock availability based on date hash
        const hash = date.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const available = ((hash + hour + min) % 3) !== 0;
        slots.push({ time, available });
      }
    }

    return res.status(200).json({
      date,
      slots,
    });
  } catch (error) {
    console.error('Error fetching availability:', error);
    return res.status(500).json({ error: 'Failed to fetch availability' });
  }
}

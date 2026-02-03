import type { VercelRequest, VercelResponse } from '@vercel/node';

// This is a Vercel Serverless Function
// In production, this would connect to Google Sheets API

interface BookingRequest {
  date: string;
  time: string;
  partySize: number;
  name: string;
  phone: string;
  email?: string;
  notes?: string;
  musicTable: boolean;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body: BookingRequest = req.body;

    // Validate required fields
    if (!body.date || !body.time || !body.partySize || !body.name || !body.phone) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['date', 'time', 'partySize', 'name', 'phone'],
      });
    }

    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(body.date)) {
      return res.status(400).json({ error: 'Invalid date format. Use YYYY-MM-DD' });
    }

    // Validate time format
    const timeRegex = /^\d{2}:\d{2}$/;
    if (!timeRegex.test(body.time)) {
      return res.status(400).json({ error: 'Invalid time format. Use HH:MM' });
    }

    // Validate party size
    if (body.partySize < 1 || body.partySize > 12) {
      return res.status(400).json({ error: 'Party size must be between 1 and 12' });
    }

    // Validate phone (Greek format)
    const phoneRegex = /^(\+30|0030)?[26][0-9]{9}$/;
    const cleanPhone = body.phone.replace(/\s/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return res.status(400).json({ error: 'Invalid Greek phone number' });
    }

    // TODO: Connect to Google Sheets API
    // const { google } = require('googleapis');
    // 
    // const auth = new google.auth.GoogleAuth({
    //   credentials: {
    //     client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    //     private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    //   },
    //   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    // });
    //
    // const sheets = google.sheets({ version: 'v4', auth });
    // 
    // // Check if slot is still available
    // const existingBookings = await sheets.spreadsheets.values.get({
    //   spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    //   range: 'Bookings!A:B',
    // });
    // 
    // const isBooked = (existingBookings.data.values || [])
    //   .some(row => row[0] === body.date && row[1] === body.time);
    //
    // if (isBooked) {
    //   return res.status(409).json({ error: 'This time slot is no longer available' });
    // }
    //
    // // Append new booking
    // await sheets.spreadsheets.values.append({
    //   spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    //   range: 'Bookings!A:I',
    //   valueInputOption: 'USER_ENTERED',
    //   requestBody: {
    //     values: [[
    //       body.date,
    //       body.time,
    //       body.partySize,
    //       body.name,
    //       body.phone,
    //       body.email || '',
    //       body.notes || '',
    //       body.musicTable ? 'Yes' : 'No',
    //       new Date().toISOString(),
    //     ]],
    //   },
    // });

    // Generate confirmation ID
    const confirmationId = `MG-${Date.now().toString(36).toUpperCase()}`;

    return res.status(201).json({
      success: true,
      confirmationId,
      booking: {
        date: body.date,
        time: body.time,
        partySize: body.partySize,
        name: body.name,
        musicTable: body.musicTable,
      },
      message: 'Booking confirmed! You will receive a confirmation SMS.',
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    return res.status(500).json({ error: 'Failed to create booking' });
  }
}

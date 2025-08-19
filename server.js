require('dotenv').config();
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(express.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const numbers = []; // In-memory storage for demo purposes

// Create a new virtual Indian number
app.post('/api/numbers', async (req, res) => {
  try {
    // Buy an Indian number
    const twilioNumber = await client.incomingPhoneNumbers.create({
      phoneNumber: req.body.desiredNumber, // optional: choose specific number
      smsUrl: process.env.SMS_WEBHOOK_URL,
      voiceUrl: process.env.VOICE_WEBHOOK_URL,
      smsMethod: 'POST',
      voiceMethod: 'POST',
      smsApplicationSid: process.env.SMS_APP_SID, // Optional, for advanced setups
      voiceApplicationSid: process.env.VOICE_APP_SID // Optional, for advanced setups

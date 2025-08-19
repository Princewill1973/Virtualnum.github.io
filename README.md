# Virtual Indian Number Website

This project allows you to generate virtual Indian phone numbers (via Twilio) and view all SMS and calls received by those numbers.

**Note:** The backend (server.js) must be deployed separately (e.g., on Render, Cyclic.sh, or your VPS). GitHub Pages can only host the static frontend (index.html).

## Features

- Create virtual Indian phone numbers (requires Twilio account with permission for Indian numbers)
- View all SMS and calls received by each number

## Setup

### 1. Twilio Account

- [Sign up for Twilio](https://www.twilio.com/).
- Make sure your account is verified and has permission to purchase Indian numbers. (You may need to contact Twilio support for this.)

### 2. Backend

- Copy `server.js` to your backend server.
- Create a `.env` file in the same directory with:

    ```
    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    # Optionally set webhook URLs
    # SMS_WEBHOOK_URL=https://yourdomain.com/sms-hook
    # VOICE_WEBHOOK_URL=https://yourdomain.com/voice-hook
    PORT=3000
    ```

- Install dependencies and start the server:

    ```sh
    npm install express cors twilio dotenv
    node server.js
    ```

### 3. Frontend

- `index.html` is ready for GitHub Pages/static hosting.
- By default, it expects the backend at the same origin. If your backend is on a different domain, update the fetch URLs in `index.html` accordingly.

### 4. Usage

- Visit your frontend site.
- Click "Create Virtual Number" to generate a new number.
- Click "Show SMS & Calls" to view messages and calls received by each number.

## Notes

- Production deployments should use a real database, secure HTTPS, and proper API authentication.
- This demo stores numbers in memory only (restarts will lose data).
- All legal and regulatory compliance for Indian virtual numbers is your responsibility.
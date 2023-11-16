# Calendar Generator

Script to generate an ICAL file from an array of events using [ICAL Generator](https://www.npmjs.com/package/ical-generator).

## Installation

```bash
npm install
```

## Usage

1. Replace the information located in `./config.ts` with your own.
2. Run `npm start` to start the server.
3. Navigate to `http://localhost:3000/` to download the ICAL file.

The ICAL file will be downloaded as `calendar.ics`. It can be imported into Google Calendar, Outlook, etc.

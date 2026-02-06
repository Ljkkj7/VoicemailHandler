# Voicemail Handler — Web Prototype for General Practice

## Overview

Voicemail Handler is a lightweight prototype web application designed for general practice and other medical clinics to manage incoming patient voicemail messages in a clear, auditable, and clinically useful way. The prototype demonstrates a modern, secure-feeling user interface for voicemail triage and basic management workflows.

This repository contains a Django backend and a React frontend. The frontend provides a clickable prototype (dashboard) that shows a voicemail inbox and simple management actions. The backend persists example data using SQLite and exposes APIs used by the frontend.

## Primary Use Case

Clinicians and administrative staff at a general practice need a reliable, fast way to review patient voicemails, identify urgent items, and record next steps. This prototype focuses on the triage and short-term management of voicemails, enabling teams to:

- See a voicemail inbox with each message represented as a structured item (caller, time, duration, transcription/summary)
- Quickly identify priority messages with visual triage signals
- Apply basic management actions such as changing status (new/triaged/handled), setting the next step, and adding brief notes
- Demonstrate an interaction model that could be integrated with an electronic health record (EHR) in future work

## Deliverables Demonstrated by the Prototype

1. Runnable/clickable prototype dashboard
	- A working React frontend serves an inbox-style dashboard representing voicemails.
2. Structured voicemail items
	- Each voicemail is shown with metadata (caller, timestamp, duration, short text) to support rapid review.
3. Prioritisation / triage signals
	- Items include visual flags or badges to indicate priority (e.g., urgent, review, routine).
4. Basic management actions
	- Users can change voicemail status, set a next step (e.g., call back, escalate), and mark items complete.

These features are implemented as a prototype — meant to demonstrate UI/UX and basic APIs, not a production-ready clinical system.

## Quickstart — Run the Prototype Locally

Requirements

- Node.js (v16+) and npm
- Python 3.10+ and virtualenv (recommended)

Run backend

1. Create and activate a Python virtual environment in the `backend` folder:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1    # PowerShell on Windows
pip install -r requirements.txt   # if present
```

2. Run database migrations and start the Django server:

```powershell
python manage.py migrate
python manage.py runserver
```

Run frontend

1. Install dependencies and start the React dev server from the `frontend` folder:

```bash
cd frontend
npm install
npm start
```

2. Open the app in your browser (usually http://localhost:3000). The React app proxies API requests to the Django backend (http://localhost:8000) if configured.

Notes

- The prototype uses SQLite for ease of local testing. For production, replace with a managed database and add authentication.
- Transcription and voicemail audio playback are simulated in the prototype; integrate an audio store and speech-to-text provider for production workflows.
- The UI prioritises clarity and auditability; any clinical deployment would require security, audit logging, and regulatory review.

## Project Structure

- `backend/` — Django project and API endpoints
- `frontend/` — React prototype UI

## Next Steps / Integration Ideas

- Add user authentication and role-based access control
- Integrate real voicemail storage and playback (S3 or similar)
- Add speech-to-text and confidence scoring to enhance triage signals
- Add audit trails and linking to patient records (EHR interoperability)

## Contributing

This repository is a prototype. If you want to contribute, please open an issue or submit a pull request with small, focused changes.

## License

This project is provided as-is for prototyping and demonstration purposes.

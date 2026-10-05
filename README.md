# Bacon's Arcade

A browser-style arcade portal with:
- a proxy web browser
- a game catalog with names, icons, descriptions, guides, and controls
- a favorites system that saves games to a My Catalog tab

## Run locally

1. Open a terminal in the project folder.
2. Install dependencies:
   npm install
3. Start the app:
   npm start
4. Open in your browser:
   http://localhost:3000

## Use a different port

If port 3000 is busy, run:

PORT=3001 npm start

Then open:

http://localhost:3001

## Deployment options

This app is a Node/Express app, so it can be deployed to:
- Render
- Railway
- Fly.io
- Heroku
- any VPS or container host

For a cloud deployment, set the environment variable:
- PORT

Then start with:
- npm start

## Notes

- The app stores favorites in the browser using localStorage.
- The proxy supports standard http and https websites.
- Some sites may block being embedded in a browser frame or proxy environment.

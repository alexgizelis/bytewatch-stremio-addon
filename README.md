# Bytewatch Stremio Addon

A Node.js-powered Stremio addon that scrapes multiple streaming sites using Puppeteer. It integrates them into the Stremio ecosystem through a single stream handler.

---

## Features

- Scrapes multiple providers from a single file
- Real browser scraping via `puppeteer-real-browser`
- Stremio addon-compatible manifest & stream handler
- Caching using `node-cache`
- Logging using `winston`
- Deployable on BeamUp with 1 command

---

## Project Structure

```
bytewatch-stremio-addon/
│
├── index.js                # Entry point: defines manifest and stream handler
├── unified-extractor.js   # Centralized scraper logic for multiple providers
├── logger.js              # Logger setup using Winston
├── package.json           # Metadata and dependencies
└── README.md              # Documentation
```

---

## Requirements

### To Run Locally

- Node.js v18+ recommended
- npm (Node package manager)
- At least 1GB RAM (Puppeteer launches a browser)

### To Deploy with BeamUp

- Node.js v18+ or later
- a GitHub account
- your SSH key added to your GitHub account
- Internet access (no firewall restrictions on HTTPS)

---

## Installation (Local Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/93bx/bytewatch-stremio-addon.git
   cd bytewatch-stremio-addon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the addon**
   ```bash
   node index.js
   ```

4. **Test locally**
   Open your browser:
   ```
   http://localhost:7000/manifest.json
   ```

5. **Add it to Stremio**
   - Open Stremio desktop app
   - Go to: **Add-ons > Paste the URL in the search bar**
   

There are currently two such clients that you can test with:
    Stremio v4.4.10+
    Stremio Web Version
Note: if you want to load an addon by URL in Stremio, the URL must either be accessed on 127.0.0.1 or support HTTPS.
---

## 🚀 Deployment (Using BeamUp)

BeamUp is a serverless platform for deploying Node.js apps (like this addon) publicly in seconds.

### Install BeamUp CLI

```bash
npm install beamup-cli -g
```

### Usage

go to the project directory and write the following command
```bash
beamup 
```
The beamup command is a universal command, it will handle both initial setup and deploying projects.

### One Time Setup

When you run beamup for the first time, it will:
It will give you a public URL like:

- ask you for a host, use a.baby-beamup.club 
- ask you for your GitHub username

Once you've added this information, it will save it and not ask you again. If you ever want to change these settings, use beamup config.

### Use in Stremio

- Open Stremio
- Navigate to: **Add-ons > Paste the beamup url in the searchbar**

Now you can use the addon successfully.
---

## Notes

- All scrapers are defined in `unified-extractor.js`.
- Logs will print to console using Winston (with timestamp and levels).
- Caching is in-memory using `node-cache` to improve performance and avoid repeat scraping.
- Puppeteer requires a headless-compatible environment — avoid deploying on memory-constrained VMs without swap.

---

## License

ISC License. Use freely and modify as needed.
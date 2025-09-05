# Youtube Music Playlist Scraper

A Node.js-powered web scraper that uses Puppeteer to automate Chrome, navigate to selected YouTube channels, and collect all unwatched videos (without the red progress bar). The tool simulates creating a playlist of these videos and opens the playlist link for easy access. Perfect for curating music or video playlists from your favorite channels!

## Requirements
- Node.js v16+ (LTS recommended)
- Google Chrome installed (default path: `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`)
- Windows PowerShell or CMD (do NOT use WSL to run this script)

## Setup
1. Clone this repository and navigate to the project folder.
2. Install dependencies:
   ```
   npm install
   ```
3. Edit `src/index.js` if your Chrome path is different.

## Usage
Run the script from PowerShell or CMD (not WSL):
```
node src/index.js
```

- The script will open Chrome, visit each channel, collect unwatched videos, and open a simulated playlist link.
- Do not run this script from WSL, as Puppeteer cannot reliably launch Chrome from WSL.

## Notes
- This tool simulates playlist creation. For real playlist creation, you would need to use the YouTube Data API with OAuth.
- If you encounter errors about Chrome not found, check your `executablePath` in `src/index.js`.
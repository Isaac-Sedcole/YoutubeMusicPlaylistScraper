# YouTube Scraper

This project is a web scraper designed to navigate YouTube channels, check video completion status, and compile a playlist of incomplete songs.

## Project Structure

```
youtube-scraper
├── src
│   ├── index.js          # Entry point of the application
│   ├── scraper.js        # Contains the Scraper class for scraping logic
│   └── utils.js          # Utility functions for the scraper
├── package.json          # npm configuration file
├── .gitignore            # Specifies files to ignore in Git
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/youtube-scraper.git
   ```

2. Navigate to the project directory:
   ```
   cd youtube-scraper
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Open the `src/index.js` file and configure the YouTube channels you want to scrape.

2. Run the scraper:
   ```
   node src/index.js
   ```

3. Once the scraping is complete, a link to the generated playlist will be displayed.

## Dependencies

- Puppeteer: A Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
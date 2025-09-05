const puppeteer = require('puppeteer');
const Scraper = require('./scraper');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const scraper = new Scraper(browser);

    const channels = [
        'https://www.youtube.com/@MrSuicideSheep/videos',
        'https://www.youtube.com/@whoisvaliant/videos',
        'https://www.youtube.com/@GalaxyMusic/videos',
        'https://www.youtube.com/@xKitoMusic/videos'
    ];

    let allIncompleteVideos = [];
    let page = null;
    for (const channel of channels) {
        page = await scraper.navigateToChannel(channel);
        const incompleteVideos = await scraper.scrollAndCollect(page);
        allIncompleteVideos = allIncompleteVideos.concat(incompleteVideos);
    }

    if (allIncompleteVideos.length === 0) {
        console.log('No incomplete videos found.');
        await browser.close();
        return;
    }

    // Simulate playlist creation
    const playlistLink = await scraper.createPlaylist(page, allIncompleteVideos);
    console.log(`Your playlist is ready: ${playlistLink}`);

    // Open the playlist link in a new tab
    const playlistPage = await browser.newPage();
    await playlistPage.goto(playlistLink);

    // await browser.close(); // Optionally close browser when done
})();
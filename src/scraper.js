const { formatPlaylistLink } = require('./utils');

class Scraper {
    constructor(browser) {
        this.browser = browser;
    }

    async navigateToChannel(channelUrl) {
        const page = await this.browser.newPage();
        await page.goto(channelUrl);
        return page;
    }

    async scrollAndCollect(page) {
        let videos = [];
        let seenUrls = new Set();
        let hasMoreVideos = true;

        while (hasMoreVideos) {
            const newVideos = await page.evaluate(() => {
                const videoElements = Array.from(document.querySelectorAll('ytd-grid-video-renderer'));
                return videoElements.map(video => {
                    const titleEl = video.querySelector('#video-title');
                    const progressBar = video.querySelector('ytd-thumbnail-overlay-resume-playback-renderer');
                    return {
                        title: titleEl ? titleEl.innerText : '',
                        url: titleEl ? titleEl.href : '',
                        isComplete: !!progressBar
                    };
                });
            });

            for (const vid of newVideos) {
                if (!seenUrls.has(vid.url)) {
                    videos.push(vid);
                    seenUrls.add(vid.url);
                }
            }

            hasMoreVideos = await page.evaluate(() => {
                const prevHeight = document.documentElement.scrollHeight;
                window.scrollBy(0, prevHeight);
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(document.documentElement.scrollHeight > prevHeight);
                    }, 1500);
                });
            });

            await page.waitForTimeout(2000);
        }

        // Only return videos that are NOT complete (no red bar)
        return videos.filter(v => !v.isComplete && v.url);
    }

    async createPlaylist(page, incompleteVideos) {
        // This is a simulation: actually creating a playlist and adding videos requires YouTube API and OAuth
        // Instead, we will just collect the video URLs and print them, and simulate a playlist link
        const playlistId = 'SIMULATED_PLAYLIST_ID';
        // Optionally, you could automate the UI to create a playlist and add videos, but this is fragile
        return formatPlaylistLink(playlistId);
    }

    async openPlaylistLink(page, playlistUrl) {
        await page.goto(playlistUrl);
    }
}

module.exports = Scraper;
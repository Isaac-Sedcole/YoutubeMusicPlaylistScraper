export function waitForElement(selector, timeout = 30000) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        const interval = setInterval(() => {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(interval);
                resolve(element);
            } else if (Date.now() - startTime > timeout) {
                clearInterval(interval);
                reject(new Error(`Element ${selector} not found within ${timeout}ms`));
            }
        }, 100);
    });
}

export function isVideoComplete(videoElement) {
    // YouTube shows a red bar as a div with style width > 0% in the thumbnail overlay
    const progressBar = videoElement.querySelector('ytd-thumbnail-overlay-resume-playback-renderer');
    return !!progressBar;
}

export function formatPlaylistLink(playlistId) {
    return `https://www.youtube.com/playlist?list=${playlistId}`;
}
export function trackPageView (url) {
	try {
		window.gtag('config', process.env.GOOGLE_ANALYTICS, {
			page_location: url,
		});
	} catch (error) {
		// silences the error in dev mode
		// and/or if gtag fails to load
		console.log(`Failed to log analytics page view event for url: ${url}`);
	}
}

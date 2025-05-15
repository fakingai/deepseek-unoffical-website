// Environment variables for all links
export const LINKS = {
	// Download links
	DOWNLOAD: {
		MACOS:
			process.env.NEXT_PUBLIC_DOWNLOAD_MACOS ||
			"https://github.com/fakingai/deepseek-clone/releases/latest/download/DeepSeek-macOS.dmg",
		WINDOWS:
			process.env.NEXT_PUBLIC_DOWNLOAD_WINDOWS ||
			"https://github.com/fakingai/deepseek-clone/releases/latest/download/DeepSeek-Windows.exe",
		ANDROID:
			process.env.NEXT_PUBLIC_DOWNLOAD_ANDROID ||
			"https://github.com/fakingai/deepseek-clone/releases/latest/download/DeepSeek-Android.apk",
		IOS_TESTFLIGHT:
			process.env.NEXT_PUBLIC_DOWNLOAD_IOS_TESTFLIGHT ||
			"https://apps.apple.com/app/testflight/id899247664",
		WEB:
			process.env.NEXT_PUBLIC_APP_WEB_URL ||
			"https://deepseek-web.fakingai.com/",
	},

	// Social links
	SOCIAL: {
		GITHUB:
			process.env.NEXT_PUBLIC_GITHUB_URL ||
			"https://github.com/fakingai/deepseek-unoffical-website",
	},

	// Legal links
	LEGAL: {
		PRIVACY: process.env.NEXT_PUBLIC_PRIVACY_URL || "#",
		TERMS: process.env.NEXT_PUBLIC_TERMS_URL || "#",
		CONTACT: process.env.NEXT_PUBLIC_CONTACT_URL || "#",
	},
};

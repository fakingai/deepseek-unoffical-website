// Environment variables for all links
export const LINKS = {
  // Download links
  DOWNLOAD: {
    MACOS: process.env.NEXT_PUBLIC_DOWNLOAD_MACOS || "http://download.loki.wang/deepseek/macos/latest.dmg",
    WINDOWS: process.env.NEXT_PUBLIC_DOWNLOAD_WINDOWS || "http://download.loki.wang/deepseek/win/latest.exe",
    ANDROID: process.env.NEXT_PUBLIC_DOWNLOAD_ANDROID || "http://download.loki.wang/deepseek/android/latest.apk",
    IOS_TESTFLIGHT:
      process.env.NEXT_PUBLIC_DOWNLOAD_IOS_TESTFLIGHT || "https://apps.apple.com/app/testflight/id899247664",
    WEB: process.env.NEXT_PUBLIC_APP_WEB_URL || "#",
  },

  // Social links
  SOCIAL: {
    GITHUB: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/yourusername/deepseekClone",
  },

  // Legal links
  LEGAL: {
    PRIVACY: process.env.NEXT_PUBLIC_PRIVACY_URL || "#",
    TERMS: process.env.NEXT_PUBLIC_TERMS_URL || "#",
    CONTACT: process.env.NEXT_PUBLIC_CONTACT_URL || "#",
  },
}

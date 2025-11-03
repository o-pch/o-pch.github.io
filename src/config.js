// Centralized configuration for site-wide values (URLs, file names, etc.)
const config = {
  // set your YouTube channel URL here
  youtubeUrl: "https://www.youtube.com/channel/UCdRxeIuMfjf6hXDwE2MfJjw",

  // MyRPG development process playlist
  myrpgPlaylist: "https://youtube.com/playlist?list=PLbP78mBX9wpCH1SwnLix14rd1g47XJ5fO&si=qhUDMT-njW2qoGGc",

  // Social / contact placeholders (fill these later)
  xUrl: "", // X (Twitter) profile or URL
  discordUrl: "https://discordapp.com/users/1202562812463943691", // Discord invite or server URL
  metamaskAddress: "0xCEa742eE43dC00be970a0F252075b1cE5A76270F", // MetaMask / wallet address

  // downloadable assets (relative to site root or public/)
  downloads: {
    rom: "files/gb-myrpg-release-MyRPGDemo202507.zip",
    windows: "files/MyRPGDemo202507_Windows.zip"
  },

  // You can specify either a full YouTube URL or just the 11-character video ID.
  // Using only the ID is more concise and less error-prone for configuration.
  playDemoMovie: "hW0FFGEMquU"
}

export default config

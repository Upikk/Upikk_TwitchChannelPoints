# Upikk_TwitchChannelPoints
This script allows you to reward players who have earned points on your Twitch channel.

# Acquiring Twitch User Access Token
- Create an application [Here](https://dev.twitch.tv/console)
- Copy Client ID and Client Secret
- Download [Twitch CLI](https://github.com/twitchdev/twitch-cli?tab=readme-ov-file#download)
- Open CMD and execute the command: `twitch token -u -s "channel:read:redemptions"`
- Paste your Client ID and Client Secret when prompted.
- Copy User Access Token
- Paste it in `config.json` file

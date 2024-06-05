const TwitchPS = require("@sammwy/twitch-ps");
const { TWITCH_API_KEY } = require("./config.json");
const init_topics = [
  {
    token: TWITCH_API_KEY,
    topic: "channel-points-channel-v1.706098389",
  },
];

const ps = new TwitchPS({
  init_topics: init_topics,
  debug: false,
});

ps.on("channel-points", (data) => {
  const id = data.redemption.user_input;
  const reward = data.redemption.reward.title;
  exports[GetCurrentResourceName()].OnPoints(id, reward);
});

ps.on("connected", () => {
  console.log("Connected to Twitch API");
});

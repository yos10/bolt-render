'use strict';

require('dotenv').config();

const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug',
});

app.message(/^hello$/i, async ({ message, say }) => {
  await say({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `こんにちは <@${message.user}>さん`,
        },
      },
    ],
    text: `こんにちは <@${message.user}>さん`,
  });
});

app.event('reaction_added', async ({ event, say }) => {
  console.log({ event });

  // bot へのリアクションにだけ反応するように
  if (event.item_user !== 'U041XR6R4P5') return;

  await say({
    text: `Thanks for the :${event.reaction}:`,
    thread_ts: event.item.ts,
  });
});

app.message(/^おみくじ$/, async ({ message, say }) => {
  const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
  const lot = lots[Math.floor(Math.random() * lots.length)];
  const text = `<@${message.user}> 今の運勢は ${lot} です`;

  await say(text);
});

(async () => {
  // Start the app
  await app.start();

  console.log('⚡️ Bolt app is running!');
})();

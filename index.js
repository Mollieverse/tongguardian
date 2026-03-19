const { bot } = require('./src/bot');
const db = require('./src/db');

async function main() {
  console.log('🛡️  TONGuardian starting...');
  await db.init();
  console.log('✅ Database ready');
  bot.start({
    onStart: () => console.log('✅ Bot is live! Open Telegram and send /start'),
  });
}

main().catch(err => {
  console.error('Startup error:', err);
  process.exit(1);
});

process.on('uncaughtException', err => console.error('Error:', err.message));

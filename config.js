const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://github.com/naveeddogar/KING-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/a6b9bbde7feaa92c69c7b.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '🐉𝆺𝅥⃝🤴🏿𝙰𝙻𝙰𝙼𝙸𝙽๛³❤‍🩹𝆺𝅥⃝🕊' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '🐉𝆺𝅥⃝🤴🏿𝙰𝙻𝙰𝙼𝙸𝙽๛³❤‍🩹𝆺𝅥⃝🕊' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0p5K0NmS2puWkR3OWpCUDlIb2FuUjMxVFlFNkVLYzdPWDJWbjhkZm1tST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDFUb1U5cDl5ZjU0WVVrYWxQdnJzQ2pwNElKYUNVT0RwL2lXdnlkaUhpVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTVlBRE1mekp4dVlpKzFiNzVBeWdncGdUbE9jeGt3NVp2MFcxV052S0ZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQZWE2UlJGaEVhdytqdk16Wis1bnlCUWY4all3Y3lVaWIveDlDWXdtRUVFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMSEFOVFlKd25qS0RabGIxNW95bU1MaWloYkhVV1lGakpXTjJ1NVBwMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZtVzBna3ZZVVBOK0h2aTRYOHppRzNQbmptWGNXTXF6K3NpYUh5dnE1bjA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBOHNubUVMNSs3aTlPTk9wVFhaNXBmS1dqajFEUEYxRmFTS2tLb1hkVmdibEY1VHVubU8yMytKcGViT21sM1gzOUdQOXFYZjZoR2VaMjZVZjh1cGNqUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI0MSwiYWR2U2VjcmV0S2V5IjoibFQxQU9ORHNqaVJicFl0Nmo3OVNNd1dreURIYkxQZnRDbFJRYTQzeGlSTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTk2MDkzNjkwMTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkJDQkIyQzg3MkRDOTE4RUEzQzUwOThBODJFOUJCMEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNjg0ODI4OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMHNUREdzYWdTOVMwSXR6X2hOaTZiUSIsInBob25lSWQiOiIzNjMxOTZmNS04NGJjLTRkZmYtYTAzZi1kMGEwNjM2NDk4MDAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXRyZktIV3dUMm5Yc01xUmlpNEV3a25xNm9NPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuYW1DVTUxb3dmTFZ2RXVyUzVKSCsvKysxeUE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQVGg0djhIRUpuZzhhMEdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0bXZTaWRJZGtVMXVFQTBWWmdXUUxHUUdFdEd0T1NyZFYyaFRUTlJGQlhNPSIsImFjY291bnRTaWduYXR1cmUiOiJVT1c3Y0w5djA5bDdMSlR0Z0tKblN2WEo5eGIzK0NZSUZ5QnR6MFdTL0tjcThFSXZzQnFLb2EyQmpPY1JjeGl4dlRHdmNrQ3BCa0QvUElEcTgyTTVCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicEliRzJwbmdhUXI5SjhTQllseVRqRlBWZHhpbWYwL1kydlhYZzJiM1c5R2ovUGNxbkJLVmVkdkJGeGVXYU84aVJXUVFLdFR1OUJLWlFuWkZJeERPakE9PSJ9LCJtZSI6eyJpZCI6IjkxOTYwOTM2OTAxNzo0MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLqp4HwnZmw8J2Zu/CdmbDwnZm88J2ZuPCdmb3vo7/wnZm08J2Zs/CdmbjwnZqD8J2ZvvCdmoHqp4IifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5NjA5MzY5MDE3OjQxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVKcjBvblNIWkZOYmhBTkZXWUZrQ3hrQmhMUnJUa3EzVmRvVTB6VVJRVnoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDY4NDgyODMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRU42In0= : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? '🐉𝆺𝅥⃝🤴🏿𝙰𝙻𝙰𝙼𝙸𝙽๛³❤‍🩹𝆺𝅥⃝🕊' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? '🐉𝆺𝅥⃝🤴🏿𝙰𝙻𝙰𝙼𝙸𝙽๛³❤‍🩹𝆺𝅥⃝🕊' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR-2.0',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})

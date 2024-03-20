const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("923461584582")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://laibatalat95:L5AQ0pX4zdPIcL2q@cluster0.2btdsqr.mongodb.net/?retryWrites=true&w=majority"
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '923461584582'
global.devs = '923461584582';
global.website = 'https://github.com/naveeddogar/KING-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/a6b9bbde7feaa92c69c7b.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'ART-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ART' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUw1c29TTHMxcDVodm5RU0NWR0V5Q2svZnVXc3JSRHVWUDBDUGVqYkxWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK01ZZ3pkNXMzY01KWitYaEpDOUd2eXFzVUI4RWhwNjFnY09CRHhrZUdpcz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLT3dvUU14S05DanozTldGa2JBL0ZRamhiNjhxdmE3ekNnSmlSeHF5Z1VZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIS1VHS1E0QmNGdzRzOCtJQ2orcTdrTk0rayt4K1BBRy84WURsVTYycVZvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1ISVJPVXN2dEFXbVpFU1c3dCtoSXBQMSszanA4S0xyWmpLd1ZDTEt4M2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCUlVQcTU5dXBPVXhzOGtuSll5eG1rS2wySzVucnF6S2lxUFdhczk2U009In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKdHZXSHNqT2tqbitBVWR1b2xZWG5UUnpMRXowbEhzYkxRQUtlUTBqRVNxVGZYQXJzWjBadXV0aGVXUGZyUStXUEpxd3p4d2ZaWFF0SUVFU3FEakhBdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEsImFkdlNlY3JldEtleSI6ImpFb0RvSHBhRndjU0VLbzNQQlhySTlYb3ZncXJxUnVRVEFQZmhJSkRlcE09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjIxdDZFUjJuVEZHY0lNUTZ1eS1IT1EiLCJwaG9uZUlkIjoiZjdiYWUzN2EtZTdkMC00MzgxLThlODItMGQ0YThiZGExZmEzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNNU2t3blZ1UFdoTlRjUkQ0MjJLa2ZBWEFjbz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaStiOVhpMzRrdlpBR3I3Z3EzTUdwb1hjd3RNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFRsa3BnSEVNWHE2YThHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOHNmWVlORE9zR20vS2NxWG10MGVZU2tESU81cXp1b2pkUlArT25VRjRtVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY2tveGJmMVM0UWY0Q3UxU2pVU0FCNWpuUzlJSXJLVmFkYk1wTzFqTVJidjdJUlo3L2k3RllRMG55SisxbU82Z1J5c01BN0J1aUhMRUR3MUVsZlMxQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IlJxQm8zaGlFNmxHWFZNdkUzdmw1SWRjNExRVHlzZXVaOURSTHlsWG1LVEhWcm5TWW5JYlNXNXJ5djhpamhRcmZKNjBZTnZOU1diT0Z3dWZMdC9YNER3PT0ifSwibWUiOnsiaWQiOiI5MjM0NjE1ODQ1ODI6MjBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0NjE1ODQ1ODI6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZkxIMkdEUXpyQnB2eW5LbDVyZEhtRXBBeUR1YXM3cUkzVVQvanAxQmVKbCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMDkxMjgzOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHQkMifQ==' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'ART' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
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

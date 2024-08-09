const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝐒𝐀𝐃✬𝐁𝐎𝐓' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝐒𝐚𝐝✰𝐁𝐨𝐲' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0RLZk1HU0lpQit4RVVlQ2JTbWxuZVhNbTNGOWIvdjNEQTJSck1DNjJXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWVSQXJZajkvMERpRFkyVzlwNXA5VklWQ3hZYlg5d3FaZFdDby9vcG9Hdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTThUWktxdjhrNng1NmhCVzZBUTk1N0hLdlBYdFlXQlRjN1VjR0NhUDN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2dG1aNzE0N0xEY3pmR0VSUHNBN3F2Rld5dHYra0U0TGJ3R1pDQ1VaSFRZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9Fb1plN1FDdU81WnZOTGpRWm0vVmlNYVZpeVpQUW9YY09mSFpkQU1IbW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJENU1PVkRuYXU3cnZTbm04YU5PVkF1cDQ3WUtLd3hyYW9NejBtV0RhQzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkx1Nmo1UnNHWk93WWRuRVFJbzUxL2JCZUxXTEcybWhEMEpwY0UyajdFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGpVSXZpK3A0OEd4bHV1cnVUVHU5Qk9SS0drbTZab2FUU1lWL1MxYWlSYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVRekRwTkR6WkpDV3BRMW9KRTE4MitkbGkwWU1uZUdvMXVvRVk5SEY1cGZ6NlozRmNGRmJlNzdSNmFoemhzeUN1L0MzUDhRejA4S0IxK0dXUlkrREJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiIvZ3lzK1ZPQysyMGU5Z2VJaE90SHRSZlNYS0xIMitrUnhnYkpTcWV1YXh3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOdXFDeDJmM1NlMmhZbVZNU2tNY1R3IiwicGhvbmVJZCI6IjUxODA1NTk2LTgzNWMtNDRmZS1iMGZjLWVlNDYxMmM3ZTU1MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYalcybytaNEQ0MXBLOS9xQTlXc0xWbnVLdTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXZNRVRkQndpLzJxVjBZUWptQzByclJzQTcwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVXNzdCWUE4IiwibWUiOnsiaWQiOiIyMjU3OTA3MjMyMzoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKcsPCdkJLwnZCa8J2QnS3wnZCB8J2QqPCdkLLinLDwn5iUIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMalRoY1FHRUtyNXI3VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTeXhWMkt0Uklmako1V2VXcGpJekV1aGRIaDdTWVJTa2tNcXhsQkZTeFQ0PSIsImFjY291bnRTaWduYXR1cmUiOiI5ei9DL004Q2RvYldhM1BVcFQ4Q2hCSnBVSWtoSk9jMUFMeWo5ZGxaMTBqSzJMQTAwaFJORXpzeEYwNWQ2QzRrRWxLR3NkMU9KbkpuN1c3M3R4WDJDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMHNzUDVOYkJmbFExNVlFOU1zNHZzRlBSZkh3RDRFLzhMZlZ6R1VyeUxGQnJWK1pxYnRVWDZKcVBLVVdVMlpVM1ZJT3pqM2c4d3d5aTFpdS9NbkZmRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjU3OTA3MjMyMzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVzc1ZkaXJVU0g0eWVWbmxxWXlNeExvWFI0ZTBtRVVwSkRLc1pRUlVzVSsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI1NDczODQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1kxIn0=' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'false' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '✓' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '*💮Coucou moi c'est* ```Sad✰Boy``` *votre bot* *assistants que puis faire pour vous*

```A noté sur moi```

_💮. Tous le Monde, n'a pas la même version de moi, Certain peuvent te dire que jsuis une pourriture et d'autres que jsuis un mec bien,_

_💮. Croyez les tous, j'agis selon ce que t'es pour moi,_

 _💮.Simple ✨_' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})

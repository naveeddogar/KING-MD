const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("2347038494997")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '2347038494997'
global.devs = '2347038494997';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'no-name tech' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BGeGVmSm9ZMHFvanE4czlhKytHdEJQTXFBY3lyOWRHdkxBL2RNM3FFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFVacDJLT3ExaHYvUFQyMGRScGZQWEpleUU2a1NmZUpzSkxMcG5oeU5HND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQ3A3Tm9sMHZuRVFMYlJ1TXFsNjlLZWhKUHdWcGFwWm1VU3I1eGpOYUZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnMk5DdXkwQW5ELytBdDhiaWMwalk2YzR3L0xOMlQ3dEFUSXUxS1IrMENJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlEZUdESjdQMDZzVlVsVGxML2FnSFIxYzVXdkV2Q1RhNjJxQjJUM2dTVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdjOURoM21pVTdGSmZhZjlEMzVwL3lvVUljN3BIeTZJRk94aUdUSUQya0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9Mb0Jua1c0clhKSGFJN1M1NWlFRE1iY0swcFZKZ3k5Wmx6ZEtZeG9rTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZklOQUlSWFg5YjYrcmkyY01iMXZWbDZTdXZSVkdtdnk1V0lTdXlXRGpUaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNSaTQyZTZDTE5xaytodE1TeXcwWDVabnFzenphT1hwcW9UcFNnQmVGZEZvNUoyVnlvZ0o3WktpcW1GVlVRdm93SjhDY3NGZnRHZ3N0R2gxeG4zWGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiIrMEtqczlndUg5TlpuVUpjRzRhM0ZyWHZWTExmajh2WFlpckFwSU1meG9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaWDJ6V0tOVFNYNjdZdnU2cFVINGR3IiwicGhvbmVJZCI6IjM1ZDVmNTQ2LWM5YTMtNDQ5Yy04N2ZkLWEzZTQxMDc4YjQxOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Z0RsV2RqQ1l0d09JT2hERVBnNGY2MmtVMUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHRpbHJIY0ptVHIyeDltVHlJT1NTREhrZC9VPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNSOEc3U1ZUIiwibWUiOnsiaWQiOiIyMzQ3MDM4NDk0OTk3OjYzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im5vLW5hbWUgdGVjaCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSi84eUlrRkVJdWRvclVHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ0dXUVRQL0lQRzA0azhhdFl3NktjdExuMTdwSjJNa1dXcWNQT3JDZlpDOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWEE5WERWREZGaXFJNzJWZnBsQXpiVm5neTF1andBcjU5RVByM1NIK0UvTUVFQlU5d0V0K21zdXUrajY3bEp6T0lMdFUyRXlkb0R2Zm1MSTg2c0NzQVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImxZY3JDZDcrdjkvQmdUbGlWdis3dVNUZnk5cERscEdhZ3JkQytLK2w2N2VJQVJnT2pWM2JUcGN0cTRwWmludnpiemMyY2VhN2U1NC8wVnQvTGpVT2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzAzODQ5NDk5Nzo2M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRaGxrRXoveUR4dE9KUEdyV01PaW5MUzU5ZTZTZGpKRmxxbkR6cXduMlF2In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMzIyNTg0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUc4LyJ9 : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
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
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})

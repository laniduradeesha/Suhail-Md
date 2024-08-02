const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_25_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjksXG4gICAgICAgIDQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgwLFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICA0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NixcbiAgICAgICAgMjEzLFxuICAgICAgICA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDg0LFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc2LFxuICAgICAgICA3MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0LFxuICAgICAgICA3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDc2LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOSxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidk4rbU9kNzVvZ3hSZTJiZmlWUXRuOS85ZUFyZDVPd2lGQmREd2FIRkxRUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWkNsSXlVem1RZzZEX1EzQ2IwVzVfUVwiLFxuICBcInBob25lSWRcIjogXCI0YTMzMzJkMy0yNDE0LTQwNWMtODA5NS1lZjg3ZTdkNTY1NDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMzgsXG4gICAgICAxMjgsXG4gICAgICAxMjYsXG4gICAgICAyMzEsXG4gICAgICA1LFxuICAgICAgMTQ2LFxuICAgICAgNTgsXG4gICAgICAyNCxcbiAgICAgIDE2NyxcbiAgICAgIDQ1LFxuICAgICAgNzUsXG4gICAgICAxNzEsXG4gICAgICA3MyxcbiAgICAgIDQ3LFxuICAgICAgMjEyLFxuICAgICAgMTc2LFxuICAgICAgMTM1LFxuICAgICAgMTEsXG4gICAgICA4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDIyOSxcbiAgICAgIDE3OSxcbiAgICAgIDU2LFxuICAgICAgMzgsXG4gICAgICAxLFxuICAgICAgNTgsXG4gICAgICAxODIsXG4gICAgICAyMjIsXG4gICAgICAyMDQsXG4gICAgICAxMzIsXG4gICAgICAyNDksXG4gICAgICAyNDksXG4gICAgICAyMTQsXG4gICAgICAxMzYsXG4gICAgICA2OSxcbiAgICAgIDE3NixcbiAgICAgIDEyMSxcbiAgICAgIDkyLFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVFNTdSRVJDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4MTQxNDUxNTozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzM1NTE1NDk4NjYxMTU6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkRId1BvQkVOR2R0YlVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyNndYa1loK2lmRjdLMWNNc1YzWUxKNTd3Q01HUVdvTm9tdnZyZWtkSTB3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhuY3RxZ0JxMTdRTzZXVC8wVjJNWWxhemNacHdGUHMyK2R0WGhJSU1VelI3Q3QxbmJoNytEWEJMN1hubGQ5Q3hYTXoyNjZEYmY1d1lwb01IZzlDd0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNVUTIvU2RKYUVOSlV2QlBlcW1ITmV2TTFQNTlpMUpvSVVqNEpTaVRYRlhjU0s5cXRsN2VRd0dBNG5yZWY3dDFjd3NkUzhXN0lrM1U3YXp3VllvWkJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzgxNDE0NTE1OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYzMzk0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1MS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUxLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiblgvZmFwU1dGSFE2L1dNaHlRN2JHOEJvSU9Ec2IzcjFFZWYzRlljeVp6az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MjUzNDU2NzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ʟᴀɴɪʏᴀ_ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "xLANIYA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

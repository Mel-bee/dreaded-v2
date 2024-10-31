/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || '';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '254114018035';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DREADED';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFWZlRWWVdPQkJrZVNSVFk3V3RuNm9yS1hraXN1N2NmQU1WRnFTMTcxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzIrY2hzTnN1WDhTOEhwdy9sTW9taTdycU5DNWY0VjlEbXV0RzcyeVlYaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSEJpQnIxOXZ6aGtNSjBCMU9CcUF2Wks3OWhBVzVaWmhJb3J3cW1IamtzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoSGtseHBnSFpHYWVSMVF4STB6cXlCTXdZdUZXd0xsTGZGcFE0YmNJRWkwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitJL09YUkplcUFjbVVCbEpuQVFOaVVyaXhKaEwrUVh5OGJyVjJHU0ZxMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImltdDhyWi9QYVA3eXhVK3piL0ppN3ZWQVh0RzhNWVk0V3pQOGZTTXZ4Q1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVqeFE1elQyYmFRQjAyQmN3Wm9rZmQ3Z1V0RjlQTk1SSzZTUlFQajdGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2Y1SWVvY0p1NmpRand3bFczRkUveVlwbVQ0WDFVajVrMHNXeGt0SlhXOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFTZGpuc1M3NW12Y0FNTkxxUkZ0czZFM1NKT01HYVNEK1NGUDUrTEZXaGtBV0labjZVWFBQcHFvcjR4QkJQT1A4azBLU01XeTgyOE1tSVZFSmNXQmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6IjZFWVUzbmg1Z29wbUx0aXMvQzhXcjR1VDBiazlKdHVvMHA3N3liakJ0aFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzExMTcwMTgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRDQTBENDgxRTQyNUUyNzlDM0I2QUY1MkU0N0FGMUU3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzAzOTA4MzV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxMTE3MDE4MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3MTNGODc4RjdEQjgyN0Y2QjI0RTA2OThCQTZFN0Y3MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwMzkwODQ2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuREdGVGpxM1FsS3ZLVldBc0x3dC1BIiwicGhvbmVJZCI6IjExYjNmMGE5LTQzMWYtNGE0My1iY2I5LTk3ZTNiZmViOGQ1MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0K1pPMnlSNTV2dHVuTVFQUGxpeVBNa25YbXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmlDOTVXc0o5dlVyb1gyMVBsUGEvRVBGMHRVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRaU1BMRTIxIiwibWUiOnsiaWQiOiIyNTQ3MTExNzAxODA6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTfCfkpZF8J+SlUzinaTvuI8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ovYThNOENFSnZXanJrR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVzUlE4b0dJRFBGTVpMVWFoQlZDcDFWSURyWXFScXhGOVB5cFVvdmpaME09IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFlMDMyTFJ5d3NsaVZhalFpRlpNQUFmZkkzUk9uM291eGdkQVQyRmhIVE9oT1dEMWZocG9qZVp1eEtDRmZUMExMTVZhR0c1Z1FQcjE2MVQ5REk2OEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhOUplTzVVY3pNb0dsdGxFV29pSXRSYjk5VWJBNks2bmZkMk85a2swak8xM2grZlJOSzgrcTN2Z0NFUTVvNmhkbU9uNDJZYUZqeGFJVHN4QmZqTnZqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxMTE3MDE4MDoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYckVVUEtCaUF6eFRHUzFHb1FWUXFkVlNBNjJLa2FzUmZUOHFWS0w0MmREIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwMzkwODI1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUg3KyJ9";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};

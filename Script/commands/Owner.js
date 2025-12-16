const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  description: "Show Owner Info with styled box & random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  
  const info = `
╔═════════════════════ ✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═════════════════════ ✿
║ 👑 𝗡𝗮𝗺𝗲 : 𝗦𝐀𝐈𝐅𝐔𝐋 𝐈𝐒𝐋𝐀𝐌
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝐁𝐎𝐓
║ 🎂 𝗔𝗴𝗲 : 26+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : (বউ বাংলাদেশ আমি বিদেশ)
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝗛𝗦𝗖
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝐑𝐚𝐦𝐠𝐨𝐧𝐣,𝐋𝐚𝐤𝐬𝐦𝐢𝐩𝐮𝐫
╠═════════════════════ ✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═════════════════════ ✿
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
║ fb.com/100011152309303
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 :
║ m.me/100011152309303
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :
║ wa.me/00966556922013
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 :
║ t.me/saiful713
╚═════════════════════ ✿
`;

  const images = [
    "https://i.postimg.cc/VL7V0Sbw/369250874-1930802593968132-6623658624781565033-n.jpg",
    "https://i.postimg.cc/VL7V0Sbw/369250874-1930802593968132-6623658624781565033-n.jpg",
    "https://i.postimg.cc/VL7V0Sbw/369250874-1930802593968132-6623658624781565033-n.jpg",
    "https://i.postimg.cc/VL7V0Sbw/369250874-1930802593968132-6623658624781565033-n.jpg"
  ];

  const randomImg = images[Math.floor(Math.random() * images.length)];

  const callback = () => api.sendMessage(
    {
      body: info,
      attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
    },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/owner.jpg")
  );

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(__dirname + "/cache/owner.jpg"))
    .on("close", () => callback());
};

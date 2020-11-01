const Canvas = require("canvas");
 class kyaru_canvas {
  async rank(args,message)  {
return new Promise(async (resolve, reject) => {
 if(!args.level||isNaN(args.level)) throw new Error("Не указан аргумент level");
 if(!args.xp || isNaN(args.xp)) throw new Error("Не указан аргумент xp");
  if(!args.usertag) throw new Error("Не указан аргумент usertag");
 if(!args.avatar || !/\.png($|\?.+)/.test(args.avatar)) throw new Error("Не указана аватарка либо  она  не формата png")
if(!args.bg || !/\.png($|\?.+)/.test(args.avatar)) throw new Error("Не указан фон либо фон  он не формата png")
if(!message) throw new Error("Не указан аргумент message")
const Canvas = require("canvas")
const canvas = Canvas.createCanvas(1000 , 282);
const ctx = canvas.getContext('2d');
 Canvas.registerFont(__dirname+'./fonts/myriadpro-bold.ttf', { family: "myriadpro-bold" })
Canvas.registerFont(__dirname+'/fonts/Agency_FB.ttf', { family: "Agency_FB" })
  const background = await Canvas.loadImage(args.bg+ '?size=1024');
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
ctx.font = '45pt myriadpro-bold' 
ctx.fillStyle = '#DCDCDC';
ctx.fillText(`• Уровень: ${args.level}`, canvas.width /  3.9 , canvas.height / 1.2);
ctx.font = '70pt Agency_FB';
ctx.fillStyle = '#DCDCDC';
ctx.fillText(args.usertag, canvas.width / 3.6, canvas.height / 3.0);
ctx.font = '45pt myriadpro-bold';
ctx.fillStyle = '#DCDCDC';
ctx.fillText(`• Опыта: ${args.xp}/${parseInt(args.level) + (parseInt(1)) * 100}`, canvas.width /  3.9, canvas.height / 1.6);
  ctx.beginPath();
ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
ctx.closePath();
ctx.clip();
const avatar = await Canvas.loadImage(args.avatar);
ctx.drawImage(avatar,25, 25, 200, 200)
return  resolve(canvas.toBuffer())
})
}

async  jacque() {
    return new Promise(async (resolve, reject) => {
        const canvas = Canvas.createCanvas(1000, 500);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/748546245274107924/759419021678084167/20200926_175952.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.font = '30pt sans-serif';
        require("node-fetch")('https://senko-info.ga/api/roflan/haudi').then(res => res.json()).then(json => {
            ctx.fillText(json.text, canvas.width / 2.5, canvas.height / 2.1);
            return  resolve(canvas.toBuffer())
        })  
    })
}
async   welcome(args,message)  {
return new Promise(async (resolve, reject) => {
if(!args.guildname) throw new Error("Не указан аргумент guildname");
if(!args.guildmemercount || isNaN(args.guildmemercount)) throw new Error("Не указан аргумент guildmemercount");
if(!args.usertag) throw new Error("Не указан аргумент usertag");
if(!args.bg || !/\.png($|\?.+)/.test(args.bg)) throw new Error("Не указана фон либо  он не формата png")
if(!args.avatar || !/\.png($|\?.+)/.test(args.avatar)) throw new Error("Не указана аватарка либо  она  не формата png")
if(!message) throw new Error("Не указан аргумент message")
const Canvas = require("canvas")
const canvas = Canvas.createCanvas(1050 , 350);
const ctx = canvas.getContext('2d');
Canvas.registerFont(__dirname+'/fonts/Blogger_Sans-Medium_Italic.otf', { family: "Blogger_Sans-Medium_Italic" })
const background = await Canvas.loadImage(args.bg);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
ctx.font = '60pt aa';
ctx.fillStyle = '#87CEEB';
ctx.fillText(`Добро пожаловать`, canvas.width / 3.9, canvas.height / 3.3);
 ctx.font = '40pt Blogger_Sans-Medium_Italic';
ctx.fillStyle = '#87CEEB';
ctx.fillText(`На сервер ${args.guildname}`, canvas.width /  3.9, canvas.height / 1.9);
ctx.font = '40pt Blogger_Sans-Medium_Italic';
ctx.fillStyle = '#87CEEB';
ctx.fillText(`Нас теперь: ${args.guildmemercount}`, canvas.width /  3.9, canvas.height / 1.3);
ctx.font = '35pt Blogger_Sans-Medium_Italic';  
ctx.fillStyle = '#87CEEB';
ctx.fillText(args.usertag, canvas.width /  40, canvas.height / 1.3);
ctx.beginPath();
ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
ctx.closePath();
ctx.clip(); 
const avatar = await Canvas.loadImage(args.avatar);
ctx.drawImage(avatar,25, 25, 200, 200)
return  resolve(canvas.toBuffer())
})
}
async  goodbye(args,message)  {
return new Promise(async (resolve, reject) => {
if(!args.guildmemercount || isNaN(args.guildmemercount)) throw new Error("Не указан аргумент guildmemercount");
if(!args.usertag) throw new Error("Не указан аргумент usertag");
if(!args.bg || !/\.png($|\?.+)/.test(args.bg)) throw new Error("Не указана фон либо  он не формата png")
if(!args.avatar || !/\.png($|\?.+)/.test(args.avatar)) throw new Error("Не указана аватарка либо  она  не формата png")
if(!message) throw new Error("Не указан аргумент message")
const Canvas = require("canvas")
const canvas = Canvas.createCanvas(1050 , 350);
const ctx = canvas.getContext('2d');
Canvas.registerFont(__dirname+'/fonts/Blogger_Sans-Medium_Italic.otf', { family: "Blogger_Sans-Medium_Italic" })
const background = await Canvas.loadImage(args.bg);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
ctx.font = '60pt Blogger_Sans-Medium_Italic';
ctx.fillStyle = '#87CEEB';
ctx.fillText(`Пока`, canvas.width / 3.9, canvas.height / 3.3);
ctx.font = '40pt Blogger_Sans-Medium_Italic';
ctx.fillStyle = '#87CEEB';
ctx.fillText(`Нас теперь: ${args.guildmemercount}`, canvas.width /  3.9, canvas.height / 1.9);
ctx.font = '35pt Blogger_Sans-Medium_Italic';
ctx.fillStyle = '#87CEEB';
ctx.fillText(args.usertag, canvas.width /  40, canvas.height / 1.3);
ctx.beginPath();
ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
ctx.closePath();
ctx.clip();
const avatar = await Canvas.loadImage(member.user.avatarURL({ format: "png", size: 1024}));
ctx.drawImage(avatar,25, 25, 200, 200)      
            return  resolve(canvas.toBuffer())
        })
      }
}
module.exports = kyaru_canvas;

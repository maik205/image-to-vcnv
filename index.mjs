/**
 * 
 * @param {string} url 
 * @returns {Promise<HTMLImageElement>}
 */
async function loadImage(url) {
    return new Promise((r) => {
        let i = new Image();
        i.onload = () => r(i);
        i.src = url;
    });
}
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const img = await loadImage('./test.png');
const width = (canvas.width = 1920);
const height = (canvas.height = 1080);
// First corner
// ctx.clearRect(width/4, height/4, width*3/4, height*3/4);
// ctx.clearRect(0, height/2, width*3/4, height*3/4);
// ctx.clearRect(width/2, 0, width*3/4, height*3/4);
// Second corner
// ctx.clearRect(0, height / 4, width * 3 / 4, height * 3 / 4);
// ctx.clearRect(0, 0, width * 2 / 4, height * 3 / 4);
// ctx.clearRect(width * 3 / 4, height / 2, width, height * 3 / 4);
// Third corner
// ctx.clearRect(0, 0, width * 3 / 4, height * 3 / 4);
// ctx.clearRect(0, height * 3 / 4, width * 2 / 4, height * 3 / 4);
// ctx.clearRect(width * 3 / 4, 0, width / 4, height * 1 / 2);
// // Fourth corner
// ctx.clearRect(width / 4, 0, width * 3 / 4, height * 3 / 4);
// ctx.clearRect(0, 0, width / 4, height / 2);
// ctx.clearRect(width / 2, height * 3 / 4, width / 2, height / 4);
// Middle piece
// Dowload logic
ctx.clearRect(0,0,width,height);
ctx.beginPath();
ctx.rect(width*1/4,height*1/4,width/2,height/2);
ctx.clip();
ctx.drawImage(img, 0, 0, width, height);


// 回调函数方式
const fs = require('fs');
fs.readFile('One.txt', (err, data1) => {
    if (err) throw err;
    fs.readFile('Two.txt', (err, data2) => {
        if (err) throw err;
        fs.readFile('Three.txt', (err, data3) => {
            if (err) throw err;
            console.log(data1 + "\n" + data2 + "\n" + data3);
        })
    })
})

// async 与 await
const util = require('util');
// util中有将API转化为Promise形态的函数：promisify
const mineReadFire = util.promisify(fs.readFile);
async function main() {
    try {
        let data1 = await mineReadFire('One.txt');
        let data2 = await mineReadFire('Two.txt');
        let data3 = await mineReadFire('Three.txt');
        console.log(data1 + "\n" + data2 + "\n" + data3);
    } catch (e) {
        console.log(e);
    }
}
main();
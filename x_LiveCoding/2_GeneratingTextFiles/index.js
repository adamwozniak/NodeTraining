// 1. load recipents
const recipents = require('./input/recipients.json');

// 2. load template
const fs = require('fs');

const template = fs.readFileSync('./input/template.txt').toString();

recipents.forEach(recipent => {
    const presonalizedEmailBody = template.replaceAll('<NAME>', recipent.name);
    fs.writeFileSync(`./output/${recipent.name}.txt`, presonalizedEmailBody);
});
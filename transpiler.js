const data = require('./script.json');
const Tag = require('./Tag.js');
const fs = require('fs');

const numOfPages = data.length;

for(let i = 0; i < numOfPages; i++){
    let content = "";
    data[i].elements.forEach(element => {
        const e = new Tag(element.name, element.attributes, element.html, element.text);
        content = e.genTag();
    })

    fs.writeFile('index.html', content, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
      
}
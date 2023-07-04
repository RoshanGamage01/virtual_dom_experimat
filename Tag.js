class Tag{
    constructor(name, attr, html, text){
        this.tagName = name;
        this.attr = attr;
        this.html = html;
        this.text = text;
        this.title;
    }

    genTag(){
        let html = "";

        if(this.html !== []){
            this.html.forEach(e => {
                const el = new Tag(e.name, e.attributes, e.html, e.text);
                html += el.genTag()+"\n";
            });
        }

        return `<${this.tagName} ${this.parseAttributes()}>${html === "" ? "" : html}${this.text}</${this.tagName}>`;
    }

    parseAttributes(){
        let attributes = "";

        if(this.attr !== []){
            // console.log(this.attr);
            this.attr.forEach(att => {
                attributes += `${att.name} = "${att.value}"`
            })
        }

        return attributes;
    }

    genPage(){
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${this.title !== "" ? this.title : "Document"}</title>
        </head>
        <body>
            ${ this.genTag() }
        </body>
        </html>`
    }
}

module.exports = Tag;
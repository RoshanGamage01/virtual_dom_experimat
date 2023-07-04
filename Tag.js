class Tag{
    constructor(name, attr, html, text){
        this.tagName = name;
        this.attr = attr;
        this.html = html;
        this.text = text;
    }

    genTag(){
        let tagName = this.tagName;
        let attr = this.attr;
        let text = this.text;
        let html = "";

        if(this.html !== []){
            this.html.forEach(e => {
                const el = new Tag(e.name, e.attribute, e.html, e.text);
                html = el.genTag();
            });
        }

        return `
            <${this.tagName}>
                ${html === "" ? "" : html}
                ${this.text}
            </${this.tagName}>
        `
    }
}

module.exports = Tag;
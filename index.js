let template = {
    name: "div",
    attr: [],
    child: [
        {
            name: "p",
            attr: [{style: "color: red;"}],
            child: "This is a Text"
        },
        {
            name: "a",
            attr: [{href: "/google.com"}],
            child: "Go to google"
        },
    ]
}

function createNode(node){
    let el;

    // check if the node is empty or not
    if(!node){
        return
    }

    // check if the node contains only strings or array
    // array means node is a html Tag
    if(typeof node === 'string'){
        return document.createTextNode(node) // return text node
    }else{
        el = document.createElement(node.name);
    }

    // Check if attr has one or many attributes
    if(!Array.isArray(node.attr)){
        if(typeof node.attr === 'object'){
            for(let name in node.attr){
                el[name] = node[name];
            }
        }
    }else{
        node.attr.forEach(attribute => {
            for(let name in attribute){
                el[name] = attribute[name];
            }
        });
    }


    // Check if child is the html node or plain text
    if(Array.isArray(node.child)){
        node.child.forEach(cNode => {
            el.appendChild(createNode(cNode))
        })
    }else{
        el.appendChild(createNode(node.child))
    }

    return el // return the HTML node

}

console.log(createNode(template))

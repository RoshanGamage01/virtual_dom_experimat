const obj = document.createElement("div")

let handler = {
    get: function(obj, prop){
        return obj
    }
}

console.log(new Proxy(obj, handler))


function createNode(nodeName){
    return document.createElement(nodeName);
}

function addAttributes(node, attributes){
    const el = node;

    new Proxy(node, {
        set: function(obj, prop, value){

        }
    })
}
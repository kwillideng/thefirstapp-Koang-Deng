/** The Document */
const _document = {
    elements: new Map(),
    getRoomById: function( id ) {
        console.log(` The element with ID  ${ id } is returned `);
    },
    getElementsByClassName: function( class_name ) {
        console.log(` The elements with class name  ${ id } are returned `);
    },
    createElement: function( tag_name ) {
        console.log("Element created : ", tag_name );
        console.log(" The Elemnt "+ tag_name +" is created ");
        console.log(` The element ${ tag_name } is created `);
    }
}

/** The location */
const _location = {
    host: "localhos",
    herf: "some/path?name=sds",
    reload: function() { console.log(' Reloading the page....') }
}

/** The window */
const _window = {
    document : _document,
    location : _location,
    innerHight: 111,
    innerWidth: 200
}

// remove  an add item

function addItem() {
    var a = document.getElementById("list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    a.appendChild(li);
}

// Creating a function to remove item from list
function removeItem() {

    // Declaring a variable to get select element
    var a = document.getElementById("list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
}


container.onclick = function(event) {
    if (event.target.className != 'remove-button') return;

    let pane = event.target.closest('.pane');
    pane.remove();
  };









/** Usig functions - Modules */

// const _document1 = new Doc();

// function Doc() 
// {
    
//     return {
//         elements: new Map(),
//         getRoomById: function( id ) {
    
//         },
//         getElementsByClassName: function( class_name ) {
    
//         },
//         createElement: function( tag_name ) {
            
//         }
//     }
// }
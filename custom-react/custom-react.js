

const customHtmlElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click here to visit Search Engine...'
}


const customHtmlElementButton = {
    type:'button',
    props:{
        onClick:'alert("Hello from Custom React File")',
        style:'background-color:red; border: 1px solid green; border-radius: 15px 10px 5px 2px',
        class:'success'

    },
    children:'Chick here to Login/Singup'
}

function customRender(htmlElement, container){


    // Managing single tag

    // const domElement = document.createElement(htmlElement.type);
    // domElement.innerHTML = htmlElement.children;
    // domElement.setAttribute('href',htmlElement.props.href);
    // domElement.setAttribute('target',htmlElement.props.target);
    // container.appendChild(domElement);

    // Managing Modular approach

    const domElement = document.createElement(htmlElement.type);
    domElement.innerHTML = htmlElement.children;
    for (const prop in htmlElement.props) {
       if(prop == 'children') continue;
       domElement.setAttribute(prop,htmlElement.props[prop])
    }

    container.appendChild(domElement)

}


const rootContainer = document.getElementById('root');

customRender(customHtmlElementButton, rootContainer);
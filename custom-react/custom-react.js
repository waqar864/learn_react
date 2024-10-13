function customRender(reactElement, container) {
    //following is basic version of creating react type element
    /*
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.props.children;
    domElement.setAttribute('href', element.props.href);
    domElement.setAttribute('target', element.props.target);
    container.appendChild(domElement);
    const props = element.props;

    for (const key in props) {      



    }*/

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props:{
        href: 'https://reactjs.org',
        target: '_blank'
      
    },
    children: 'learn the ract'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)

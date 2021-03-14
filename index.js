// REACT DOM -> take object and create DOM Element
// out of it
function renderElement(element) {
  const {type, props, children} = element;

  if(typeof(type) === 'function' ) {
    return renderElement(type(props));
  }

  if(typeof(type) === 'string') {
    const domElement = document.createElement(type);

    children.forEach( child => {
      if(typeof(child) === 'string') {
        const textNode = document.createTextNode(child)
        domElement.appendChild(textNode);
      } else {
        domElement.appendChild(renderElement(child));
      }
    })

    return domElement;
  }

}

// REACT -> utility to create tree of objects (element)
function createElement(type, props, ...children) {
  return {type, props, children};
}


// Runtime
const userInfo = createElement('div', null,
    createElement('h1', {id: 5}, 'Nir Kaufman'),
    createElement('h2', null, 'Nir Kaufman'),
    createElement('div', null,
      // ['one', 'two', 'three'] -> (<ul> -> <li />)
      createElement(Label, {text: 'streetName', value: '25'}),
      createElement(Label, {text: 'streetName2', value: '252'}),
      createElement(Label, {text: 'streetName3', value: '252'}),
    ),
)

// component (in React) = function that returns element.
// when called - React provide the "props" object as argument
function Label({text}) {
  return createElement('li', null, text);
}

// beginners:
// 1. create component (Button) for button -> label
// 2. create component (Title) for h1 -> text


document.body.appendChild(renderElement(userInfo));


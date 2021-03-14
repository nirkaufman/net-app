// REACT DOM -> take object and create DOM Element
// out of it
function renderElement(element) {
  const {type, props, children} = element;

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
        createElement('p', null, 'Street name'),
        createElement('p', null, '123456'),
    ),
)

document.body.appendChild(renderElement(userInfo));


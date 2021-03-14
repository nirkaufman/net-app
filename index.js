function createElement(type, props, ...children) {
  return {type, props, children};
}

const userInfo = createElement('container', null,
    createElement('title', {id: 5}, 'Nir Kaufman'),
    createElement('subTitle', null, 'Nir Kaufman'),
    createElement('container', null,
        createElement('text', null, 'Street name'),
        createElement('zip', null, '123456'),
    ),
)


console.log(userInfo);


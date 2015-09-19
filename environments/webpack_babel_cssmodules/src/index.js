'use strict';

import styles from './foo.css';

const el = document.createElement('p');
el.innerText = 'hello world';
el.className = styles.foo;

document.body.appendChild(el);

console.log('hello world');

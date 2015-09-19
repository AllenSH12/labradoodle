'use strict';

import React from 'react';
import styles from './foo.css';

const Foo = React.createClass({
  render() {
    return (
      <p className={styles.foo}>hello world</p>
    );
  }
});

React.render(<Foo />, document.body);
console.log('hello world');

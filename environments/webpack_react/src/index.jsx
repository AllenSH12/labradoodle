'use strict';

import React from 'react';

const Foo = React.createClass({
  render() {
    return (
      <p>hello world</p>
    );
  }
});

React.render(<Foo />, document.body);
console.log('hello world');

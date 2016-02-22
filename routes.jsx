import React from 'react';
import {mount} from 'react-mounter';

import {Layout} from './app.jsx';
import {Welcome} from './welcome.jsx';
import {Todos} from './todos.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
      content: (
        <Welcome name="Paul"/>
      )
    });
  }
});

FlowRouter.route("/todos", {
  action() {
    mount(Layout, {
      content: (
        <Todos/>
      )
    });
  }
});

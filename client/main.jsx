import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { MainRouter } from '../imports/router/router.jsx'

import '../imports/api/collections/collections'

Meteor.startup(() => {
  render(<MainRouter/>, document.getElementById('react-target'));
});

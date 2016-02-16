/*
    Home Page
    This will let us make <HomePage/>
*/
import React from 'react';
import { History } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

import Header from './Header';

@autobind
class HomePage extends React.Component {
  mixins: [History]

  render() {
    return (
        <div>
          <Header />
        </div>
    )
  }
}

reactMixin.onClass(HomePage, History);

export default HomePage;

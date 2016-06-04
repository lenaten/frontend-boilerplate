/* @flow */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/action';
import HelloWorld from '../../components/HelloWorld';

function Page() {
  return (
    <div>
      <HelloWorld text="Hello World" />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

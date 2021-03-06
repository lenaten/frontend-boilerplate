
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/action';

function App(props) {
  const { children } = props;
  return (
    <div>
      <p>Header</p>
      {children}
      <p>Footer</p>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.object,
};

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
)(App);

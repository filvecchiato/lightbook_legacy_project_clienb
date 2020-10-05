import React from 'react';
import { connect } from 'react-redux';

const Logout = ({ navigation, onLogout }) => {
  return (
    <>
      {() => {
        onLogout();
        navigation.navigate('Login');
      }}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.userLogout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { useFocusEffect } from '@react-navigation/native';

const Logout = ({ navigation, onLogout }) => {
  useFocusEffect(() => {
    onLogout();
  }, []);

  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.userLogout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);

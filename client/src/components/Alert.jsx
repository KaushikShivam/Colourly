import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { wrapComponent } from 'react-snackbar-alert';

const Alert = ({ alert, createSnackbar }) => {
  useEffect(() => {
    if (alert.message) {
      createSnackbar({
        message: alert.message,
        theme: alert.type
      });
    }
  }, [alert, createSnackbar]);

  return <></>;
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(mapStateToProps)(wrapComponent(Alert));

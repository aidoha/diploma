import React from 'react';
import { CircularProgress, withStyles } from '@material-ui/core';

const ColorCircularProgress = withStyles({
  root: {
    color: '#8282ff',
  },
})(CircularProgress);

const Loader = () => {
  return <ColorCircularProgress />;
};

export default Loader;

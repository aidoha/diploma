import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const CateogryBox = ({ categoryBox, classes }) => {
  const { name, links, icon } = categoryBox;
  return (
    <Grid item lg={3} md={3} className={classes.category_box}>
      <div>{icon}</div>
      <Typography className={classes.category_name}>{name}</Typography>
      {links.map(link => (
        <Typography key={link.name} className={classes.subcategory_name}>
          {link.name}
        </Typography>
      ))}
    </Grid>
  );
};

export default CateogryBox;

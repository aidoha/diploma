import React from 'react';
import { List, ListItem, ListItemIcon, Divider } from '@material-ui/core';
import {
  BusinessRounded,
  TodayRounded,
  BusinessCenterRounded,
  AccountCircleRounded,
} from '@material-ui/icons';
import { useStyles } from './style';

const MainMenu = (props) => {
  const classes = useStyles(props);

  return (
    <List className={classes.menu}>
      {['company', 'calendar', 'services', 'profile'].map((icon, index) => (
        <div key={index} className={classes.item}>
          <ListItem button disableGutters className={classes.listItem}>
            <ListItemIcon className={classes.icon}>
              {icon === 'company' && <BusinessRounded fontSize='large' />}
              {icon === 'calendar' && <TodayRounded fontSize='large' />}
              {icon === 'services' && (
                <BusinessCenterRounded fontSize='large' />
              )}
              {icon === 'profile' && <AccountCircleRounded fontSize='large' />}
            </ListItemIcon>
          </ListItem>
          <Divider className={classes.divider} />
        </div>
      ))}
    </List>
  );
};

export default MainMenu;

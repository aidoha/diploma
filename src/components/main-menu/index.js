import React from 'react';
import { useHistory } from 'react-router-dom';
import { List, ListItem, ListItemIcon, Divider } from '@material-ui/core';
import {
  BusinessRounded,
  TodayRounded,
  BusinessCenterRounded,
  AccountCircleRounded,
} from '@material-ui/icons';
import { useStyles } from './style';

const listItems = [
  { value: 'orders', pathname: '/orders' },
  { value: 'services', pathname: '/company' },
  { value: 'profile', pathname: '/profile' },
];

const MainMenu = (props) => {
  const classes = useStyles(props);
  const history = useHistory();
  const { pathname } = history.location;
  return (
    <List className={classes.menu}>
      <div className={classes.item}>
        <ListItem button disableGutters className={classes.listItem}>
          <ListItemIcon className={classes.icon}>
            <BusinessRounded fontSize='large' />
          </ListItemIcon>
        </ListItem>
        <Divider className={classes.divider} />
        {listItems.map((icon, index) => (
          <ListItem
            key={index}
            button
            disableGutters
            className={classes.listItem}
            selected={pathname === icon.pathname}
          >
            <ListItemIcon className={classes.icon}>
              {icon.value === 'orders' && <TodayRounded fontSize='large' />}
              {icon.value === 'services' && (
                <BusinessCenterRounded fontSize='large' />
              )}
              {icon.value === 'profile' && (
                <AccountCircleRounded fontSize='large' />
              )}
            </ListItemIcon>
          </ListItem>
        ))}
      </div>
    </List>
  );
};

export default MainMenu;

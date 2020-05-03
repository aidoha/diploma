import React from 'react';
import { useHistory } from 'react-router-dom';
import { List, ListItem, ListItemIcon, Divider } from '@material-ui/core';
import {
  BusinessRounded,
  TodayRounded,
  BusinessCenterRounded,
  AccountCircleRounded,
} from '@material-ui/icons';
import { routes } from '../../constants';
import { useStyles } from './style';

const MainMenu = (props) => {
  const classes = useStyles(props);
  const { push, location } = useHistory();
  const { pathname } = location;
  const listItems = [
    { value: 'orders', pathname: '/orders' },
    {
      value: 'company',
      pathname:
        pathname === routes.company ? routes.company : routes.service.add,
    },
    { value: 'profile', pathname: '/profile' },
  ];

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
              <>
                {icon.value === 'orders' && (
                  <TodayRounded
                    fontSize='large'
                    onClick={() => push(routes.orders)}
                  />
                )}
                {icon.value === 'company' && (
                  <BusinessCenterRounded
                    fontSize='large'
                    onClick={() => push(routes.company)}
                  />
                )}
                {icon.value === 'profile' && (
                  <AccountCircleRounded fontSize='large' />
                )}
              </>
            </ListItemIcon>
          </ListItem>
        ))}
      </div>
    </List>
  );
};

export default MainMenu;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MainMenu, CompanyHeader } from '../index';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  main_menu: {
    width: '70px',
  },
  main: {
    width: '100%',
  },
  content: (props) => ({
    padding: props.padding || '20px 0px',
    margin: props.margin,
  }),
});

const MainLayout = (props) => {
  const classes = useStyles(props);
  const { section, hasBackArrow } = props;
  return (
    <div className={classes.root}>
      <div className={classes.main_menu}>
        <MainMenu />
      </div>
      <div className={classes.main}>
        {section === 'company' && <CompanyHeader hasBackArrow={hasBackArrow} />}
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default MainLayout;

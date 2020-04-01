import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { categoryBoxList } from '../../../constants';
import CateogryBox from './categoryBox';

const CategorySection = ({ classes }) => {
  return (
    <Grid item lg={10} md={10} container justify='center' alignItems='center'>
      <Grid item lg={6} md={6} container justify='center' alignItems='center'>
        <Typography component='h3' variant='h3' className={classes.heading}>
          Система онлайн-записи клиентов, созданная для вас
        </Typography>
        <Typography component='h6' variant='h6' className={classes.subheading}>
          Cactus подходит для любого бизнеса в сфере услуг и решения
          корпоративных задач: записи сотрудников на собеседования, внутренние
          мероприятия. Посмотрите примеры настроек онлайн-записи для разных
          категорий бизнеса. Выберите подходящий для себя.
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify='center'
        alignItems='center'
        wrap='wrap'
        lg={10}
        md={10}
      >
        {categoryBoxList.map((categoryBox, index) => (
          <CateogryBox
            key={index}
            categoryBox={categoryBox}
            classes={classes}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default CategorySection;

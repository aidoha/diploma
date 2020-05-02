import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Grid,
  Box,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import ServiceForm from './serviceForm';
import ServiceScheduleList from './serviceScheduleList';
import { useStyles } from '../style';

const collapseBlocks = [
  {
    id: 0,
    title: 'Описание',
    subtitle: 'Информация о вашей услуге',
    component: <ServiceForm />,
  },
  {
    id: 1,
    title: 'Настройки онлайн-записи',
    subtitle: 'Настройки формата онлайн-записи и расписание',
    component: <ServiceScheduleList />,
  },
];

const ServiceDetail = () => {
  const classes = useStyles();
  const { slug } = useParams();
  return (
    <Grid container direction='column'>
      <Box margin='25px 25px 0 25px'>
        <Box fontWeight={600} fontSize={24}>
          {slug === 'add' && 'Создание новой услуги'}
          {slug === 'edit' && 'Редактирование услуги'}
        </Box>
        <Box fontSize='16px' color='#999' marginTop='15px'>
          {slug === 'add' &&
            'Создайте услугу и настройте расписание, чтобы ваши клиенты могли записаться онлайн'}
        </Box>
      </Box>
      <Grid item lg={5} md={5} xs={12}>
        {collapseBlocks.map((block) => (
          <Box margin='20px 25px 0px 25px' key={block.id}>
            <ExpansionPanel
              className={classes.expansion_panel}
              disabled={slug === 'add' && block.id === 1}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Box display='block'>
                  <Box fontWeight='bold' fontSize='18px' marginBottom='10px'>
                    {block.title}
                  </Box>
                  <Box fontWeight='lighter' fontSize='16px' color='#4a4a4a'>
                    {block.subtitle}
                  </Box>
                </Box>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>{block.component}</ExpansionPanelDetails>
            </ExpansionPanel>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default ServiceDetail;

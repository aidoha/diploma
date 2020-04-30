import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  company_preview_container: {
    width: '100%',
    background: '#fff',
    padding: '25px',
    borderRadius: '12px',
    border: '1px solid #eeecf3',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0px 0px 30px #eeecf3',
      transition: 'box-shadow 0.3s ease-in-out;',
    },
  },
  company_preview_counts_item: {
    height: '24px',
    width: '24px',
    borderRadius: '12px',
    lineHeight: '24px',
    color: '#999',
    background: ' #f5f5f5',
    marginLeft: '5px',
  },
  company_services_container: {
    margin: '70px 0px 0px 0px',
  },
  company_services__add: {
    cursor: 'pointer',
  },
  add_icon: {
    color: '#8282ff',
    width: '24px',
    height: '24px',
  },
  service_item: {
    background: '#fff',
    padding: '25px',
    margin: '30px',
    borderRadius: '12px',
    border: '1px solid #eeecf3',
    '&:hover': {
      boxShadow: '0px 0px 30px #eeecf3',
      transition: 'box-shadow 0.3s ease-in-out;',
    },
  },
  service_item_name: {
    cursor: 'pointer',
    '&:hover': {
      color: '#8282ff',
    },
  },
  service_item_actions: {
    margin: '0 10px',
    cursor: 'pointer',
    '&:hover': {
      color: '#8282ff',
    },
  },
  textfield: {
    '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none',
    },
  },
  btn_save_time: {
    backgroundColor: '#8282ff',
    borderColor: '#8282ff',
    textShadow: '0 -1px 0 rgba(0,0,0,.12)',
    color: 'white',
    '&:hover': {
      backgroundColor: '#7654ff',
    },
  },
  btn_save_time_oulined: {
    border: '1px solid #8282ff',
    textShadow: '0 -1px 0 rgba(0,0,0,.12)',
    color: '#8282ff',
  },
});

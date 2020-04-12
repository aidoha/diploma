import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  company_toolbar: {
    background: '#fff',
    color: '#33333e',
    width: '100%',
  },
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
  service_items_list: {
    flexGrow: 1,
  },
  service_item: {
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
});

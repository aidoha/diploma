import {
  UPDATE_START_TIME,
  UPDATE_FINISH_TIME,
  UPDATE_SERVICE_DURATION,
  UPDATE_SERVICE_PRICE
} from './types';
import { getWeekDays } from '../../constants/index';
import { formateWeekArray } from '../../utils/index';

const weekDays = getWeekDays();
const initialWeek = formateWeekArray(weekDays);

const intialState = {
  week: initialWeek,
  service: {
    duration: 60,
    price: 0
  },
  touched: {
    price: false
  }
};

const scheduleReducer = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_START_TIME:
      return {
        ...state,
        week: [
          ...state.week.map(item => {
            if (item.day === action.payload.day) {
              return {
                ...item,
                time: {
                  ...item.time,
                  start: action.payload.startTime
                }
              };
            }
            return item;
          })
        ]
      };
    case UPDATE_FINISH_TIME:
      return {
        ...state,
        week: [
          ...state.week.map(item => {
            if (item.day === action.payload.day) {
              return {
                ...item,
                time: {
                  ...item.time,
                  start: action.payload.finishTime
                }
              };
            }
            return item;
          })
        ]
      };
    case UPDATE_SERVICE_DURATION:
      return {
        ...state,
        service: {
          ...state.service,
          duration: action.payload
        }
      };
    case UPDATE_SERVICE_PRICE:
      return {
        ...state,
        service: {
          ...state.service,
          price: action.payload
        },
        touched: {
          ...state.touched,
          price: true
        }
      };
    default:
      return state;
  }
};

export default scheduleReducer;

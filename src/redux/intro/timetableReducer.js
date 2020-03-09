import { UPDATE_START_TIME, UPDATE_FINISH_TIME } from './types';
import { getWeekDays } from '../../constants/index';
import { formateWeekArray } from '../../utils/index';

const weekDays = getWeekDays();
const initialWeek = formateWeekArray(weekDays);

const intialState = {
  week: initialWeek,
  service: {
    duration: 60,
    price: 0
  }
};

const timetableReducer = (state = intialState, action) => {
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
    default:
      return state;
  }
};

export default timetableReducer;

import {
  UPDATE_WEEK,
  UPDATE_START_TIME,
  UPDATE_FINISH_TIME,
  ADD_DAY,
  UPDATE_SELECTED_DAY,
} from './types';
import { getWeekDays } from '../../constants';

const intialState = {
  week: [],
  weekOptionList: getWeekDays(),
  selectedDay: '',
};

const scheduleReducer = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_WEEK:
      return {
        ...state,
        week: action.payload,
      };
    case ADD_DAY:
      return {
        ...state,
        week: [...state.week, action.payload],
      };
    case UPDATE_SELECTED_DAY:
      return {
        ...state,
        selectedDay: action.payload,
      };
    case UPDATE_START_TIME:
      return {
        ...state,
        week: [
          ...state.week.map((item) => {
            if (item.dayOfWeek === action.payload.day) {
              return {
                ...item,
                openTime: action.payload.startTime,
              };
            }
            return item;
          }),
        ],
      };
    case UPDATE_FINISH_TIME:
      return {
        ...state,
        week: [
          ...state.week.map((item) => {
            if (item.dayOfWeek === action.payload.day) {
              return {
                ...item,
                closeTime: action.payload.finishTime,
              };
            }
            return item;
          }),
        ],
      };
    default:
      return state;
  }
};

export default scheduleReducer;

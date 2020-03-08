import { UPDATE_START_TIME, UPDATE_FINISH_TIME } from './types';

const intialState = {
  time: {
    start: '10:00',
    finish: '19:00'
  },
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
        time: {
          ...state.time,
          start: action.payload
        }
      };
    case UPDATE_FINISH_TIME:
      return {
        ...state,
        time: {
          ...state.time,
          finish: action.payload
        }
      };
    default:
      return state;
  }
};

export default timetableReducer;

import {
  UPDATE_START_TIME,
  UPDATE_FINISH_TIME,
  UPDATE_WEEK,
  UPDATE_SELECTED_DAY,
  ADD_DAY,
  EDIT_DAY,
  DELETE_DAY,
} from './types';

//Timetable
export const handleWeekArray = (week = []) => {
  return {
    type: UPDATE_WEEK,
    payload: week,
  };
};
export const handleAddDay = (day = {}) => {
  return {
    type: ADD_DAY,
    payload: day,
  };
};
export const handleEditDay = (day = {}) => {
  return {
    type: EDIT_DAY,
    payload: day,
  };
};
export const handleDeleteDay = (day = {}) => {
  return {
    type: DELETE_DAY,
    payload: day,
  };
};
export const handleSelectedDay = (selectedDay = '') => {
  return {
    type: UPDATE_SELECTED_DAY,
    payload: selectedDay,
  };
};
export const handleStartTime = (day = '', startTime = '') => {
  return {
    type: UPDATE_START_TIME,
    payload: { day, startTime },
  };
};
export const handleFinishTime = (day = '', finishTime = '') => {
  return {
    type: UPDATE_FINISH_TIME,
    payload: { day, finishTime },
  };
};

//statuses

export const formateWeekArray = (weekDays, timetableState) => {
  return weekDays.map(item => {
    return {
      ...item,
      time: {
        ...(item.time = timetableState.time)
      }
    };
  });
};

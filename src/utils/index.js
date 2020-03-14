export const formateWeekArray = weekDays => {
  return weekDays.map(item => {
    return {
      ...item,
      time: {
        start: '10:00',
        finish: '19:00'
      },
      active: true
    };
  });
};

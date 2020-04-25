export const formateWeekArray = (weekDays) => {
  return weekDays.map((item) => {
    return {
      ...item,
      time: {
        start: '10:00',
        finish: '19:00',
      },
      active: true,
    };
  });
};

export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

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

export const getDayOfWeekById = (id) => {
  switch (id) {
    case 0:
      return 'Вс';
    case 1:
      return 'Пн';
    case 2:
      return 'Вт';
    case 3:
      return 'Ср';
    case 4:
      return 'Чт';
    case 5:
      return 'Пт';
    case 6:
      return 'Сб';
  }
};

export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

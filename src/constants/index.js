export const BUSINESS_CATEGORIES = [
  {
    value: 'auto',
    label: 'Авто'
  },
  {
    value: 'beauty',
    label: 'Красота'
  },
  {
    value: 'food',
    label: 'Кафе, бары, рестораны'
  }
];

export const getSteps = () => {
  return ['Добавление услуги', 'Настройка расписания'];
};
export const getWeekDays = () => {
  return [
    { day: 'Пн' },
    { day: 'Вт' },
    { day: 'Ср' },
    { day: 'Чт' },
    { day: 'Пт' },
    { day: 'Сб' },
    { day: 'Вс' }
  ];
};

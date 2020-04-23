import React from 'react';
import Beauty from '../icons/beauty';
import Medicine from '../icons/medicine';
import Animal from '../icons/animal';
import Law from '../icons/law';
import Food from '../icons/food';
import Entertainment from '../icons/entertainment';
import Education from '../icons/education';
import Sport from '../icons/sport';

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
    { day: 'Вс' },
  ];
};
export const routes = {
  main: '/',
  signIn: '/signin',
  signUp: '/signup',
  company: '/company',
  service: {
    add: '/service/add',
    edit: '/service/edit',
  },
};
export const categoryBoxList = [
  {
    icon: <Beauty />,
    name: 'Красота',
    links: [
      { name: 'Салон красоты' },
      { name: 'Ногтевая студия' },
      { name: 'Косметология' },
    ],
  },
  {
    icon: <Medicine />,
    name: 'Медицина',
    links: [
      { name: 'Психотерапия' },
      { name: 'Медцентры и клиники' },
      { name: 'Стоматология' },
    ],
  },
  {
    icon: <Animal />,
    name: 'Для животных',
    links: [
      { name: 'Ветеринарные центры' },
      { name: 'Зоосалоны' },
      { name: 'Зоопарикмахерские' },
    ],
  },
  {
    icon: <Law />,
    name: 'Юридические услуги',
    links: [
      { name: 'Адвокаты' },
      { name: 'Нотариусы' },
      { name: 'Миграционные услуги' },
    ],
  },
  {
    icon: <Food />,
    name: 'Еда',
    links: [{ name: 'Кафе и рестораны' }],
  },
  {
    icon: <Entertainment />,
    name: 'Развлечения и досуг',
    links: [{ name: 'Квесты' }, { name: 'Компьютерные клубы' }],
  },
  {
    icon: <Education />,
    name: 'Обучение',
    links: [
      { name: 'Автошкола' },
      { name: 'Мастер-класс' },
      { name: 'Детская секция' },
    ],
  },
  {
    icon: <Sport />,
    name: 'Спорт и фитнес',
    links: [
      { name: 'Фитнес-клубы' },
      { name: 'Секции' },
      { name: 'Cтудии йоги' },
    ],
  },
];

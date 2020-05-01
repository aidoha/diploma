export const errors = {
  general: 'Упс... Что-то пошло не так',
  auth: {
    no_such_email: {
      text:
        'Error: GraphQL error: rpc error: code = Unknown desc = no rows in result set',
      label: 'Ваш email не зарегистрирован',
    },
  },
  company: {
    operation_hours: {
      empty_field: 'Заполните все поля',
      exists: 'Этот день уже существует',
    },
  },
};

export const succeses = {
  auth: {
    authorized: 'Вы успешно авторизовались!',
    create_company: 'Вы успешно создали компанию!',
    registered: 'Вы успешно зарегистрировались!',
  },
  service: {
    add: 'Вы успешно создали услугу!',
    edit: 'Вы успешно редактировали свою услугу!',
    delete: 'Вы успешно удалили услугу!',
  },
  company: {
    operation_hours: {
      add: 'Вы успешно добавили рабочий день!',
      edit: 'Вы успешно редактировали рабочий день!',
      delete: 'Вы успешно удалили рабочий день!',
    },
  },
};

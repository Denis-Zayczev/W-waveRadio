const validation = new JustValidate('#form');

validation
  .addField('#text', [{
    rule: 'required',
    errorMessage: 'Введите ваше сообщение',
  },  {
    rule: 'maxLength',
    value: 200,
    errorMessage: 'Текс должнен быть меньше 200 символов',
  }, ])
  .addField('#name', [{
    rule: 'required',
    errorMessage: 'Как вас зовут?',
  }, {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Имя должно быть больше 3 символов',
  }, {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Имя должно быть меньше 30 символов',
  }, ])
  .addField('#email', [{
    rule: 'required',
    errorMessage: 'Укажите ваш e-mail',
  }, {
    rule: 'email',
    errorMessage: 'Почта введена некорректно!',
  }, ]);
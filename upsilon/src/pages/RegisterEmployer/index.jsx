import React, { useState } from 'react';
import {Button } from 'react-bulma-components';
import './RegisterPageEmployer.scss';

/*const schema = Yup.object().shape({
  email: Yup
    .string()
    .required('Поле не может быть пустым'),
  password: Yup
    .string()
    .required('Поле не может быть пустым')
    .min(6, 'Поле должно содержать не менее 6 символов'),
  confirmPassword: Yup
    .string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
  userName: Yup
    .string()
    .required('Поле не может быть пустым'),
  userSurname: Yup
    .string()
    .required('Поле не может быть пустым'),
});*/

const RegisterPage = () => {
  
  

  return (
    <section className='hero has-background-grey-lighter is-fullheight section-auth-emp'>
      <form className='box box-register-emp' /*onSubmit={handleSubmit(onSubmit)}*/>
        <div className='field field-button'>
        <div className='field'>
          <Button
            className='button is-fullwidth button-seeker-emp'
            type='submit'>
              Соискатель
          </Button>
        </div>
        <div className='field'>
          <Button
            className='button is-fullwidth button-employer-emp'
            type='submit'>
              Работодатель
          </Button>
        </div>

        </div>
      <h2>Регистрация организации </h2>
        <div className='field field-register-emp'>
          <h4>Название организации</h4>
        <div className="control">
          <input className="input" type="email" placeholder="Введите e-mail"></input>
        </div>
        </div>
        <div className='field field-register-emp'>
        <h4>Описание</h4>
        <div className="control">
          <input className="input" type="password" placeholder="Введите пароль"></input>
        </div>
        </div>
        <h2>Регистрация сотрудника</h2>
        <div className='field field-register-emp'>
        <h4>Имя</h4>
        <div className="control">
          <input className="input" type="name" placeholder="Ваше Имя"></input>
        </div>
        </div>
        <div className='field field-register-emp'>
        <h4>Фамилия</h4>
        <div className="control">
          <input className="input" type="surname" placeholder="Ваша фамилия"></input>
        </div>
        </div>
        <div className='field field-register-emp'>
        <h4>Отчество</h4>
        <div class="control">
          <input class="input" type="patronimic" placeholder="Ваше Отчество"></input>
        </div>
        </div>
        <div className='field field-register-emp'>
        <h4>Email</h4>
        <div className="control">
          <input className="input" type="email" placeholder="Введите e-mail"></input>
        </div>
        </div>
        <div className='field field-register-emp'>
        <h4>Контактный телефон</h4>
        <div className="control">
          <input className="input" type="phone-number" placeholder="Введите телефон"></input>
        </div>
        </div>
        <div className='field field-register-emp'>
        <h4>Пароль</h4>
        <div className="control">
          <input className="input" type="password" placeholder="Введите пароль"></input>
        </div>
        </div>
        <div className='field field-register-emp'>
        <div className="control">
          <input className="input" type="confirm-password" placeholder="Повторите пароль"></input>
        </div>
        </div>
        
        <div className='field'>
          <Button
            className='button is-fullwidth button-registration'
            type='submit'>
              Зарегитрироваться
          </Button>
        </div>
      </form>
    </section>
    
  )
  }

export default RegisterPage;
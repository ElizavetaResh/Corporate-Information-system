import React, { useState } from 'react';
import { Button } from 'react-bulma-components';
import './RegisterPageUser.scss';
import Task from "../../app/components/Task";

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
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  userName: Yup
    .string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  userSurname: Yup
    .string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});*/

const RegisterPage = () => {
 
  return (
    <section className='hero has-background-grey-lighter is-fullheight section-auth-user'>
        <form className='box box-register-user' /*onSubmit={handleSubmit(onSubmit)}*/>
        <div className='field field-button'>
        <div className='field'>
          <Button
            className='button is-fullwidth button-seeker-user'
            type='submit'>
              Соискатель
          </Button>
        </div>
        <div className='field'>
          <Button
            className='button is-fullwidth button-employer-user'
            type='submit'>
              Работодатель
          </Button>
        </div>

        </div>
      
        <div className='field field-register-user'>
        <div className="control">
          <input className="input" type="email" placeholder="Введите e-mail"></input>
        </div>
        </div>
        <div className='field field-register-user'>
        <div className="control">
          <input className="input" type="password" placeholder="Введите пароль"></input>
        </div>
        </div>
        <div className='field field-register-user'>
        <div className="control">
          <input className="input" type="confirm-password" placeholder="Повторите пароль"></input>
        </div>
        </div>
        <div className='field field-register-user'>
        <div className="control">
          <input className="input" type="name" placeholder="Ваше Имя"></input>
        </div>
        </div>
        <div className='field field-register-user'>
        <div className="control">
          <input className="input" type="surname" placeholder="Ваша фамилия"></input>
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

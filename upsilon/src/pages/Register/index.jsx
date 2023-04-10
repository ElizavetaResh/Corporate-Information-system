import React, { useState } from 'react';
import {
  Button 
} from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { APP_NAME } from '../../app/constants';
import './RegisterPage.scss';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
  username: Yup
    .string()
    .required('Поле не может быть пустым'),
  password: Yup
    .string()
    .required('Поле не может быть пустым')
    .min(6, 'Поле должно содержать не менее 6 символов')
});

const LoginPage = () => {
  
  return (
    <section className='hero has-background-grey-lighter is-fullheight section-auth'>
      
      
      <form className='box box-register' /*onSubmit={handleSubmit(onSubmit)}*/>
        <div className='field field-button'>
        <div className='field'>
          <Button
            className='button is-fullwidth button-seeker'
            type='submit'>
              Соискатель
          </Button>
        </div>
        <div className='field'>
          <Button
            className='button is-fullwidth button-employer'
            type='submit'>
              Работодатель
          </Button>
        </div>

        </div>
      
        <div className='field field-register'>
        <div class="control">
          <input class="input" type="email" placeholder="e.g. alex@example.com"></input>
        </div>
        </div>
        <div className='field field-login'>
        <div class="control">
          <input class="input" type="password" placeholder="********"></input>
        </div>
          
        </div>
        
        <div className='field'>
          <Button
            className='button is-fullwidth button-login'
            type='submit'>
              Войти
          </Button>
        </div>
      </form>
      <form className='box box-register' /*onSubmit={handleSubmit(onSubmit)}*/>
        
        <div className='field'>
          <Button
            className='button is-fullwidth button-registration'
            type='submit'>
              Зарегитрироваться
          </Button>
        </div>
        <div className='field'>
          <p className='register-info'>После регистрации вы получите доступ к размещению резюме</p>
        </div>
        
      </form>
    </section>
    
  )
  }

export default LoginPage;

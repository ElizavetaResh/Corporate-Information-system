import React, { useState } from 'react';
import {
  Button 
} from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../app/store/authSlice/authSlice';
import { useDispatch } from 'react-redux';
import { APP_NAME } from '../../app/constants';
import './LoginPage.scss';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from '../../app/components/Header';

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
  /*const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema)
  })*/
  const isLoading = useSelector;
  (state) => state.auth.isLoading;

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    dispatch(loginUser({ username, password }));
  
    history('/task');
  }

  

  return (
    <section className='hero has-background-grey-lighter is-fullheight section-auth'>
      
      
      <form className='box box-login' onSubmit={handleLogin}>
        <div className='field field-login'>
        <div class="control">
          <input class="input" type="text" id="username" placeholder="Логин/E-mail" value = {username} onChange={(e) => setUsername(e.target.value)}{...register("username")}/>
        </div>
        </div>
        <div className='field field-login'>
        <div class="control">
        <input class="input" type="password" id="password" placeholder="************" value={password} onChange={(e) => setPassword(e.target.value)}{...register("password")}/>
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
      <form className='box box-registration' onSubmit={handleSubmit(onSubmit)}>
        
        <div className='field'>
          <Button
            className='button is-fullwidth button-registration'
            type='submit'>
              Зарегитрироваться
          </Button>
        </div>
        <div className='field'>
          <p className='registration-info'>После регистрации вы получите доступ к размещению резюме</p>
        </div>
        
      </form>
    </section>
    
  )
  }

export default LoginPage;

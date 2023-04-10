import React, { useState } from 'react';
import {
  Button 
} from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../app/store/userSlice';
import { useDispatch } from 'react-redux';
import { APP_NAME } from '../../app/constants';
import './KartochkaRezume.scss';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from '../../app/components/Header';


const SozdanieZdachiPage = () => {
  const [login, setLoging] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onSubmit",
  })

  const onSubmit = (data) => {
    dispatch(setUser({ userName: data.username, isAuth: true }));
    history('/notifications');
  }

  

  return (
    <section className='hero has-background-grey-lighter is-fullheight section-auth'>
      
      
      <form className='box box-login' onSubmit={handleSubmit(onSubmit)}>
      
        
      <div>
        <div class="con4">
          <img className="img" type="userFoto" alt="Аватарка" scr="..."></img>
          {/* <img >{s(value).userFoto}</img> */}
        </div>  
      </div>


        <div className='field '>
        <div class="con1">
          <output class="output" type="user">Иванов Иван</output>
          {/* <pre >{s(value).user}</pre> */}
        </div>  
        </div>

        <div className='field'>
        <div class="con2">
          <output class="output" type="faculty">Факультет прикладной математики и механики</output>
          {/* <pre >{s(value).faculty}</pre> */}
        </div>  
        </div>

        <div className='field'>
        <div class="con3">
          <output class="output" type="ed_name">Бакалавр, 3 курс</output>
          {/* <pre >{s(value).ed_name}</pre> */}
        </div>  
        </div>

        <div className='field'>
        <div class="con">
          <output class="output" type="description"> Описание</output>
          {/* <pre >{s(value).description}</pre> */}
        </div>
        </div>
        
        <div className='field'>
          <Button
            className='button-login'
            type='submit'>
              Только за оплату
          </Button>
        </div>
      </form>

    </section>
    
  )
  }

export default SozdanieZdachiPage;

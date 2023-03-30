import React, { useState } from 'react';
import {
  Button 
} from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../app/store/userSlice';
import { useDispatch } from 'react-redux';
import { APP_NAME } from '../../app/constants';
import './SozdanieZadachi.scss';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from '../../app/components/Header';



const schema = Yup.object().shape({
  username: Yup
    .string()
    .required('Поле не может быть пустым'),
});

const SozdanieZadachiPage = () => {
  const [login, setLoging] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    dispatch(setUser({ userName: data.username, isAuth: true }));
    history('/notifications');
  }

  

  return (
    <section className='hero has-background-grey-lighter is-fullheight section-auth'>
      
      
      <form className='box box-login' onSubmit={handleSubmit(onSubmit)}>
        <div className='name'>Создание задачи</div>
        <div className='field field-login'>
          <div class="con"> Название
            <input class="input" type="colm" placeholder="Введите название"></input>
          </div>    
        </div>

        <div className='field field-login'>
          <div class="con">Описание
            <input class="input" type="description" placeholder="Добавьте описание задачи"></input>
          </div>
        </div>

        
        <div >
          <div>Факультет</div>
            <label class="select-group"> 
                <select class="select" id="srty">
                    <option value="fpmm" selected>Прикладной математики и механики</option>
                    <option value="etf">Электротеънический</option>
                    <option value="chim">Химический</option>
                    <option value="aero">Аэрокосмический</option>
                    <option value="neft">Горнонефтяной</option>
                </select>
            </label>
        </div>

        <div>
          <div>Уровень образования</div>
          <label class="select-group"> 
              <select class="select" id="srty">
                  <option value="1curs" selected>1 курс</option>
                  <option value="2curs">2 курс</option>
                  <option value="3curs">3 курс</option>
                  <option value="4curs">4 курс</option>
                  <option value="bacalavr">бакалавриат</option>
                  <option value="magistr">магистратура</option>
                  <option value="aspirant">аспирантура</option>
              </select>
        </label></div>

        
        
        
        
        <div className='field field-login'>
          <div class="control">Стоимость
            <input class="input" type="cost" placeholder="Введите стоимость, если она предполагается"></input>
          </div>
        </div>

        <div className='field'>
          <Button
            className='button is-fullwidth button-login'
            type='submit'>
              Сохранить
          </Button>
        </div>
      </form>
    </section>
    
    
                
               
  )
  }

export default SozdanieZadachiPage;

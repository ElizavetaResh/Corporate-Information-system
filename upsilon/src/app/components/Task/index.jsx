import React, { useState } from 'react';
import {
  Button 
} from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Task.scss';
import { useForm } from "react-hook-form";


const Task = () => {
  return (  
      <form className='box box-Task'>
      <div>
        <div class="con4">
          <img className="img" type="userFoto" alt="Аватарка" scr="..."></img>
          {/* <img >{s(value).userFoto}</img> */}
        </div>  
      </div>

      <div className='field '>
        <div class="con1">
          <output class="output" type="user">LMSECURITY</output>
          {/* <pre >{s(value).user}</pre> */}
        </div>  
      </div>


      <div className='field '>
        <div class="con1">
          <output class="output" type="title">Актуальные новости дома</output>
          {/* <pre >{s(value).title}</pre> */}
        </div>  
      </div>

        <div className='field'>
        <div class="con2">
          <output class="output" type="faculty">Факультет прикладной математики и механики</output>
          {/* <pre >{s(value).faculty}</pre> */}
        </div>  
        </div>

        <div className='field'>
        <div class="con">
          <output class="output" type="description">
          Информирование по вопросам, касающимся эизнедеятельности дома или благоустройства...</output>
          {/* <pre >{s(value).description}</pre> */}
        </div>
        </div>

        <div className='field'>
        <div class="con3">
          <output class="output" type="ed_name">Консультант Антон Тиунов</output>
          {/* <pre >{s(value).ed_name}</pre> */}
        </div>  
        </div>
        
        <div className='field'>
          <Button
            className='button-login'
            type='submit'> {/* <pre >{s(value).values}</pre> */}
               Цена
          </Button>
        </div>
      </form>

  )
  }

export default Task;

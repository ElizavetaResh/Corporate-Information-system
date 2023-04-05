import React, { useState } from 'react';
import './KartochkaRezume.scss';


const Rezume = () => {
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
        
        <div className='counts'>Только за оплату</div>
      </form>

    </section>
    
  )
  }

export default Rezume;

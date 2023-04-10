import React from 'react';
import './taskCard.scss'

function TaskCard(props) {
  const {  employer, name, faculty, description, workername, workersurname, price} = props.task;

  return (
    <section className='hero has-background-grey-lighter'>
      <form className='box box-card'>
        <div>
          <div class="con4">
            <img className="img" type="userFoto" alt="Аватарка" scr="..."></img>
            {/* <img >{s(value).userFoto}</img> */}
          </div>  
        </div>
        <div className='field'>
          <div class="con1">
            <output class="output" type="user">{employer}</output>
          {/* <pre >{s(value).user}</pre> */}
          </div>  
        </div>
        <div className='field '>
          <div class="con1">
            <output class="output" type="title">{name}</output>
            {/* <pre >{s(value).title}</pre> */}
          </div>  
        </div>
        <div className='field'>
          <div class="con2">
            <output class="output" type="faculty">{faculty}</output>
          {/* <pre >{s(value).faculty}</pre> */}
          </div>  
        </div>
        <div className='field'>
          <div class="con">
            <output class="output" type="description">{description}</output>
          {/* <pre >{s(value).description}</pre> */}
          </div>
        </div>
        <div className='field'>
          <div class="con3">
            <output class="output" type="ed_name">Консультант {workername} {workersurname}</output>
          {/* <pre >{s(value).ed_name}</pre> */}
          </div>  
        </div>
        <div className='field'>
          <div class="con3">
            <output class="output" type="price">Цена {price}</output>
          {/* <pre >{s(value).ed_name}</pre> */}
          </div>  
        </div>
      </form>
    </section>
    
  )
  }

export default TaskCard;

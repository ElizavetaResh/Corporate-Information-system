import React from 'react';
import './taskCard.scss'

function TaskCard(props) {
  const {  employer, name, faculty, description, workername, workersurname, price, education, phone, date} = props.task;
  
  return (
      <div className='box box-card'>
        <div>
           
        </div>
        <div className='field'>
          <div className="field-employer">
            <output className="output" type="user">{employer}</output>
          {/* <pre >{s(value).user}</pre> */}
          </div>  
        </div>
        <div className='field'>
          <div className="field-name">
            <output className="output" type="title">{name}</output>
            {/* <pre >{s(value).title}</pre> */}
          </div>  
        </div>
        <div className='field'>
          <div className="field-faculty">
            <output className="output" type="faculty">{faculty}</output>
          {/* <pre >{s(value).faculty}</pre> */}
          </div>  
        </div>
        <div className='field'>
          <div className="field-description">
            <output className="output" type="description" >{description}...</output>
          {/* <pre >{s(value).description}</pre> */}
          </div>
        </div>
        <div className='field'>
          <div className="field-worker">
            <output className="output" type="ed_name">Консультант {workername} {workersurname}</output>
          {/* <pre >{s(value).ed_name}</pre> */}
          </div>  
        </div>
        
      </div>
    
  )
  }

export default TaskCard;

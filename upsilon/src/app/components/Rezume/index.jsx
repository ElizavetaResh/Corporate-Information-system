import React, { useState } from 'react';
import './Rezume.scss';


function RezumeCard(props) {
  const {  education, faculty, description, seekername, seekersurname} = props.rezume;
  return ( 

    <section className='hero has-background-grey-lighter is-fullheight section-auth'>
      
      
      <form className='box box-rezume'>
      
        
      <div>
        <div class="con4">
          <img className="img" type="userFoto" alt="Аватарка" scr="..."></img>
          {/* <img >{s(value).userFoto}</img> */}
        </div>  
      </div>


        <div className='field-rezume '>
        <div class="con1">
          <output class="output" type="user">{seekername} {seekersurname}</output>
          {/* <pre >{s(value).user}</pre> */}
        </div>  
        </div>

        <div className='field-rezume'>
        <div class="con2">
          <output class="output" type="faculty">{faculty}</output>
          {/* <pre >{s(value).faculty}</pre> */}
        </div>  
        </div>

        <div className='field-rezume'>
        <div class="con3">
          <output class="output" type="ed_name">{education}</output>
          {/* <pre >{s(value).ed_name}</pre> */}
        </div>  
        </div>

        <div className='field-rezume'>
        <div class="con">
          <output class="output" type="description">{description}</output>
          {/* <pre >{s(value).description}</pre> */}
        </div>
        </div>
        
        <div className='counts'></div>
      </form>

    </section>
    
  )
  }

export default RezumeCard;

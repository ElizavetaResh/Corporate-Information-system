import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './filter.scss';
import { Button } from 'react-bulma-components';
import generatePDF from '../../app/components/ReportGenerator/reportGenerator';

function FilterForm(props) {
  const [employers, setEmployers] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [filters, setFilters] = useState([]);
  
  useEffect(() => {
    // Получение данных из базы данных через axios
    axios.get('http://localhost:8080/api/employer').then(response => setEmployers(response.data));
    axios.get('http://localhost:8080/api/faculty').then(response => setFaculties(response.data));
  }, []);

  const handleFilterChange = event => {
    const { name, checked } = event.target;
    if (checked) {
      setFilters([...filters, name]);
    } else {
      setFilters(filters.filter(filter => filter !== name));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const employerIds = filters.filter(filter => filter.startsWith('employer_')).map(filter => filter.split('_')[1]);
    const facultyIds = filters.filter(filter => filter.startsWith('faculty_')).map(filter => filter.split('_')[1]);
    const data = {
      employer_ids: employerIds,
      faculty_ids: facultyIds
    };
    axios.post('http://localhost:8080/api/task/filter', data).then(response => {
      props.setFilteredTasks(response.data);
    });
  };
  const handleGeneratePDF = () => {
    console.log(props);
    generatePDF(props.filteredTasks); // Вызываем функцию generatePDF и передаем ей пропсы из родительского компонента
  };

  return (
    <div>
      <nav>
        <a className="flex1" href="#">Задачи</a>
        <a className="flex" href="#">Резюме</a>
      </nav>
      <div>
        <a className="hea">По дате</a>
      </div>
      <form className='filtr' onSubmit={handleSubmit}>
        <h1 className='filtre'>Фильтр</h1>
        <div>
          <h3 className='filter-name'>Работодатели</h3>
          {employers.map(employer => (
            <label key={employer.em_id}>
              <input className='input-filter' type="checkbox" name={`employer_${employer.em_id}`} onChange={handleFilterChange} />
              {employer.em_name}
            </label>
          ))}
        </div>
        <div>
          <h3 className='filter-name'>Факультеты</h3>
          {faculties.map(faculty => (
            <label key={faculty.f_id}>
              <input className='input-filter' type="checkbox" name={`faculty_${faculty.f_id}`} onChange={handleFilterChange} />
              {faculty.f_name}
            </label>
          ))}
        </div>
        <Button type = "submit" className='Applys'>Применить</Button>
        <Button className='Clears'>Сбросить</Button>
        <Button className='Othet' onClick={props.onClick} >Отчет</Button>
      </form>
    </div>
  );
  
}


export default FilterForm;
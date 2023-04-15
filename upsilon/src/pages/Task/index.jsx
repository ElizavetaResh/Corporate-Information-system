import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tasks from './task';
import FilterForm from './filter';
import generatePDF from '../../app/components/ReportGenerator/reportGenerator';

function FilterPage() {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:8080/api/task')
      .then(response => {
        setTasks(response.data);
        setFilteredTasks(response.data)
      })
      .catch(error => {
        //console.log(error);
      });
  }, []);
  const handleGeneratePDF = () => {
    console.log(filteredTasks);
    generatePDF(filteredTasks); // Вызываем функцию generatePDF и передаем ей пропсы из родительского компонента
  };
  
  return (
    <div className='tasks'>
      <FilterForm setFilteredTasks={setFilteredTasks} onClick={handleGeneratePDF} />
      {filteredTasks.length > 0 ? (
        <Tasks tasks={filteredTasks} />
        ) : (
            <p>Нет результатов</p>
        )}
    </div>
  );
}

export default FilterPage;

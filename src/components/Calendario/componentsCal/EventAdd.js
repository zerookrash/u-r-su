import React from 'react';
import { useForm } from '../../../Hooks/useForm';
import './EventAdd.css';

// Dependencias
import moment from 'moment';


export const EventAdd = ({ handleAddEvent }) => {

  const [{ title, start, end }, handleInputChange, reset] = useForm({
    title: '',
    start: moment().format('YYYY-MM-DD HH:mm'),
    end: moment().add(1, 'h').format('YYYY-MM-DD HH:mm'),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: new Date().getTime(),
      title: title, 
      start: start, 
      end: end 
    };

      handleAddEvent(newEvent);
      console.log(newEvent);
      reset();

    };
  

  return (
    <div className="wrapper card">
      <h6>Schedule a class</h6>

      <form className="p-3 formulario" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <label>Class theme
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Set the objective of the class"
              autoComplete="off"
              value={title}
              onChange={handleInputChange}
            />
            </label>
          </div>
          <div className="col-md-6 col-sm-12">
            <label>Start time
            
            <input 
              type="datetime-local" 
              name="start"
              className="form-control"
              value={start}
              min={start}
              onChange={handleInputChange}
            />
            
            </label>
          </div>
          
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary mt-3 btn-block"
        >
          Schedule Class
        </button>
      </form>
    </div>
  )
}

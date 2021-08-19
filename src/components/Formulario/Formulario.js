import React from "react";
import { useForm } from "../../Hooks/useForm";

// Dependencias
import moment from 'moment';
import Swal from 'sweetalert2';

import "./Formulario.css";
import { Calendario } from "../Calendario/Calendario";

export const Formulario = () => {

  const date = moment().format('YYYY-MM-DD');

  const [formValues, handleInputChange] = useForm({
    user: '',
    pass: '',
    confirm: '',
    name: '',
    lastName: '',
    birthday: date,
    sex: '',
    language: '',
    country: '',
    province: '',
    city: '',
    phone: '',
    create: moment().format()
  });

  const {
    user,
    pass,
    confirm,
    name,
    lastName,
    birthday,
    sex,
    language,
    country,
    province,
    city,
    phone,
    create
  } = formValues;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
     if (pass === confirm) {
      console.log(formValues);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'All your information is correct!',
        showConfirmButton: false,
        timer: 1500
      });
     } else {
       Swal.fire('All fields are required');
     }
  };
  
  // Validacion de la fecha de cumpleaños
  const birthdayLimit = moment().diff(birthday, 'years');
   



  return (
    <>
    <form className="container" onSubmit={handleSubmit}>
      <h1>Student registration</h1>
      <hr />

      <div className="form-group">
        {/* Primera linea de Formulario */}
        <div className="row">
          <div className="col-md-4 col-sm-12 mt-3 mb-3">
            <input
              type="text"
              name="user"
              className={`form-control ${user.length === 0 ? 'is-invalid' : 'is-valid'}`}
              placeholder="User / Email"
              autoComplete="off"
              value={user}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4 col-sm-12 mt-3 mb-3">
            <input
              type="text"
              name="pass"
              className={`form-control ${pass !== confirm || pass.length === 0 ? 'is-invalid' : 'is-valid'}`}
              placeholder="Password"
              autoComplete="off"
              value={pass}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4 col-sm-12 mt-3 mb-3">
            <input
              type="text"
              name="confirm"
              className={`form-control ${pass !== confirm || confirm.length === 0 ? 'is-invalid' : 'is-valid'}`}
              placeholder="Confirm Password"
              autoComplete="off"
              value={confirm}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <hr />

        {/* Segunda linea de formulario */}
        <div className="row">
          <div className="col-md-6 col-sm-12 mt-3 mb-3">
            <input
              type="text"
              name="name"
              className={`form-control ${name.length === 0 ? 'is-invalid' : 'is-valid'}`}
              placeholder="Name"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 col-sm-12 mt-3 mb-3">
            <input
              type="text"
              name="lastName"
              className={`form-control ${lastName.length === 0 ? 'is-invalid' : 'is-valid'}`}
              placeholder="Last Name"
              autoComplete="off"
              value={lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 col-sm-12 mt-3 mb-3">
          <input
              type="text"
              name="phone"
              className={`form-control ${phone.length === 0 ? 'is-invalid' : 'is-valid'}`}
              placeholder="Phone Number"
              autoComplete="off"
              value={phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 col-sm-12 mt-3 mb-3">
            <input
              type="date"
              name="birthday"
              className={`form-control ${birthdayLimit > 18 ? 'is-valid' : 'is-invalid'}`}
              autoComplete="off"
              value={birthday}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 col-sm-12 mt-3 mb-3">
            <input
              type="text"
              disabled
              name="create"
              className="form-control display"
              autoComplete="off"
              value={create}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <hr />

        {/* Tercera liena del formulario */}
        <div className="row">
          <div className="col-md-6 col-sm-12 mt-3 mb-3">
            <select
              className={`form-control ${sex.length === 0 ? 'is-invalid' : 'is-valid'}`}
              name="sex"
              value={sex}
              onChange={handleInputChange}
            >
              <option value="DEFAULT">Choose a Gender ...</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="col-md-6 col-sm-12 mt-3 mb-3">
            <select
              className={`form-control ${language.length === 0 ? 'is-invalid' : 'is-valid'}`}
              name="language"
              value={language}
              onChange={handleInputChange}
            >
              <option value="DEFAULT">Choose a language...</option>
              <option value="esp">Español</option>
              <option value="eng">English</option>
            </select>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 mb-3">
          <input
              type="text"
              name="country"
              className={`form-control ${country.length === 0 ? 'is-invalid' : 'is-valid'}`}
              placeholder="Country"
              autoComplete="off"
              value={country}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4 col-sm-12 mt-3 mb-3">
          <input
              type="text"
              name="city"
              className={`form-control ${city.length === 0 ? 'is-invalid' : 'is-valid'}`}
              placeholder="City"
              autoComplete="off"
              value={city}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4 col-sm-12 mt-3 mb-3">
          <input
              type="text"
              name="province"
              className={`form-control ${province.length === 0 ? 'is-invalid' : 'is-valid'}`}
              placeholder="Province"
              autoComplete="off"
              value={province}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <hr />

        {/* Boton de submits */}

        <button
          type="submit"
          className={`btn btn-outline-primary btn-lg mt-3 
          ${
            user.length === 0 || 
            name.length === 0 || 
            lastName.length === 0 || 
            pass.length === 0 || 
            confirm.length === 0 ||
            phone.length === 0 || 
            country.length === 0 || 
            city.length === 0 ||
            sex.length === 0 ||
            language.length === 0 ||
            province.length === 0 ||
            birthdayLimit < 18 
            ? 'disabled' : ''
          }
          `}
        >
          Save
        </button>
      </div>
    </form>
    <Calendario />
    </>

  );
};

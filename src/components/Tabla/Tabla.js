import React, { useState } from "react";
import "./Tabla.css";

export const Tabla = () => {
  const [value] = useState(localStorage.getItem("registro") || null);

  const info = JSON.parse(value) || {
    user: "",
    pass: "",
    confirm: "",
    name: "",
    lastName: "",
    birthday: "",
    sex: "",
    language: "",
    country: "",
    province: "",
    city: "",
    phone: "",
    create: "",
  };

  const { user, name, lastName, sex, language, city, phone, create } = info;

  return (
    <div className="scroll">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Create</th>
            <th scope="col">User</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Language</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{create}</td>
            <td>{user}</td>
            <td>{name}</td>
            <td>{lastName}</td>
            <td>{phone}</td>
            <th>{sex}</th>
            <th>{language}</th>
            <th>{city}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

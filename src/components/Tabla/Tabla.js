import React from "react";
import { useFetch } from "../../Hooks/useFetch";
import "./Tabla.css";

export const Tabla = () => {
  // const [value] = useState(localStorage.getItem("registro") || null);

  const { data } = useFetch(
    "https://polls-service-pztaufrgvq-uc.a.run.app/alumnos"
  );



  return (
    <div className="scroll">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Language</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Birthday</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Coutry</th>
            <th scope="col">State</th>
            <th scope="col">Account number</th>
            <th scope="col">Create / Update</th>
          </tr>
        </thead>
        <tbody>
          

            {
              
                data.map((res) =>  { return(
                  <tr key={res.id}>
                    <td>{res.name}</td>
                    <td>{res.astName}</td>
                    <td>{res.language}</td>
                    <td>{res.email}</td>
                    <td>{res.sex}</td>
                    <td>{res.birthday}</td>
                    <td>{res.cellphone}</td>
                    <td>{res.city}</td>
                    <td>{res.country}</td>
                    <td>{res.state}</td>
                    <td>{res.numcuenta}</td>
                    <td>{res.signupdate}</td>
                  </tr>
                )})
            }
            
        </tbody>
      </table>
    </div>
  );
};

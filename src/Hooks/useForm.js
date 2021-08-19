import { useState } from 'react'

export const useForm = (initialState={}) => {

  // const [values, setValues] = useState({
  //   numPupil: 0,
  //   user: '',
  //   pass: '',
  //   name: '',
  //   lastName: '',
  //   birthday: '',
  //   create: '',
  //   sex: '',
  //   language: '',
  //   country: '',
  //   province: '',
  //   city: '',
  //   phone: '',
  //   block: '',
  //   lesson: '',
  //   totalPaid: 0,
  //   creditedHours: 0,
  //   hoursStudy: 0,
  //   hoursLeft: 0,
  //   weeklyHours: 0
  // });

  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues( initialState );
  }

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [ target.name ]: target.value
    })
  }

  return [values, handleInputChange, reset];
}

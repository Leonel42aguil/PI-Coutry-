// import { useState } from "react";



export default function NavBar({ onChangeCity }) {
  // const [buscar, setBuscar] = useState("");

  // function handleChange(e) {
  //   const value = e.target.value;

  //   if (value !== "") {
  //     //Si value es diferente, que cambie el valor
  //     setBuscar(value);
  //   }
  // } 

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   onChangeCity(buscar); //Cada vez que cambie la cuidad con el valor city
  // }
  return (
    <form /*onSubmit={handleSubmit}*/>
      <div>
        <div>
          <label>🌍</label>
            <input type="text" /*onChange={handleChange}*/></input>
        </div>
     </div> 
      </form>
  )
}
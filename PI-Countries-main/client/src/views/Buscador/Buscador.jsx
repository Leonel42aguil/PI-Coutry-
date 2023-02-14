// import { useState } from "react";
import { Link } from "react-router-dom";
// import VistaCity from "../VistaCity/VistaCity";

export default function Buscador() {
    //   const [city, setCity] = useState([]);
    //   const [busqueda, setBusqueda] = useState("aa");
    //   const datos = (e) => {
    //     e.preventDefault();
    //     fetch(`https://restcountries.com/v3/all/?name=${busqueda}`)
    //     // https://restcountries.com/v3/all
    //     .then(response => response.json())
    //     .then(data => {
    //         const {search} = data
    //         console.log(search)
    //         setCity(search)
    //     })
    // };
    
    // const cambiarState = e => {
    //     setBusqueda(e.target.value)
    //     console.log(e.target.value)
    // }
    return (
        <div>
          <Link to='/'>Volver</Link>
            <form /*onSubmit={datos}*/>
                <input type='text' placeholder="Buscar city" /*onChange={cambiarState}*/></input>
                <button type="sumbit">Buscar</button>
            </form>
            {/* <div>
                {city.length === 0 ?
                <p>No hay city </p>
                    : city.map(c =>  {
                        return(
                            <VistaCity key={c.idd} id={c.idd} nombre={c.name} imagen={c.flags}/>
                        )
                    })
                }
            </div> */}
        </div>
  );
}
































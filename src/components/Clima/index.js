import React,{useState, useEffect} from "react";
import Ubicacion from '../Ubicacion'

function Clima() {
    const key = '0cc0aa93a7dff5d1bebefc67587b8cff';
    const [mainTemp,setMainTemp] = useState('');
    useEffect(()=> {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ -34.61315 +"&lon="+-58.37723+"&appid=0cc0aa93a7dff5d1bebefc67587b8cff&units=metric")

        .then((res)=>res.json())
        .then((data) => {
            console.log(data)
            setMainTemp(data.main.temp);
        })
},[])
return (
    <>
    <p>Temperatura en Buenos Aires: {mainTemp} </p>
    </>
)
}
export default Clima;


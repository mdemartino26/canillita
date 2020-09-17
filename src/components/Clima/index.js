import React,{useState, useEffect} from "react";
/* import {lat ,lng} from '../Ubicacion' */

function Clima() {
    const key = '0cc0aa93a7dff5d1bebefc67587b8cff';
    const [mainTemp,setMainTemp] = useState('');
    const [position, setPosition] = useState([]);
    
 
  
    useEffect(() => {
        let lat = 0;
        let lng = 0;
        
        navigator.geolocation.getCurrentPosition(
            position => {
                lat = position.coords.latitude;
                lng = position.coords.longitude;
                setPosition ({lat, lng});
                console.log(lat, lng);
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ lng +"&appid=0cc0aa93a7dff5d1bebefc67587b8cff&units=metric")
        .then((res)=>res.json())
        .then((data) => {
            console.log(data)
            setMainTemp(data.main.temp);
        })
})},[])
return (
    <>
    <p>Temperatura: {mainTemp} </p>
    </>
)
}
export default Clima

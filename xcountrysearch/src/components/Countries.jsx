import React, { useEffect, useState } from "react";
import axios from 'axios';
import styles from "./Countries.module.css";
const NewCountries=({common,png,index})=>{
    const[countries,setCountries] = useState([]);
    const [error, setError] = useState(false);
useEffect (()=>{
        axios.get('https://countries-search-data-prod-812920491762.asia-south1.run.app/countries')
        .then(response=>{
            setCountries(response.data);
        })
    .catch(error =>{
        setError(true);
        <div id="alertmessage">Wrong option choosen!</div>
    },[]);
});
    

return (
    <div><input type="text" placeholder="Search for Countries" className={styles.searchbox} />
    {error && <div id="alertmessage">Wrong option chosen!</div>}
    <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "150px",
        width: "150px",
        border: "0.5px solid black",
        borderRadius: "4px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <img
        src={png}
        alt={`Flag of ${common}`}
        style={{ width: "100px", height: "100px" }}
      />
      <h5>{common}</h5>
    {countries.map(({common,png,index})=>(<NewCountries name={common} flag={png} key={index}/>
    ))}
    </div>
    </div>
     );
   };
export default NewCountries;
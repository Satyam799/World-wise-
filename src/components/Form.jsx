// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.css";
import { Uppost } from "../Context";
import { useNavigate } from "react-router-dom";
import {UseUrlposition} from "../Hooks/Position";

export function convertToEmoji(countryCode) {
  if(!countryCode) return
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji,setemoji]=useState('')
  const {Newcity}=Uppost()
  const navigate=useNavigate()
  const {Maplat,Maplng}=UseUrlposition()
useEffect(function(){
  async function fet(){
if( !Maplat && !Maplng)return null
const hi=await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${Maplat}&longitude=${Maplng}`)
const data=await hi.json()
setCityName(data.city)
setCountry(data.countryCode)
setemoji(convertToEmoji(data.countryCode))
}
  fet()
},[Maplat,Maplng])

async function handelsubmit(e){
  e.preventDefault()
if(!cityName || !country)return null
const newcity={
  cityName,
  country,
  date,
  notes,
  emoji,
  position: {
    lat: Maplat,
    lng: Maplng
  }
}
await Newcity(newcity)
navigate("/app/cities")
}


  return (
    <form className={styles.form} onSubmit={handelsubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        { <span className={styles.flag}>{emoji}</span> }
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <button>Add</button>
        <button>&larr; Back</button>
      </div>
    </form>
  );
}

export default Form;

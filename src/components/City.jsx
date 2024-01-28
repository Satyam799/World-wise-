import styles from "./City.module.css";
import {BackButton} from './Backbutton'
import { Uppost } from "../Context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  // TEMP DATA

const {getCity,currentCity}=Uppost()
const id=useParams('id')
useEffect(function(){
  console.log(id.id,currentCity.id)
  if(id.id===currentCity.id  )return
  getCity(id.id)

},[id,getCity,currentCity])


  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{currentCity.emoji}</span> {currentCity.cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {currentCity.cityName} on</h6>
        <p>{formatDate(currentCity.date || null)}</p>
      </div>

      {currentCity.notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{currentCity.notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${currentCity.cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {currentCity.cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;

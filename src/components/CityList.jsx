import { useEffect, useState } from "react"
import styles from './CityList.module.css'
import CityItem from "./CityItem"
import { Uppost } from "../Context"
import Spinner from "./Spinner"

function CityList() {
   const {city,isLoading}=Uppost()
   if(isLoading)return <Spinner/>
    return (
        <div className={styles.cityList}>
            {city?.map((el)=><CityItem el={el} key={el.id}/>)}
        </div>
    )
}

export default CityList

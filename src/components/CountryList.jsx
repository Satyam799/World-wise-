import { Uppost } from "../Context"
import CountryItem from "./CountryItem"
import styles from "./CountryList.module.css"
import Spinner from "./Spinner"
function CountryList() {

    const {city,isLoading}=Uppost()
    //console.log(citi)
if(isLoading) return <Spinner/>
    return (
        <ul  className={styles.countryList}>
            {city?.map((country)=><CountryItem country={country} key={country.id}/> )}
        </ul>
    )
}

export default CountryList

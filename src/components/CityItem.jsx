import { Link } from "react-router-dom"
import styles from "./CityItem.module.css"
import { Uppost } from "../Context";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
}).format(new Date(date));


function CityItem({el}) {
const {cityName,
    id,
    country,
    date,
    emoji,
    position
}=el
const {Delete,currentCity}=Uppost()

function Deletee(e){
e.preventDefault()
Delete(id)
}

return (
        <li >
            <Link className={`${styles.cityItem} ${id!==currentCity.id? '': `${styles['cityItem--active']}` }`} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
          
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>{formatDate(date)}</time>
            <button className={styles.deleteBtn} onClick={Deletee}>&times;</button>
            </Link>
        </li>
    )
}

export default CityItem

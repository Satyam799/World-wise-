import { Link } from "react-router-dom";
import Img from '/logo.png'
import styles from "./Logo.module.css";

function Logo() {
  return <Link to='/'><img src={Img} alt="WorldWise logo" className={styles.logo} />
</Link>
}

export default Logo;

// Uses the same styles as Product
import Pagenav from "../components/Pagenav";
import styles from "./Product.module.css";
import img from "../../img-2.jpg"

export default function Pricing() {
  return (
    <main className={styles.product}>
            <Pagenav/>

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src={img} alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}

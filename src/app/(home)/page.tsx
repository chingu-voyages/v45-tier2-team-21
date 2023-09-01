"use client"
import styles from "@/styles/page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div id={styles["homepage"]}>
      <section id={styles["about"]}>
        <div id={styles["description"]}>
          <h2>Welcome to our website</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi alias molestias repellendus molestiae qui iure aut vero adipisci officia necessitatibus numquam aliquam maiores ex assumenda repellat architecto omnis sapiente sed quaerat mollitia, reiciendis voluptatum. Perspiciatis, nam. Illum maxime sint commodi, accusamus, earum at, omnis dolor quia fugiat perferendis nesciunt! Earum consequuntur perferendis veniam iure neque. Recusandae quos ipsam dicta qui soluta, aliquam iste. Suscipit?
          </p>
        </div>

        <div id={styles["meteorite_img"]}>
          <Image src={"/assets/meteorite.png"} alt={"meteorite"} width={516} height={516} />
        </div>
      </section>
    </div>
  );
}

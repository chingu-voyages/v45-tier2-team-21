"use client";
import VariantButton from "@/components/ui/VariantButton";
import styles from "@/styles/homePage.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <div id={styles["homepage"]}>
      <section id={styles["about"]}>
        <div id={styles["description"]}>
          <h2>Welcome to our website</h2>
          <p>
            Welcome to our project, "21st Century Meteorite Strikes." As part of
            the Chingu Voyage team, we are embarking on an exciting journey to
            leverage this extensive dataset to create an innovative web
            application. Our mission is to empower anyone with an interest in
            meteorite strikes to explore this data in ways never before
            imagined.
          </p>
          <Link href={"/meteorites"}>
            <VariantButton color="orange" id="call-to-action-btn">
              Explore data
              <BsArrowRight size={18} />
            </VariantButton>
          </Link>
        </div>

        <div id={styles["meteorite_img"]}>
          <Image
            src={"/assets/meteorite.png"}
            alt={"meteorite"}
            priority
            width={516}
            height={516}
          />
        </div>
      </section>

      {/* Meteorites */}
      <div id={styles["meteorite-1"]} className={styles["meteorite"]}>
        <Image src="/assets/meteorite1.png" alt="" fill sizes=" " />
      </div>
      <div id={styles["meteorite-2"]} className={styles["meteorite"]}>
        <Image src="/assets/meteorite1.png" alt="" fill sizes=" " />
      </div>
      <div id={styles["meteorite-3"]} className={styles["meteorite"]}>
        <Image src="/assets/meteorite1.png" alt="" fill sizes=" " />
      </div>
      <div id={styles["meteorite-4"]} className={styles["meteorite"]}>
        <Image src="/assets/meteorite1.png" alt="" fill sizes=" " />
      </div>
    </div>
  );
}

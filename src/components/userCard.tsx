import Link from "next/link";
import { BsGithub } from "react-icons/bs"
import styles from "../styles/usercard.module.css";
import Image from "next/image";

type UserCardProps = {
  username: string;
  name: string;
  description: string;
};

function UserCard(props: UserCardProps) {
  return (
    <section className={styles.users}>
      <div className="user-image">
        <Image
          src={"/assets/avatar.png"}
          alt={"meteorite"}
          width={200}
          height={200}
        />
      </div>
      <section className={styles.user}>
        <div className={styles.desc}>
          <h1 className="title-font">{props.name}</h1>
          <p>{props.description}</p>
        </div>
        <Link href={`https://github.com/${props.username}`} target='_blank'>
          <BsGithub size={30} />
        </Link>
      </section>
    </section>
  );
}

export default UserCard;

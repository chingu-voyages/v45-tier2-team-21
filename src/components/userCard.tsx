import Link from "next/link";
import { Icon } from '@iconify/react';

type UserCardProps = {
    username: string;
    name: string;
    description: string
}

function UserCard(props: UserCardProps) {
  return (
    <section className="flex">
        <div>
            put image here
        </div>
        <section>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <Link href={`https://github.com/${props.username}`}>
            <Icon icon="mdi:github" />
            </Link>
        </section>
    </section>
  )
}

export default UserCard
import React from "react";
import styles from "./UserContent.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function UserContent() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      alert("User is not authenticated");
      router.push("/");
    },
  });

  if (status === "authenticated") {
    return (
      <div className={styles.user_content}>
        <h2>Profile</h2>
        <div className={styles.user_image}>
          <img
            src={session.user.image}
            alt={`Image of user: ${session.user.name}`}
          />
        </div>
        <p>Signed in as {session.user.name}</p>
        <p>Email: {session.user.email}</p>
      </div>
    );
  }
}

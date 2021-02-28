import { getSession } from "next-auth/client";
import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");

  const session = getSession();
  useEffect(() => {
    (async () => {
      let { user } = await session;

      setUserName(user.name);
      setUserImage(user.image);
    })();
  }, [session]);

  return (
    <div className={styles.profileContainer}>
      <img src={userImage} alt={userName} />

      <div>
        <strong>{userName}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

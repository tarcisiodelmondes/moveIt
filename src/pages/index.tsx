import { homedir } from "os";
import Head from "next/head";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/profile";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div className="">
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  );
}

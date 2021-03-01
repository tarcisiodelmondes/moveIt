import Head from "next/head";
import { getSession, signIn, signOut, useSession } from "next-auth/client";

import styles from "../styles/pages/Login.module.css";
import { LoadingPage } from "../components/LoadingPage";
import { redirect } from "next/dist/next-server/server/api-utils";
import Router from "next/dist/next-server/lib/router/router";
import { GetServerSideProps } from "next";

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moveit</title>
      </Head>

      <section>
        <header>
          <img src="/icons/beans.svg" />
        </header>
      </section>

      <section>
        <main className={styles.main}>
          <h1>
            <img src="/logo-page-login.svg" alt="Logo Moveit" />
          </h1>
          <div className={styles.login}>
            <h1>Bem-vindo</h1>
            <div className={styles.github}>
              <i className="fab fa-github icon-github"></i>
              <p>Faça login com seu Github para começar</p>
            </div>
            <button
              onClick={(): Promise<void> =>
                signIn("github", {
                  callbackUrl: "https://moveit.tarcisiodelmondes.com.br/app",
                })
              }
            >
              Login com Github
            </button>
          </div>
        </main>
      </section>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const session = await getSession({ req });

  if (session && req) {
    res.writeHead(302, {
      Location: "/app",
    });

    res.end();
    return {
      props: {},
    };
  }

  return {
    props: {},
  };
};

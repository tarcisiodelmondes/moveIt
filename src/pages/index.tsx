import Head from "next/head";
import { getSession, signIn } from "next-auth/client";

import styles from "../styles/pages/Login.module.css";

import { GetServerSideProps } from "next";

interface AppProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Login({
  level,
  currentExperience,
  challengesCompleted,
}: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moveit</title>

        <meta name="title" content="Estou no próximo level no Move.it" />
        <meta
          name="description"
          content="No Move.it eu paro o que estou fazendo por alguns minutos para poder fazer exercícios propostos pelo app, que melhoram minha saúde."
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://moveit.tarcisiodelmondes.com.br"
        />
        <meta
          property="twitter:title"
          content="Estou no próximo level no Move.it"
        />
        <meta
          property="twitter:description"
          content="No Move.it eu paro o que estou fazendo por alguns minutos para poder fazer exercícios propostos pelo app, que melhoram minha saúde."
        />
        <meta
          property="twitter:image"
          content={`https://moveit.tarcisiodelmondes.com.br/api/thumbnail.png?level=${level}&currentExperience=${currentExperience}&challengesCompleted=${challengesCompleted}`}
        />
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const session = await getSession({ req });
  const { level, currentExperience, challengesCompleted } = ctx.query;

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
    props: {
      level: Number(level) || 1,
      currentExperience: Number(currentExperience) || 0,
      challengesCompleted: Number(challengesCompleted) || 0,
    },
  };
};

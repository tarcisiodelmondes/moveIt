import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";

import styles from "../styles/pages/Login.module.css";
import { LoadingPage } from "../components/LoadingPage";

export default function Login() {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
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
                      callbackUrl: "http://localhost:3000/app",
                    })
                  }
                >
                  Login com Github
                </button>
              </div>
            </main>
          </section>
        </div>
      )}

      {session && <LoadingPage />}
    </>
  );
}

/*
  <>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={(): Promise<void> => signIn()}>Sign in</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={(): Promise<void> => signOut()}>Sign out</button>
          </>
        )}
      </>
*/

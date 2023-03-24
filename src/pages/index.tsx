import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>λ algebraic</title>
        <meta name="description" content="We're an algebraic couple" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>λ algebraic</h1>
        <div className={styles.algebraic}>
          <article>
            <nav>
              <Image
                width={150}
                height={150}
                src="/sofia.jpeg"
                alt="Sofia's picture"
              />
              <a href="https://github.com/algebraic-sofia">@algebraic-sofia</a>
            </nav>
            <main>
              <p>
                Hello! My name is <b>Sofia</b>, and I am a 20-year-old autistic
                girl with a passion for rust, compilers, and all things
                technical. In my free time, I love to play the guitar and
                explore my interests in homotopy type theory, Rei Chikita, and
                Soul Eater.
              </p>
              <p>
                I am also very passionate about contributing to open-source
                projects and making a positive impact in the community.
                Currently, I work with my partner in on <b>Kind</b> open-source
                project, where we collaborate with others to create a better
                world.
              </p>
            </main>
          </article>
          <article>
            <main>
              <p>
                Hello! I&apos;m Gabi, an autistic 17-year-old girl. I enjoy
                diving into the technical details of type theory, compilers, and
                Minecraft protocol projects. Additionally, I work on <b>Kind</b>{" "}
                open-source project, collaborating with others and making a
                positive impact in the community.
              </p>
              <p>
                As a transgender person, I am always striving to learn more
                about myself and the world around me. I am interested in
                pharmaceutics and the science behind it. I also have a wonderful
                girlfriend, <b>Sofia</b> whom I love deeply. Overall, I am a
                curious and driven individual with a passion for learning and
                creating.
              </p>
            </main>
            <nav>
              <Image
                width={150}
                height={150}
                src="/gabi.jpeg"
                alt="Gabi's picture"
              />
              <a href="https://github.com/aripiprazole">@aripiprazole</a>
            </nav>
          </article>
        </div>
        <footer>
          <div>
            <p>
              Copyright Ⓒ 2023 by <b>Sofia</b> and <b>Gabi</b>
            </p>
          </div>
          <ul>
            <li>
              <a href="mailto:sofia@algebraic.dev">sofia@algebraic.dev</a>
            </li>
            <li>
              <a href="mailto:gabi@algebraic.dev">gabi@algebraic.dev</a>
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
}

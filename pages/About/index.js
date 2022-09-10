import Head from "next/head";
import Link from "next/link";
function About() {
  return (
    <div>
      <div>
        <Head>
          <title>About</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </div>
      <div className="text-center text-3xl">This is About</div>
      <Link href="/">
        <a>Gohome</a>
      </Link>
    </div>
  );
}
export default About;

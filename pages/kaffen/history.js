import Head from "next/head";
import Link from "next/link";
function HISTORY() {
  return (
    <div>
      {" "}
      <div>
        <Head>
          <title>History-Kaffen</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </div>
      <div className="text-center text-3xl">This is History</div>
      <Link href="/">
        <a>Gohome</a>
      </Link>
    </div>
  );
}
export default HISTORY;

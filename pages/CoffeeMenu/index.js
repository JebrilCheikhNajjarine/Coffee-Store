import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

function CoffeeMenu() {
  const router = useRouter();
  const query = router.query.id;
  // object busal lal id 3an tari2 router.query.id l id lal page
  // id fiha tkun esm teni dynamic shu mken mtl emk ben []
  // console.log(router);
  return (
    <div>
      <div>
        <Head>
          <title>Coffee Menu</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </div>
      <div className="text-center text-3xl">This is CoffeeMenu</div>
      <Link href="/">
        <a>Gohome</a>
      </Link>
    </div>
  );
}
export default CoffeeMenu;

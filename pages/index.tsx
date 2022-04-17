import db from "utils/deta";
import Domains from "components/Domains";
import Header from "components/Header";
import { sort } from "utils/sort";
import { Domain, Filter as EFilter } from "utils/types";
import { Context } from "components/Filter";
import { useContext } from "react";
import { Helmet } from "react-helmet";

export async function getServerSideProps() {
  let { items: domains, count } = await db.fetch();
  return { props: { domains, count } };
}

const Index = ({ domains, count }) => {
  // @ts-ignore
  const [filter] = useContext(Context);

  let d = sort(domains as Domain[], filter);
  // let d = domains

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>lio.domains</title>
        <meta property="og:title" content="lio.domains" />
        <meta property="og:description" content="lio.domains is a List of all Domains hosted/operated by @Himbolion" />
        <meta property="og:image" content="/Nebula.webp" />
      </Helmet>
      <div style={{ textAlign: "center", margin: "auto" }}>
        <Header />
        <Domains domains={d} count={count} />
      </div>
    </>
  );
};

export default Index;

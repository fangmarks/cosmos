
import Domains from "components/Domains";
import Header from "components/Header";
import { sort } from "utils/sort";
import { Domain, Filter as EFilter } from "utils/types";
import { Context } from "components/Filter";
import { useContext } from "react";
import { Helmet } from "react-helmet";

export async function getServerSideProps() {
  const nocofetch = await fetch('https://nocodb-ewkss0gkkockggc4g0wgko80.implant.cam/api/v2/tables/mvypdfnnurvviwz/records?offset=0&limit=25&where=&viewId=vwj2e8p3o2qwwg9m', {
    headers: {
      'accept': 'application/json',
      'xc-token': process.env.NEXT_NOCO_XC
    }
  }).then(res => res.json()).then(json => json.list.map((domain: Domain) => {
    domain.category = (domain.category as unknown as string).split(',')
    return domain
  }))

  return { props: { domains: nocofetch } };
}

const Index = ({ domains }) => {

  // @ts-ignore
  const [filter] = useContext(Context);
  let d = sort(domains as Domain[], filter);
  
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
        <Domains domains={d} />
      </div>
    </>
  );
};

export default Index;

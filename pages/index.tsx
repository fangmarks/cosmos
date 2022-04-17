import db from "utils/deta";
import Domains from "components/Domains";
import Header from "components/Header";
import { sort } from "utils/sort";
import { Domain, Filter as EFilter } from "utils/types";
import Filter, { Context } from "components/Filter";
import { useContext } from "react";

export async function getServerSideProps() {
  let { items: domains, count } = await db.fetch();
  return { props: { domains, count } };
}

/**
 * TODO: Add Ability to filter based on Tags / services mutuals
 * TODO: can ask to have an account on/with
 */

const Index = ({ domains, count }) => {
  // @ts-ignore
  const [filter] = useContext(Context);
  
  let d = sort(domains as Domain[], filter);
  // let d = domains

  return (
    <>
      <div style={{ textAlign: "center", margin: "auto" }}>
          <Header />
          <Domains domains={d} count={count} />
      </div>
    </>
  );
};

export default Index;

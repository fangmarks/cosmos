import { Image, Link, Text, Button } from "@geist-ui/core";
import { Domain, Filter as EFilter } from "utils/types";
import Filter, { Context } from "components/Filter";
import { useContext } from "react";
const Header = () => {
  // @ts-ignore
  const [filter, dispatchFilter] = useContext(Context);

  function mutualToggle() {
    switch (filter) {
      case EFilter.ASC:
        return dispatchFilter({
          type: "MUTUAL",
        });
      case EFilter.MUTUAL:
        return dispatchFilter({
          type: "ASC",
        });

      default:
        break;
    }
  }

  return (
    <>
      <div style={{paddingTop:50}}>
        {/* <Image
        width="40%"
        style={{ marginTop: "50px", borderRadius: "50%" }}
        src="https://common.himbo.cat/avatars/lio/shlimaz.png"
      ></Image> */}
        <Text h1>lio.domains</Text>
        <Text p>
          lio.domains is a List of all Domains hosted/operated by{" "}
          <Link href="https://twitter.com/HimboLion" color icon>
            @HimboLion
          </Link>
        </Text>
        <Text p>
          If we're mutuals and you want to use one of my Domains, <br /> click the
          button below to see which ones you can ask me about! :3c{" "}
        </Text>
        <Button
          onClick={mutualToggle}
          auto
          ghost
          type={filter === 2 ? "warning" : "default"}
        >
          MUTUALS
        </Button>
      </div>
    </>
  );
};

export default Header;

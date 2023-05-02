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
  function randomIcon() {
    let icons = [
      // Lio
      "https://common.himbo.cat/avatars/lio/ascii.png",
      "https://common.himbo.cat/avatars/lio/blep.png",
      "https://common.himbo.cat/avatars/lio/club.jpg",
      "https://common.himbo.cat/avatars/lio/leash.jpg",
      "https://common.himbo.cat/avatars/lio/drip.jpg",
      // Cae
      "https://common.himbo.cat/avatars/caecus/geo.png",
      "https://common.himbo.cat/avatars/caecus/lipbite.png",
      "https://common.himbo.cat/avatars/caecus/refsheet.jpg",
    ]

    return icons[Math.floor(Math.random() * icons.length)]
  }

  return (
    <>
      <div style={{ paddingTop: 50 }}>
        <Image
          width="200px"
          style={{ marginTop: "50px", borderRadius: "50%" }}
          src={randomIcon()}
        ></Image>
        <Text h1>lio.domains</Text>
        <Text p>
          lio.domains is a List of all Domains hosted and/or operated by{" "}
          <Link href="https://twitter.com/HimboLion" color icon>
            @HimboLion
          </Link>
        </Text>
        <Text p style={{
          textAlign: "center",
        }}>
          If we're mutuals and you want to use one of my Domains, <br /> click the
          button or look at the Yellow Cards below to see <br /> which ones you can ask me about! :3c{" "}
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

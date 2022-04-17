import { Grid, Text, Card, Badge, Link } from "@geist-ui/core";
import { CardTypes } from "@geist-ui/core/esm/card";
import NextLink from "next/link";
import mutual from "utils/mutual";
import { DomainsProp, TCategory, getKeyByValue } from "utils/types";

const Domains = ({ domains, count }: DomainsProp) => {
  if (!count) {
    return (
      <>
        <div>
          <Text b>No Domains in Database, reload the Page</Text>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          padding: "50px",
        }}
      >
        <Grid.Container key={"what"} gap={2} justify="center">
          {domains.map((domain) => (
            <Grid sm key={domain.key}>
              <Card
                type={mutual(domain.category) as CardTypes}
                width="100%"
                style={{ minWidth: "190px" }}
                hoverable
              >
                  <Text h4>
                    <Link href={`https://${domain.domain}`} target="_blank" icon color={false}>
                      {domain.domain}
                    </Link>
                  </Text>
                <Text>{domain.usage}</Text>
                {domain.category ? (
                  <Card.Footer>
                    {domain.category
                      ? domain.category?.map((c: TCategory) => (
                          <Badge key={`${c + domain.key}`}>
                            {getKeyByValue(c)}
                          </Badge>
                        ))
                      : null}
                  </Card.Footer>
                ) : null}
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </>
  );
};

export default Domains;

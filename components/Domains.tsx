import { Grid, Text, Card, Badge, Link } from "@geist-ui/core";
import { CardTypes } from "@geist-ui/core/esm/card";
import NextLink from "next/link";
import mutual from "utils/mutual";
import { categoryColors } from "utils/sort";
import { DomainsProp, } from "utils/types";

const Domains = ({ domains }: DomainsProp) => {
  return (
    <>
      <div
        style={{
          padding: "50px",
        }}
      >
        <Grid.Container key={"what"} gap={2} justify="center">
          {domains.map((domain, i) => (
            <Grid sm key={i}>
              <Card
                type={categoryColors((domain.categories.split(',') as string[])) as CardTypes}
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
                    {(domain.categories.split(',') as string[]).map((c) => (
                      <Badge key={`${c}`}>
                        {c}
                      </Badge>
                    ))
                    }
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

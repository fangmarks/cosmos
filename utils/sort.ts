import { CardTypes } from "@geist-ui/core/esm/card";
import mutual from "utils/mutual";
import { Domain, Filter as o } from "utils/types";

export function sort(Domains: Domain[], o: o) {
  const b = Domains.sort((c, d) => c.domain.localeCompare(d.domain));
  switch (o) {
    case 1:
      return b.reverse();
    case 2:
      let f = Domains.filter((c: Domain) => mutual(c.category, "sort"));
      let e = Domains.filter((c: Domain) => !mutual(c.category, "sort"));
      return [...f, ...e];
    case 0:
    default:
      // Domains.
      let Defunkt = Domains.filter((c: Domain) => c.category.includes("Defunkt"));
      let Furry = Domains.filter((c: Domain) => c.category.includes("Personal"));
      let Infrastructure = Domains.filter((c: Domain) => c.category.includes("Infrastructure"));
      let Personal = Domains.filter((c: Domain) => c.category.includes("Personal"));
      let Client = Domains.filter((c: Domain) => c.category.includes("Client"));
      // let Personal = Domains.filter((c: Domain) => !pullOut(c.category, "sort"));
      return [
        ...Furry,
        ...Personal,
        ...Infrastructure,
        ...Client,
        ...Defunkt,
      ].map((c) => c).
  }
}

export function categoryColors (category: string[]): CardTypes {
  // if (category.includes("Infrastructure")) return "success";
  // if (category.includes("Personal")) return "warning";
  // if (category.includes("Client")) return "error";
  // if (category.includes("Defunkt")) return "secondary";
  // if (category.includes("Furry")) return "warning";

  return "default";

}


export function pullOut (domains: Domain[], category: string): Domain[] {
  console.log(domains, category);
  return domains.filter((c) => c.category.includes(category));
}
import mutual from "utils/mutual";
import { Domain, Filter as o } from "utils/types";

export function sort(a: Domain[], o: o) {
  const b = a.sort((c, d) => c.domain.localeCompare(d.domain));
  switch (o) {
    case 1:
      return b.reverse();
    case 2:
      let f = a.filter((c: Domain) => mutual(c.category, "sort"));
      let e = a.filter((c: Domain) => !mutual(c.category, "sort"));
      return [...f, ...e];
    case 0:
    default:
      return b;
  }
}

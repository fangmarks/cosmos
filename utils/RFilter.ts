import { Filter } from "./types";

export default function RFilter(state, action) {
  switch (action.type) {
    default:
    case "ASC":
      return Filter.ASC;
    case "DEC":
      return Filter.DEC;
    case "MUTUAL":
      return Filter.MUTUAL;
  }
}

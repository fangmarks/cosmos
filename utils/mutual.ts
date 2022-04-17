import type { CardTypes } from "@geist-ui/core/esm/card";
import { TCategory as C } from "./types";

export default function (c: C[], type?:string): CardTypes | boolean {
    let filter = c.includes(C.Email || C.Shortener)
    if(filter) return "warning" as CardTypes
    else if(type === 'sort' && filter) return true 
}

// [
//   "default",
//   "secondary",
//   "success",
//   "warning",
//   "error",
//   "dark",
//   "lite",
//   "alert",
//   "purple",
//   "violet",
//   "cyan",
// ];

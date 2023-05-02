import type { CardTypes } from "@geist-ui/core/esm/card";

export default function (c: string[], type?:string): CardTypes | boolean {
    let filter = c.includes("Mutual")
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

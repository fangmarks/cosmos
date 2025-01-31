import type { CardTypes } from "@geist-ui/core/esm/card";

export default function (categories: string[], sortType?:string): CardTypes | boolean {
    let filter = categories.includes("Mutual")
    if(filter) return "warning" as CardTypes
    else if(sortType === 'sort' && filter) return true 
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

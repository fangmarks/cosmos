// export enum TCategory {
//   Defunkt = 0,
//   Information = 1,
//   "Elixi.re" = 2,
//   Shortener = 3,
//   Infrastructure = 4,
//   Client = 5,
//   Email = 6,
//   Webmaster = 7,
//   ASN = 8,
//   Portfolio = 9,
//   Unfinished = 10,
//   Personal = 11,
//   Social = 12,
// }

export enum Filter {
  ASC = 0,
  DEC = 1,
  MUTUAL = 2,
}

// export function getKeyByValue(value: TCategory) {
//   const indexOfTCategory = Object.values(TCategory).indexOf(
//     value as unknown as TCategory,
//   );

//   const key = Object.keys(TCategory)[indexOfTCategory];

//   return key;
// }
export type Domain = {
  key: string;
  category: string[];
  domain: string;
  usage: string;
  categories: string;
};

export type DomainsFetch = {
  items: Domain[];
  count: number;
  last: any;
};
export type DomainsProp = {
  domains: Domain[];
  // count: number;
};

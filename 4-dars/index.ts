// let a: any = 10;
// let b: number = a;

// let c: unknown = 20.23243212;
// let d: number = c;

// let e: number = <number>c;
// let f: number = c as number;

// (c as number).toFixed(2);
// (<number>c).toString();

// let h: number | string | boolean = 10;
// h = "string";
// h = true;

// let s: "sm" | "md" | "lg";
// s = "lg";

type Sizes = "SM" | "MD" | "LG" | boolean;

let s2: Sizes = "LG";
s2 = "MD";
s2 = "SM";

let s3: Sizes = false;

s3 = "MD";

# **TypeScript Darslari**

TypeScript — bu JavaScript-ning kengaytirilgan versiyasi bo‘lib, statik tiplash imkoniyatini beradi. U katta loyihalar uchun qulayroq bo‘lishi uchun mo‘ljallangan va kompilyatsiya jarayonida xatolarni oldindan aniqlashga yordam beradi. TypeScript kodini brauzer tushunishi uchun JavaScript-ga transpilyatsiya qilinadi.

## **1-Dars Kirish**

```bash
npm install -g typescript
```

- TypeScriptni global tarzda o'rnatish

```bash
tsc -v
```

- TypeScript o'rnatilganligini tekshirish
- Agar TypeScript versiya raqami chiqsa, o‘rnatish muvaffaqiyatli yakunlangan.

```bash
tsc index.ts
```

- Barcha TypeScript kodlar JavaScriptga kompilyatsiya qilinishi kerak. Ushbu kod kompilyatsiya qilish vazifasini bajaradi. `index.ts` fayli bu JavaScriptga kompilyatsiya qilinishi kerak bo'lgan TypeScript fayli

```bash
tsc --init
```

- `tsc --init` buyrug‘i TypeScript konfiguratsiya fayli `(tsconfig.json)` yaratish uchun ishlatiladi.
- Loyihaning asosiy papkasida `tsconfig.json` nomli fayl hosil qiladi.
- Bu fayl `TypeScript` uchun kompilyatsiya sozlamalarini o‘z ichiga oladi.
- Masalan, kod qaysi versiyaga kompilyatsiya bo‘lishini, qaysi fayllarni e’tiborga olish yoki olmasligini belgilash mumkin.

`tsconfig.json`

```json
"sourceMap": true
```

- Agar `"sourceMap": true` bo‘lsa, TypeScript kodingiz kompilyatsiya qilinganda `.map` kengaytmali fayl ham yaratiladi.
- Ushbu `.map` fayl TypeScript kodini JavaScript kodiga qanday o‘zgarganini kuzatishga yordam beradi.
- Brauzer yoki debugging vositalari TypeScript kodining asl manbasini ko‘rsatishi mumkin, bu esa debugging jarayonini ancha osonlashtiradi.

---

## **2-Dars Asosiy ma'lumot turlari**

```ts
let a = 12;
a = "str";
```

- `a` o'zgaruvchisi `number` turida unga `string` turidagi qiymat berganimizda typescript buni xato deb hisoblaydi

```ts
let a: number = 12;
```

- `TypeScript` da o'zgaruvchi elon qilish
- `number` bu o'zgaruvchining malumot turi bu o'zgaruvchiga faqatgina `number` turidagi qiymat saqlash mumkin

```tsx
let a: number = 12;
let b: string = "text";
let c: boolean = true;
```

- `number` `string` `boolean` typelari bilan o'zgaruvchi elon qilish

```ts
let d: null = null;
let e: undefined = undefined;
```

- `null` va `undefined` typelari bilan o'zgaruvchi elon qilish

```ts
let f: object = {};
f = {
  name: "Muhriddin",
};
```

- `object` typeda o'zgaruvchi elon qilib unga name kalitini berish

```ts
let f: { name: string; age: number } = {
  name: "Muhriddin",
  age: 20,
};
```

- `TypeScript` da `object` ning har bir xossasiga type berish

```ts
let g: any;
g = 12;
g = "string";
g = false;
g = { name: "Muhriddin" };
g = [];
g = null;
g = undefined;
```

- `any` type bilan o'zgaruvchi elon qilish
- `any` ma'lumot turi har qanday turdagi qiymatni o'z ichiga olishi mumkin bo'lgan universal tur hisoblanadi.

---

## **3-Dars Functions, signature, overload**

```ts
function pow(x: number, y: number): number {
  return x ** y;
}

console.log(pow(10, 3));
```

- TypeScriptda funksiya elon qilish

```ts
const add = (x: number, y: number): number => x + y;
```

- TypeScriptda arrow function elon qilish

```ts
function log(x: number): void {
  console.log(x);
}
```

- `void` funcsiya elon qilish. hech narsa qaytarmaydigan funksiyaga `void` funksiya deyiladi

```ts
let c: (x: number, y: string) => string;

c = function (a: number, b: string): string {
  return `${b}: ${a}`;
};

console.log(c(2, "Javob"));
```

- signature funktion elon qilish va undan foydalanish
- TypeScript'da `function signature` (funksiya imzosi) – bu funksiya qanday argumentlarni qabul qilishi va qanday natija qaytarishini aniq belgilovchi tavsifdir. U funksiyaning bajarilish qismisiz faqat tuzilmasini ifodalaydi.

```ts
function overloadFunc(x: number, y: number): number;
function overloadFunc(x: string, y: number): string;
function overloadFunc(x: any, y: any): any {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    return `${x} ${y}`;
  }
}

console.log(overloadFunc(1, 3));
```

- TypeScriptda `overload function` elon qilish
- `Overloading` yordamida funksiya har xil argumentlarni qabul qila oladi.
- TypeScript kompilatori qaysi overload'ni ishlatishni avtomatik aniqlaydi.
- Haqiqiy funksiya esa barcha holatlar uchun umumiy kod yozishga imkon beradi.

---

## **4-Dars Tiplarni o'zgartirish va birlashtirish (1-qism)**

```ts
let c: unknown = 20;
let e: number = <number>c;
let f: number = c as number;
```

- `let c: unknown = 20;`
  - `c` o'zgaruvchisi `unknown` turiga ega.
  - `unknown` — bu `any` ga o‘xshash, lekin ancha xavfsizroq bo‘lgan tur. U istalgan turdagi qiymatni qabul qilishi mumkin, lekin to‘g‘ridan-to‘g‘ri boshqa turlarga o‘tkazib bo‘lmaydi.
- `let e: number = <number>c;`
  - Bu yerda type assertion ishlatilgan: `<number>c`
  - `c` hozircha `unknown`, lekin biz uni `number` sifatida ishlatmoqchimiz.
  - `<number>c` sintaksisi TypeScriptdagi eski style type assertion bo‘lib, bu `c` ni `number` sifatida tasdiqlaydi.
  - Agar `c` aslida `number` bo‘lsa, hech qanday muammo bo‘lmaydi. Ammo noto‘g‘ri bo‘lsa, runtime xatolik berishi mumkin.
- `let f: number = c as number;`
  - Bu ham type assertion, lekin bu yerda `<number>c` o‘rniga `as number` sintaksisi ishlatilgan.
  - `as` sintaksisi TypeScript-ning yangi versiyalarida tavsiya etiladi, chunki u `JSX` bilan ham mos keladi.

```ts
let h: number | string = 10;
h = "string";
```

- Bu yerda bir o'zgaruvchiga 2 xil tip berilyapdi shu o'zgaruvchi ham `string` bilan ham `number` bilan ishlay oladi

```ts
let s: "sm" | "md" | "lg";
s = "lg";
```

- bunday holda faqat `s` o'zgaruvchisiga berilgan tiplarni qiymat sifatida ishlatish mumkin hattoki boshqa `string` ham berib bo'lmaydi

```ts
type Sizes = "SM" | "MD" | "LG" | boolean;

let s2: Sizes = "LG";
s2 = "MD";
s2 = "SM";

let s3: Sizes = false;

s3 = "MD";
```

- Bir marta `type` elon qilib o'zgaruvchilarda undan foydalanish
- `Type` ga istalgan malumot turi ishlatish mumkin

---

## **4-Dars Tiplarni o'zgartirish va birlashtirish (2-qism)**

```tsx
type OBJ = { name: string } | { age: number };

let obj: OBJ = { name: "str" };
obj = { age: 23 };
obj = { name: "sdsd" };
```

Bu kodda `OBJ` `union type` sifatida `{ name: string }` yoki `{ age: number } `obyektlarini qabul qiladi, lekin ikkalasini birga emas. Shu sababli, `obj` ga faqat bitta variantni o‘rnatish mumkin, `{ name: "str" }` yoki `{ age: 23 }`, lekin `{ name: "str", age: 23 }` xatolik beradi.

```ts
type OBJ2 = { name: string } & { age: number };
let obj2: OBJ2;
obj2 = { name: "Muhriddin", age: 23 };
obj2 = { name: "str" };
obj2 = { age: 12 };
```

Bu kodda `OBJ2` `intersection type` `(&)` bo‘lgani uchun obyekt ikkala propertyga `(name va age)` ega bo‘lishi shart. Shu sababli, `{ name: "Muhriddin", age: 23 }` to‘g‘ri ishlaydi, lekin `{ name: "str" }` yoki `{ age: 12 }` xatolik beradi.

```tsx
type OBJ3 = { name: string; age?: number };

let obj3: OBJ3 = { name: "Muhriddin" };
obj3 = { name: "Muhriddin", age: 20 };
obj3 = { age: 20 };
```

Bu kodda `name` majburiy, `age` esa ixtiyoriy `(?)`. Shu sababli, `{ name: "Muhriddin" }` yoki `{ name: "Muhriddin", age: 20 }` to‘g‘ri, lekin `{ age: 20 }` xato beradi, chunki `name` bo‘lishi shart.

```tsx
type OBJ3 = { name: string; age?: number };

let obj3: OBJ3 = { name: "Muhriddin" };
if ("age" in obj3) {
  console.log("Mavjud");
} else {
  console.log("Mavjud emas");
}
```

Bu kodda `age` xususiyati ixtiyoriy `(?)`, shuning uchun `"age"` in `obj3` orqali `age` mavjudligini tekshiryapti. Agar age bo‘lsa "Mavjud", aks holda "Mavjud emas" chiqadi.

---

## **5-Dars Massivlar(arrays, tuples, enums) (1-qism)**

```ts
let b: number[] = [1, 2, 3, 4];
b = [232, 54545];
b = ["sdf", true];
```

- `let b: number[] = [1, 2, 3, 4];`

  - `b` nomli o‘zgaruvchi e'lon qilinmoqda va unga faqat raqamlar (`number[]` tipi) saqlovchi massiv (`array`) qiymati berilmoqda.

- `b = [232, 54545];`

  - `b` massivining qiymati o‘zgartirilmoqda, yangi raqamlar to‘plami (`[232, 54545]`) berilmoqda. Bu to‘g‘ri, chunki `b` faqat `number` tipidagi massiv bo‘lishi kerak.

- `b = ["sdf", true];`
  - Xato! `b` faqat raqamlar massivini qabul qilishi kerak, ammo bu yerda string (`"sdf"`) va boolean (`true`) qiymatlar berilgan.

```ts
let c: Array<number> = [1, 2, 3, 4];
c = ["str1", "str2"];
c = [12, 34, 54];
```

- `let c: Array<number> = [1, 2, 3, 4];`

  - `c` nomli o‘zgaruvchi e'lon qilinmoqda va unga faqat sonlarni (`number`) saqlovchi massiv (`Array<number>`) qiymati berilmoqda.

- `c = ["str1", "str2"];`

  - **Xato!** `c` faqat `number` tipidagi qiymatlarni saqlashi kerak, ammo bu yerda string (`"str1"`, `"str2"`) massiv berilgan.

- `c = [12, 34, 54];`
  - To‘g‘ri! `c` massivining yangi qiymati ham faqat sonlardan iborat bo‘lgani uchun hech qanday xato yuzaga kelmaydi.

```ts
let d: (number | string)[] = [12, 45, "str1", "str2"];
```

- `let d: (number | string)[] = [12, 45, "str1", "str2"];`
  - `d` nomli o‘zgaruvchi e'lon qilinmoqda va unga **faqat raqam (`number`) yoki satr (`string`) tipidagi qiymatlar** saqlovchi massiv tayinlanmoqda.
  - `[12, 45, "str1", "str2"]` qiymati **to‘g‘ri**, chunki u faqat `number` va `string` tipidagi elementlardan iborat.

```ts
let e: Array<boolean | number> = [true, false, 122, 32, 5];
e = [true, false, 34, "str1", "str2"];
```

- `let e: Array<boolean | number> = [true, false, 122, 32, 5];`

  - `e` nomli o‘zgaruvchi e'lon qilinmoqda va unga **faqat `boolean` yoki `number`** tipidagi qiymatlarni saqlovchi massiv tayinlanmoqda.
  - `[true, false, 122, 32, 5]` qiymati **to‘g‘ri**, chunki barcha elementlar `boolean` (`true`, `false`) yoki `number` (`122`, `32`, `5`) tipida.

- `e = [true, false, 34, "str1", "str2"];`
  - **Xato!** `e` faqat `boolean` yoki `number` tipidagi qiymatlarni qabul qilishi kerak, lekin bu yerda `"str1"` va `"str2"` string (`string`) tipida bo‘lgani uchun **TypeScript xatolik chiqaradi**.

---

## **5-Dars Massivlar(arrays, tuples, enums) (2-qism)**

```ts
let f: [number, string];

f = [20, "Muhriddin"];
f = ["Muhriddin", 20];
f = [20];
```

- `let f: [number, string];`

  - `f` nomli o‘zgaruvchi e'lon qilinmoqda va unga **aniq tartibdagi tuzilma** (`tuple`) tayinlanmoqda.
  - U **faqat ikkita elementdan** iborat bo‘lishi kerak:
    1. **Birinchi element** — `number`
    2. **Ikkinchi element** — `string`

- `f = [20, "Muhriddin"];` ✅

  - **To‘g‘ri!** `f` massivining birinchi elementi `number`, ikkinchi elementi esa `string`, shuning uchun hech qanday xato yo‘q.

- `f = ["Muhriddin", 20];` ❌

  - **Xato!** `f` birinchi element sifatida `number` va ikkinchi element sifatida `string` qabul qilishi kerak, lekin bu yerda **teskari tartibda** berilgan (`string, number`).

- `f = [20];` ❌
  - **Xato!** `f` **ikkita elementdan** iborat bo‘lishi shart, lekin bu yerda faqat bitta (`number`) element berilgan.

```ts
let g: [number, [number, string]];
g = [123, [12, "str1"]];
```

- `let g: [number, [number, string]];`

  - `g` nomli **tuples (aniq tartibdagi massiv)** e'lon qilinmoqda.
  - U **ikkita asosiy elementdan** iborat bo‘lishi kerak:
    1. **Birinchi element** — `number`
    2. **Ikkinchi element** — **yana bitta tuple** (`[number, string]`)

- `g = [123, [12, "str1"]];` ✅
  - **To‘g‘ri!**
    - **Birinchi element** `123` (`number`) — to‘g‘ri.
    - **Ikkinchi element** `[12, "str1"]` (`[number, string]`) — to‘g‘ri.
    - Strukturaga mos kelgani uchun hech qanday xato bermaydi.

---

## **5-Dars Massivlar(arrays, tuples, enums) (3-qism)**

```ts
enum Gender {
  Male,
  Female,
}
console.log(Gender.Male, Gender.Female);
```

- **`enum`** — bu TypeScript'da **enumeratsiya** (sanab o'tish) tushunchasini ifodalovchi tur. U bir nechta **o'zaro bog'liq qiymatlarni** nom bilan belgilash uchun ishlatiladi.
- **`Gender`** — bu `enum` uchun tanlangan nom, u erkak (`Male`) va ayol (`Female`) qiymatlarini o'z ichiga oladi.
- **`Male`** va **`Female`** avtomatik ravishda `0` va `1` raqamli qiymatlarni oladi (agar qo'lda qiymat berilmagan bo'lsa).

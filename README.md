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

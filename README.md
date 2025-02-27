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

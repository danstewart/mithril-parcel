# Mithril Parcel

Quick start template for mithril.js with typescript using parcel.

---

## Get started
```
git clone https://github.com/danstewart/mithril-parcel.git
cd mithril-parcel

# Install deps
yarn install # or npm install

# Run dev
yarn start   # or npm run start

# Build
yarn build   # or npm run build
```

---

## Application Structure
```
.
├── dist/                  -- The output directory for the built files
├── LICENSE                -- The license this project uses
├── package.json           -- The project configuration and metadata
├── README.md              -- This file
└── src/                   -- Where all of the code lives
    ├── components/        -- Where the components live
    │   ├── ExamplePage.ts
    │   └── LandingPage.ts
    ├── index.html         -- The starting page, imports the necessary JS/TS and CSS
    ├── index.ts           -- The main TS entry point, this loads the application
    ├── router.ts          -- The router, specifies which routes point to which components
    └── styles/            -- Where the CSS lives
        ├── default.css
        └── LandingPage.css
```

---

## TODO

- Have nicer default pages
- Customise what gets added on (ie. typescript, css framework, etc...)
- Clearer instructions on what to change to get started

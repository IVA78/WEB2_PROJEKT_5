# Vue3 jednostranična web aplikacija (SPA)
## Opis projekta
Ovaj projekt prikazuje izradu jednostranične web-aplikacije koristeći Vue 3 razvojni okvir. Cilj projekta je demonstrirati temeljne koncepte Vue.js-a obrađene na predavanjima.

## Funkcionalnosti aplikacije
- Vue značajke
    - Interpolacija i jednosmjerno povezivanje podataka: Prikaz dinamičkih podataka u HTML-u.
    - Dvosmjerno povezivanje podataka: Sinhronizacija modela i pogleda pomoću v-model.
    - Metode: Dodavanje interaktivnog ponašanja putem Vue metoda.
    - Računata svojstva (computed properties): Optimizirani i keširani dinamički podaci
- Scoped stilovi
    - Stilovi su lokalizirani na razini komponente pomoću scoped atributa.
- Lifecycle hook
    - Jedan od lifecycle hook-ova (npr. mounted) koristi se za izvršavanje logike pri životnom ciklusu komponente.
- Navigacija i rute
    - Više stranica: Aplikacija koristi vue-router za kreiranje više stranica.
    - Bookmarkabilni linkovi: Sve stranice su dostupne putem jedinstvenih URL-ova (npr. moj-web.com/stranica1, moj-web.com/stranica2).
    - Dinamičke rute: Implementirano dinamičko usmjeravanje s prilagođenom 404 stranicom za nepostojeće rute.

- Komponente
    - Komponenta bez stanja: Komponenta koja prima podatke putem props i prikazuje ih.
    - Komponenta sa stanjem: Komponenta koja ima vlastiti unutarnji state.
    - Emitiranje događaja: Najmanje jedna komponenta emitira događaje kako bi komunicirala s roditeljskom komponentom

- Upravljanje stanjem
    - Pinia Store: Centralizirano stanje aplikacije upravlja se pomoću Pinia knjižnice.
    m

- Asinkroni dohvat podataka
    - Dohvat podataka: Implementiran je asinkroni dohvat podataka koristeći Mocky

- 
## Tehnologije
  - Vue 3: Glavni okvir za razvoj aplikacije.
  - Pinia: Upravljanje stanjem.
  - Vue Router: Navigacija između stranica.

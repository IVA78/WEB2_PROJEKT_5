1. URL aplikacije: https://web2-projekt-5-deploy2.onrender.com
2. Svojstva aplikacije
	2.1 interpolation/one-way binding: DA
	    Komentar: Komponenta ProductCard koristi {{ product.name }} (product prima preko props-a) za prikaz 
                      podataka u proizvodu
                      WEB_2_PROJEKT_5\src\components\ProductCard.vue, linije 2-7
	2.2 two-way binding: DA
	    Komentar: Stranica Home ima kontaktnu u formu u kojoj koristi v-model za two-way 
                      binding tako da povezuje formData sa unosom, primjer: 
                      \WEB_2_PROJEKT_5\src\views\HomeView.vue, linije 33-62
	2.3 methods: DA
	    Komentar:Komponenta NavBar ima metodu toggleNavbarColor koja se koristi za kontrolu promjene
            stila navigacijske trake klikom na checkbox, primjer: 
            WEB_2_PROJEKT_5\src\components\NavBar.vue, linije 32-36
	2.4 computed properties: DA
	    Komentar: Komponenta NavBar ima computed property pod nazivom  navbarClass koje izracunava 
                      vrijednosti koja klasa ce se dodijeliti navigacijskoj traci ovisno o stanju checkbox-a 
                      (isDarkMode), primjer: WEB_2_PROJEKT_5\src\components\NavBar.vue, linije 24-31
	2.5 barem jedan scoped style: DA
	    Komentar: Sve stranice i komponente imaju scoped style, konkretan primjer: 
                      WEB_2_PROJEKT_5\src\components\NavBar.vue, linije 40-105
	2.6 koristiti barem jedan lifecycle hook: DA
	    Komentar: Na stranici ProductsView koristi se mounted() lifecycle hook koji služi za slanje 
                      asinkronog zahtjeva za podatcima nakon učitavanja stranice, primjer: 
                      WEB_2_PROJEKT_5\src\views\ProductsView.vue, linije 27-41
	2.7 routing (više stranica): DA
		2.7.1. aplikacija mora biti bookmarkable, tako da rade linkovi 
		2.7.2 dinamičko usmjeravanje s 404 stranicom ("catch all")
	   Komentar: probati putanju "/about" za provjeru rade li svi linkovi, 
                     a putanju "/blabla" ili bilo što drugo za 404 stranicu.
                     Preduvjet da radi u produkcijskom načinu bio je postavljanje 
                     Redirect and Rewrite Rules na Renderu (Source se postavi na /*,
                     destination na /index.html, a Action na Redirect -> tako
                     app zna sama hendlati zahtjeve)
	2.8 (barem) dvije komponente
		2.8.1 komponenta bez stanja, koristiti properties
		2.8.2 komponenta sa stanjem
            Komentar:
		Komponenta Hero je primjer komponente bez stanja, s tim da koristi properties. 
                           Koristi se na stranici Home za prikaz određenog sadržaja. 
                           Komponenta se nalazi na putanji WEB_2_PROJEKT_5\src\components\Hero.vue, 
                           props se postavlja u linijama 11-20 (pogledati i stranicu ProductsView.vue 
                           gdje se prosljedjuju properties - linije 47-50)
               Komponenta NavBar ima stanje koje čuva u data() i zove se isDarkMode. isDarkMode predstavlja lokalno 
                          stanje koje se mijenja unutar same komponente. To stanje se koristi za prebacivanje 
                          između tamne i svijetle teme. Komponenta: WEB_2_PROJEKT_5\src\components\NavBar.vue
                          linije 1-23
	2.9 barem jedna komponenta mora emitirati barem jedan event: DA
	    Komentar: Komponenta ProductCard emitira događaj product-added kod dodavanja u košaricu. Događaj se
                      prosleđuje roditeljskoj komponenti, odnosno stranici ProductsView koja na događaj reagira
                      svojom addToCart metodom. Komponenta: WEB_2_PROJEKT_5\src\components\ProductCard.vue
                      linije 16-20, Komponenta: WEB_2_PROJEKT_5\src\views\ProductsView.vue, linije 55-60
	2.10 store (Pinia): DA
	     Komentar: Komponenta Cart.vue koristi Pinia za upravljanje stanjem tako što koristi useCartStore() 
                       da pristupi Pinia store-u. To omogućava pristup podacima o stavkama u korpi (cartItems) 
                        i ukupnoj cijeni (totalPrice). Komponenta: WEB_2_PROJEKT_5\src\components\Cart.vue, 
                        linije 18-37. useCartStore() je funkcija koja vraća instancu Pinia store-a, može se naći 
                        u WEB_2_PROJEKT_5\src\stores\cart.js
	2.11 asinkroni dohvat podataka s backenda (Mocky): DA
	     Komentar: Na stranici ProductsView koristi se mounted() lifecycle hook koji služi za slanje 
                       asinkronog zahtjeva za podatcima nakon učitavanja stranice, 
                       primjer: WEB_2_PROJEKT_5\src\views\ProductsView.vue, linije 27-41

Napomena: U console nema grešaka ili upozorenja (errors, warnings).
          Kod postavljanja aplikacije (deloyment) koristi se production mode: npm run build (koristi se dist file)
 


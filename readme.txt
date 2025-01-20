1. URL aplikacije:
2. Svojstva aplikacije
	2.1 interpolation/one-way binding: DA
	    Komentar: Stranica ProductsView ima listu sa proizvodima u data() te ju koristi za generiranje kartica sa proizvodima, primjer: WEB_2_PROJEKT_5\src\views\ProductsView.vue, linije 84-89
	2.2 two-way binding: DA
	    Komentar: Stranica Home ima kontaktnu u formu u kojoj koristi v-model za two-way binding tako da povezuje formData sa unosom, primjer: \WEB_2_PROJEKT_5\src\views\HomeView.vue, linije 33-62
	2.3 methods
	    Komentar:
	2.4 computed properties
	    Komentar:
	2.5 barem jedan scoped style: DA
	    Komentar: Sve stranice i komponente imaju scoped style, konkretan primjer: WEB_2_PROJEKT_5\src\components\NavBar.vue, linije 18-66
	2.6 koristiti barem jedan lifecycle hook
	    Komentar:
	2.7 routing (više stranica)
		2.7.1. aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
		2.7.2 dinamičko usmjeravanje s 404 stranicom ("catch all")
	   Komentar:
	2.8 (barem) dvije komponente
	    Komentar:
		2.8.1 komponenta bez stanja, koristiti properties
		2.8.2 komponenta sa stanjem
	2.9 barem jedna komponenta mora emitirati barem jedan event
	    Komentar:
	2.10 store (Pinia)
	     Komentar:
	2.11 asinkroni dohvat podataka s backenda (Mocky)
	     Komentar:
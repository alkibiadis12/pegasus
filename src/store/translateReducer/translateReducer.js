export const languageTypes = {
  gr: 'Greek',
  uk: 'English',
  fr: 'French',
  pl: 'Polish',
  it: 'Italian',
};

export const reducer = (state, { type = languageTypes.gr }) => {
  switch (type) {
    case languageTypes.gr:
      return {
        ...state,
        selectedLanguage: languageTypes.gr,
        cardsWithRoutes: {
          apo: 'ΑΠΟ',
          hmeromhniaEkdromis: 'Ημερομηνία εκδρομής',
          wraAnaxwrhshs: 'Ώρα αναχώρησης',
          epistrofh: 'Επιστροφή',
          plhrofories: 'ΠΛΗΡΟΦΟΡΙΕΣ',
          monohmerh: 'Μονοήμερη Κρουαζιέρα',
          polyhmerh: 'Πολυήμερη Κρουαζιέρα',
          diathesimesTheseis: 'Διαθέσιμες θέσεις',
          eksantlimenaEishthria: 'Εξαντλημένα εισιτήρια',
          timh: 'Τιμή',
          elikse: 'ΕΛΗΞΕ',
        },
        smallDate: {
          epilegmenhHmeromhnia: 'Επιλεγμένη ημερομηνία',
        },
        menus: {
          diathesimesEkdromes: 'Διαθέσιμες εκδρομές',
          topothesiaAnaxwrhshs: 'Τοποθεσία Αναχώρησης',
          epiloghHmeromhnias: 'Επιλογή Ημερομηνίας',
        },
        breadcrumb: {
          epilogiEkdromis: 'Επιλογή εκδρομής',
          stoixeiaEpivatwn: 'Στοιχεία επιβατών',
          ekdosiEisithriwn: 'Έκδοση εισιτηρίων',
        },
        pricingPopUp: {
          epiloghAtomwn: 'Επιλογή ατόμων',
          telikhTimh: 'Τελική τιμή',
          epomenoVhma: 'Επόμενο Βήμα',
        },
        page2: {
          epivatis: 'Επιβάτης',
          onoma: 'Όνομα',
          epitheto: 'Επίθετο',
          ethnikotita: 'Εθνικότητα',
          hmeromhniaGennhshs: 'Ημερομηνία Γέννησης',
          thlefwnoEpikoinwnias: 'Τηλέφωνο επικοινωνίας',
          stoixeiaEpivatwn: 'Στοιχεία επιβατών',
          analyshKostous: 'Ανάλυση κόστους',
          eishthriaEkdromis: 'Εισητήρια εκδρομής',
          telikhTimh: 'Τελική τιμή',
          plhrwmh: 'ΠΛΗΡΩΜΗ',
          noAdult:
            'Πρέπει να υπάρχει τουλάχιστον ένας επιβάτης μεγαλύτερος από 12 ετών.',
        },
        schema: {
          validationFirstNameMin:
            'Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες.',
          validationFirstNameMatch:
            'Το όνομα πρέπει να περιέχει μόνο γράμματα.',
          validationLastNameMin:
            'Το επίθετο πρέπει να έχει τουλάχιστον 2 χαρακτήρες.',
          validationLastNameMatch:
            'Το επώνυμο πρέπει να περιέχει μόνο γράμματα.',
          emailValidation: 'Παρακαλώ δώστε έγκυρη διεύθυνση email.',
          phoneValidation: 'Παρακαλώ δώστε έναν έγκυρο αριθμό τηλεφώνου',
        },
      };

    case languageTypes.uk:
      return {
        ...state,
        selectedLanguage: languageTypes.uk,
        cardsWithRoutes: {
          apo: 'FROM',
          hmeromhniaEkdromis: 'Excursion date',
          wraAnaxwrhshs: 'Time of department',
          epistrofh: 'Returns to',
          plhrofories: 'Information',
          monohmerh: 'One day cruise',
          polyhmerh: 'Multi day cruise',
          diathesimesTheseis: 'Available tickets',
          eksantlimenaEishthria: 'Out of stock',
          timh: 'Price',
          elikse: 'FINISHED',
        },
        smallDate: {
          epilegmenhHmeromhnia: 'Selected Date',
        },
        menus: {
          diathesimesEkdromes: 'Available Trips',
          topothesiaAnaxwrhshs: 'Departure Location',
          epiloghHmeromhnias: 'Date Selection',
        },
        breadcrumb: {
          epilogiEkdromis: 'Trip Selection',
          stoixeiaEpivatwn: 'Passenger Information',
          ekdosiEisithriwn: 'Issued tickets',
        },
        pricingPopUp: {
          epiloghAtomwn: 'Select people',
          telikhTimh: 'Final Price',
          epomenoVhma: 'Next Step',
        },
        page2: {
          epivatis: 'Passenger',
          onoma: 'first name',
          epitheto: 'Last name',
          ethnikotita: 'Nationality',
          hmeromhniaGennhshs: 'Date of birth',
          thlefwnoEpikoinwnias: 'Phone number',
          stoixeiaEpivatwn: 'Passenger details',
          analyshKostous: 'Cost analysis',
          eishthriaEkdromis: 'Excursion tickets',
          telikhTimh: 'Final price',
          plhrwmh: 'PAYMENT',
          noAdult: 'At least one passenger must be older than 12 years old.',
        },
        schema: {
          validationFirstNameMin:
            'First name must contain at least 2 characters.',
          validationFirstNameMatch: 'First name must only contain letters.',
          validationLastNameMin:
            'Last name must contain at least 2 characters.',
          validationLastNameMatch: 'Last name must only contain letters.',
          emailValidation: 'Please provide a valid email address.',
          phoneValidation: 'Please provide a valid phone number.',
        },
      };

    case languageTypes.fr:
      return {
        ...state,
        selectedLanguage: languageTypes.fr,
        cardsWithRoutes: {
          apo: 'DEPUIS',
          hmeromhniaEkdromis: "Date de l'excursion",
          wraAnaxwrhshs: 'Heure du département',
          epistrofh: 'Retourne à',
          plhrofories: 'Renseignements',
          monohmerh: "Croisière d'un jour",
          polyhmerh: 'Croisière de plusieurs jours',
          diathesimesTheseis: 'Billets disponibles',
          eksantlimenaEishthria: 'Rupture de stock',
          timh: 'Prix',
          elikse: 'ACHEVÉE',
        },
        smallDate: {
          epilegmenhHmeromhnia: 'Date sélectionnée',
        },
        menus: {
          diathesimesEkdromes: 'Voyages disponibles',
          topothesiaAnaxwrhshs: 'Lieu de départ',
          epiloghHmeromhnias: 'Sélection des dates',
        },
        breadcrumb: {
          epilogiEkdromis: 'Selección de viaxe',
          stoixeiaEpivatwn: 'Información de pasaxeiros',
          ekdosiEisithriwn: 'Tickets emitidos',
        },
        pricingPopUp: {
          epiloghAtomwn: 'Sélectionnez des personnes',
          telikhTimh: 'Prix ​​final',
          epomenoVhma: "L'étape suivante",
        },
        page2: {
          epivatis: 'Passager',
          onoma: 'prénom',
          epitheto: 'Nom de famille',
          ethnikotita: 'Nationalité',
          hmeromhniaGennhshs: 'Date de naissance',
          thlefwnoEpikoinwnias: 'Numéro de téléphone',
          stoixeiaEpivatwn: 'Détails du passager',
          analyshKostous: 'Analyse de coût',
          eishthriaEkdromis: 'Billets excursions',
          telikhTimh: 'Prix ​​final',
          plhrwmh: 'PAIEMENT',
          noAdult: 'Au moins un passager doit être âgé de plus de 12 ans.',
        },
        schema: {
          validationFirstNameMin:
            'Le prénom doit contenir au moins 2 caractères.',
          validationFirstNameMatch:
            'Le prénom ne doit contenir que des lettres.',
          validationLastNameMin:
            'Le nom de famille doit contenir au moins 2 caractères.',
          validationLastNameMatch:
            'Le nom de famille ne doit contenir que des lettres.',
          emailValidation: 'Veuillez fournir une adresse email valide.',
          phoneValidation: 'Veuillez fournir un numéro de téléphone valide.',
        },
      };

    case languageTypes.pl:
      return {
        ...state,
        selectedLanguage: languageTypes.pl,
        cardsWithRoutes: {
          apo: 'Z',
          hmeromhniaEkdromis: 'Data wycieczki',
          wraAnaxwrhshs: 'Czas działu',
          epistrofh: 'Wraca do',
          plhrofories: 'Informacja',
          monohmerh: 'Jednodniowy rejs',
          polyhmerh: 'Wielodniowy rejs',
          diathesimesTheseis: 'Dostępne bilety',
          eksantlimenaEishthria: 'Obecnie brak na stanie',
          timh: 'Cena',
          elikse: 'SKOŃCZONE',
        },
        smallDate: {
          epilegmenhHmeromhnia: 'Wybrana data',
        },
        menus: {
          diathesimesEkdromes: 'Dostępne wycieczki',
          topothesiaAnaxwrhshs: 'Lokalizacja wyjazdu',
          epiloghHmeromhnias: 'Wybór daty',
        },
        breadcrumb: {
          epilogiEkdromis: 'Wybór podróży',
          stoixeiaEpivatwn: 'Informacje o pasażerach',
          ekdosiEisithriwn: 'Wydane bilety',
        },
        pricingPopUp: {
          epiloghAtomwn: 'Wybierz osoby',
          telikhTimh: 'Cena ostateczna',
          epomenoVhma: 'Następny krok',
        },
        page2: {
          epivatis: 'Pasażer',
          onoma: 'Imię',
          epitheto: 'Nazwisko',
          ethnikotita: 'Narodowość',
          hmeromhniaGennhshs: 'Data urodzenia',
          thlefwnoEpikoinwnias: 'Numer telefonu',
          stoixeiaEpivatwn: 'Dane pasażera',
          analyshKostous: 'Analiza kosztów',
          eishthriaEkdromis: 'Bilety wycieczkowe',
          telikhTimh: 'Cena ostateczna',
          plhrwmh: 'ZAPŁATA',
          noAdult: 'Co najmniej jeden pasażer musi mieć więcej niż 12 lat.',
        },
        schema: {
          validationFirstNameMin: 'Imię musi zawierać co najmniej 2 znaki.',
          validationFirstNameMatch: 'Imię może zawierać tylko litery.',
          validationLastNameMin: 'Nazwisko musi zawierać co najmniej 2 znaki.',
          validationLastNameMatch: 'Nazwisko może zawierać tylko litery.',
          emailValidation: 'Prosimy o wprowadzenie poprawnego adresu e-mail.',
          phoneValidation: 'Podaj prawidłowy numer telefonu.',
        },
      };

    case languageTypes.it:
      return {
        ...state,
        selectedLanguage: languageTypes.it,
        cardsWithRoutes: {
          apo: 'DA',
          hmeromhniaEkdromis: "Data dell'escursione",
          wraAnaxwrhshs: 'Tempo di reparto',
          epistrofh: 'Ritorna a',
          plhrofories: 'Informazione',
          monohmerh: 'Crociera di un giorno',
          polyhmerh: 'Crociera di più giorni',
          diathesimesTheseis: 'Biglietti disponibili',
          eksantlimenaEishthria: 'Esaurito',
          timh: 'Prezzo',
          elikse: 'FINITA',
        },
        smallDate: {
          epilegmenhHmeromhnia: 'Data selezionata',
        },
        menus: {
          diathesimesEkdromes: 'Viaggi disponibili',
          topothesiaAnaxwrhshs: 'Luogo di partenza',
          epiloghHmeromhnias: 'Selezione della data',
        },
        breadcrumb: {
          epilogiEkdromis: 'Selezione del viaggio',
          stoixeiaEpivatwn: 'Informazioni sui passeggeri',
          ekdosiEisithriwn: 'Biglietti emessi',
        },
        pricingPopUp: {
          epiloghAtomwn: 'Seleziona le persone',
          telikhTimh: 'Prezzo finale',
          epomenoVhma: 'Passo successivo',
        },
        page2: {
          epivatis: 'Passegger',
          onoma: 'nome di battesimo',
          epitheto: 'Cognome',
          ethnikotita: 'Nazionalità',
          hmeromhniaGennhshs: 'Data di nascita',
          thlefwnoEpikoinwnias: 'Numero di telefono',
          stoixeiaEpivatwn: 'Dati del passeggero',
          analyshKostous: 'Analisi dei costi',
          eishthriaEkdromis: 'Biglietti per escursioni',
          telikhTimh: 'Prezzo finale',
          plhrwmh: 'PAGAMENTO',
          noAdult: 'Almeno un passeggero deve avere più di 12 anni.',
        },
        schema: {
          validationFirstNameMin: 'Il nome deve contenere almeno 2 caratteri.',
          validationFirstNameMatch: 'Il nome deve contenere solo lettere.',
          validationLastNameMin:
            'Il cognome deve contenere almeno 2 caratteri.',
          validationLastNameMatch: 'Il cognome deve contenere solo lettere.',
          emailValidation: 'Si prega di fornire un indirizzo email valido.',
          phoneValidation: 'Si prega di fornire un numero di telefono valido.',
        },
      };
  }
};

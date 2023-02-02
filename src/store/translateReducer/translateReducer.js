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

export const createSchemaSlice = set => ({
  schema: {
    validationFirstNameMin: 'Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες.',
    validationFirstNameMatch: 'Το όνομα πρέπει να περιέχει μόνο γράμματα.',
    validationLastNameMin:
      'Το επίθετο πρέπει να έχει τουλάχιστον 2 χαρακτήρες.',
    validationLastNameMatch: 'Το επώνυμο πρέπει να περιέχει μόνο γράμματα.',
    emailValidation: 'Παρακαλώ δώστε έγκυρη διεύθυνση email.',
    phoneValidation: 'Παρακαλώ δώστε έναν έγκυρο αριθμό τηλεφώνου',
  },
});

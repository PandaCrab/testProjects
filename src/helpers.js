import * as Yup from 'yup';

export const shippingValidation = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Z]\w+\s[A-Z]\w+$/, 'Invalide full name')
        .required('Please enter your name'),
    phone: Yup.string()
        .min(10, 'Invalide phone number')
        .max(19, 'You enter long phone')
        .required('Enter a contact phone'),
    street: Yup.string().required('Enter shipping address'),
    country: Yup.string().required('Choose country'),
    city: Yup.string().required('enter city'),
    zip: Yup.number().required('Enter zip')
});

export const billingValidation = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z]+\s[a-zA-Z]+$/, 'Please enter full name')
        .required('Please enter your name'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Please enter email'),
    street: Yup.string().required('Enter billing address'),
    country: Yup.string().required('Choose a country'),
    city: Yup.string().required('Enter city'),
    zip: Yup.number().required('Enter zip')
});

export const paymentValidation = Yup.object().shape({
    cardholder: Yup.string()
        .matches(/^((?:[A-Za-z]+ ?){1,3})$/, 'Enter correct place holder name')
        .required('Enter a card holder name'),
    cardNum: Yup.string()
        .matches(/^([0-9]){4} ([0-9]){4} ([0-9]){4} ([0-9]){4}$/, 'Enter valid card number')
        .required('Enter a card number'),
    date: Yup.string()
        .test(
            'test-credit-card-expiration-date',
            'Date has past',
            expirationDate => {
              if (!expirationDate) {
                return false
              }
          
              const today = new Date()
              const monthToday = today.getMonth() + 1
              const yearToday = today
                .getFullYear()
                .toString()
                .substring(2)
          
              const [expMonth, expYear] = expirationDate.split('/')
          
              if (Number(expYear) < Number(yearToday)) {
                return false
              } else if (
                Number(expMonth) < monthToday &&
                Number(expYear) <= Number(yearToday)
              ) {
                return false
              }
          
              return true
            }
        )
        .required('Enter expire date'),
    cvv: Yup.string()
        .matches(/^\d{3}$/, 'Invalid cvc')
        .required('Enter a cvc')
});

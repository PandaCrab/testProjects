import * as Yup from 'yup';

export const shippingValidation = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z]+\s[a-zA-Z]+$/, 'Invalide full name')
        .required('Please enter your name'),
    phone: Yup.string()
        .min(10, 'Invalide phone number')
        .max(18, 'You enter long phone')
        .matches(/^\+\d+\(\d+\)\s\d{3}\-\d{2}\-\d{2}$/, 'Only numbers')
        .required('Enter a contact phone'),
    address: Yup.string().required('Enter shipping address'),
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
    address: Yup.string().required('Enter billing address'),
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
        .matches(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])$/, 'Enter valid date')
        .required('Enter expire date'),
    code: Yup.string()
        .matches(/^\d{3}$/, 'Invalid cvc')
        .required('Enter a cvc')
});

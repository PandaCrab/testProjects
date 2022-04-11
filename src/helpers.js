import * as Yup from 'yup';

export const shippingValidation = Yup.object().shape({
    name: Yup.string().required('Required'),
    phone: Yup.number()
        .moreThan(10, 'Not enough')
        .required('Required'),
    address: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    zip: Yup.number().required('Required')
});

export const billingValidation = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    address: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    zip: Yup.number().required('Required')
});

export const paymentValidation = Yup.object().shape({
    cardholder: Yup.string().required('Requied'),
    cardNum: Yup.number()
        .min(16, 'Invalid card number')
        .required('Required'),
    date: Yup.number().required('Required'),
    code: Yup.number().required('Required')
});

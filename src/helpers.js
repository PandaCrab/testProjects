const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i

    export const FindFormErrors = (info) => {
        const {
            name,
            email,
            phone,
            address,
            country,
            city,
            zip,
            cardholder,
            cardNum,
            date,
            code
        } = info;
        const newErrors = {}

        //name
        if (!name || name === '') newErrors.name = 'Please enter recipient full name';
        if (typeof name !== 'undefined') {
            if ((/^[0-9\d]+$/).test(name)) newErrors.name = 'Only letters';
            else if ((/^[$&+,:;=?@#|'<>.-^*()%!]+$/).test(name)) newErrors.name = `Don't use special symbols`;
            else if (!(/^[a-zA-Z]+\s[a-zA-Z]+$/).test(name)) newErrors.name = 'Please enter Full name';
        }
        //email
        if (!email || email === '') newErrors.email = 'Please enter email';
        if (typeof email !== 'undefined') {
            if (!emailRegex.test(email)) newErrors.email = 'Please enter valid email'
        }
        //phone
        if (!phone || phone === '') newErrors.phone = 'Please enter phone number';
        if (typeof phone !== 'undefined') {
            if (!(/^[0-9\b]+$/).test(phone)) newErrors.phone = 'Please enter only nubmers';
            else if (phone.length !== 10) newErrors.phone = 'Please enter valid phone number';
        }
        //address
        if (!address || address === '') newErrors.address = 'Please enter address';
        //country
        if (!country || country === '') newErrors.country = 'Please choose country'
        //city
        if (!city || city === '') newErrors.city = 'Plaese enter city';
        //zip code
        if (!zip || zip === '') newErrors.zip = 'Enter ZIP';
        if (typeof zip !== 'undefined') {
            if (!(/^[0-9]+$/).test(zip)) newErrors.zip = 'Only numbers'
            else if (zip.length !== 6) newErrors.zip = 'Invalid ZIP'
        }
        //cardholder
        if (!cardholder || cardholder === '') newErrors.cardholder = 'Please enter cardholder name';
        if (typeof cardholder !== 'undefined') {
            if ((/^[0-9]+$/).test(cardholder)) newErrors.cardholder = 'Only letters';
            else if ((/^[$&+,:;=?@#|'<>.-^*()%!]+$/).test(cardholder)) newErrors.cardholder = `Don't use special symbols`;
        }
        //card number
        if (!cardNum || cardNum === '') newErrors.cardNum = 'Please enter card number';
        if (typeof cardNum !== 'undefined') {
            if ((/^[$&+,:;=?@#|'<>.-^*()%!]+$/).test(cardholder)) newErrors.cardholder = `Don't use special symbols`;
            else if (!(/^([0-9]){4} ([0-9]){4} ([0-9]){4} ([0-9]){4}$/).test(cardNum)) newErrors.cardNum = 'Enter valid card number';
        }
        //date
        if (!date || date === '') newErrors.date = 'Set date';
        if (typeof date !== 'undefined') {
            if (!(/^[\d]{2}\/[\d]{2}$/).test(date)) newErrors.date = 'Invalid date';
            else if ((/(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])/).test(date)) newErrors.date = 'Invalid date';
        }
        //security code
        if (!code || code === '') newErrors.code = 'Enter code';
        if (typeof code !== 'undefined') {
            if (!(/^[0-9]+$/).test(code)) newErrors.code = 'Only numbers';
            else if ((/^[$&+,:;=?@#|'<>.-^*()%!]+$/).test(code)) newErrors.code = 'Only numbers';
            else if ((/^([0-9]){3}$/).test(code)) newErrors.code = 'To long';
        }
        

        return newErrors;
    };
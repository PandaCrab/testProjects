import {
    fetchGeolocation,
    fetchAddress
} from '../api';

describe('Geolocation:', () => {

    test('should get response', async() => {
        const data = await fetchGeolocation();
        expect(data).not.toBeUndefined();
    });

    test('should throw arror', async() => {
        expect.assertions(1);
        try {
            await fetchGeolocation();
        } catch (error) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(error).toMatch(`Can't take geolocation`);
        }
    });
});

describe('Address from input', () => {

    it('should get response', async() => {
        const data = await fetchAddress();
        expect(data).not.toBeUndefined();
    })

})
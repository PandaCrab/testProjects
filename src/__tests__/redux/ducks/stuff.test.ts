import { runSaga } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

import * as api from '../../../api'
import stuffReducer, {
    FETCH_STUFF,
    SHOW_LOADER,
    HIDE_LOADER,
    stuffWatcher,
    fillStuff
} from '../../../redux/ducks/stuff';

describe('Stuff reducer', () => {
    it('should have initial state', () => {
        const action: { type: string, payload: Object[] } = {type: 'dummy_action', payload: []};
        const initialState: { stuff: Object, loading: boolean } = {
            stuff: [],
            loading: false
        };
        expect(stuffReducer(undefined, action)).toEqual(initialState);
    });

    it('should fiil stuff', () => {
        const action: { type: string, payload: Object[] } = {type: FETCH_STUFF, payload: [
            {
                'id': 1,
                'imgUrl': `https://guesseu.scene7.com/is/image/GuessEU/
                    M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80
                    &op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0`,
                'name': 'Check Print Shirt',
                'color': 'Grey+red+black',
                'price': 110
            }
        ]};
        const initialState: { stuff: Object[], loading: boolean } = {
            stuff: [{
                'id': 1,
                'imgUrl': `https://guesseu.scene7.com/is/image/GuessEU/
                    M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80
                    &op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0`,
                'name': 'Check Print Shirt',
                'color': 'Grey+red+black',
                'price': 110
            }],
            loading: false
        };
        expect(stuffReducer(undefined, action)).toEqual(initialState);
    });

    it('should change loder to true', () => {
        const action = { type: SHOW_LOADER };
        const initialState: { stuff: Object[], loading: boolean } = {
            stuff: [],
            loading: true
        };
        expect(stuffReducer(undefined, action)).toEqual(initialState);
    });

    it('should change loader to false', () => {
        const action: { type: string } = { type: HIDE_LOADER };
        const initialState: { stuff: Object[], loading: boolean } = {
            stuff: [],
            loading: false
        };
        expect(stuffReducer(undefined, action)).toEqual(initialState);
    });
});


describe('dataWatcher', () => {
    const gen = stuffWatcher();

    it('should wait for every REQUEST_STUFF and call fillStuff', () => {
        expect(gen.next().value)
            .toEqual(takeEvery('stuff/REQUEST_STUFF', fillStuff));
    });

    it('should be done on next iteration', () => {
        expect(gen.next().done).toBeTruthy();
    });
});

describe('despatch show and hide loader and take stuff from server', () => {
    const fakeStuff = [{
        'id': 1,
        'imgUrl': `https://guesseu.scene7.com/is/image/GuessEU/
            M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80
            &op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0`,
        'name': 'Check Print Shirt',
        'color': 'Grey+red+black',
        'price': 110
    }];

    const fetchStuff = jest.spyOn(api, 'fetchStuff')
        .mockImplementation(() => Promise.resolve(fakeStuff));
    const dispatched: Object[] = [];

    beforeAll(async () => await runSaga({
        dispatch:  (action) => dispatched.push(action)
    }, fillStuff));

    it('should call fetch stuff', () => {
        expect(fetchStuff).toHaveBeenCalledTimes(1);
    });

    it('should dispatch SHOW_LOADER', () => {
        expect(dispatched[0]).toEqual({type: SHOW_LOADER});
    });

    it('should dispatch FETCH_STUFF', () => {
        expect(dispatched[1]).toEqual({type: FETCH_STUFF, payload: fakeStuff});
    });

    it('should dispatch HIDE_LOADER', () => {
        expect(dispatched[2]).toEqual({type: HIDE_LOADER});
    });
    fetchStuff.mockClear();
});    

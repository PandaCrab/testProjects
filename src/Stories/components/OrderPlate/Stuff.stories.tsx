import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import { store } from '../../../redux/store';
import { Stuff } from '../../../components/Index';
import { apolloClient } from '../../..';

export default {
    title: 'Stuff',
    component: Stuff
} as ComponentMeta<typeof Stuff>;

const Template: ComponentStory<typeof Stuff> = () => (
    <ApolloProvider client={apolloClient}>
        <Provider store={store}>
                <Stuff />
        </Provider>
    </ApolloProvider>
);

export const StuffItems = Template.bind({});

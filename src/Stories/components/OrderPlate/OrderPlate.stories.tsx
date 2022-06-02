import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../../redux/store';
import { OrderPlate } from '../../../components/Index';
import { apolloClient } from '../../..';

export default {
    title: 'OrderPlate',
    component: OrderPlate
} as ComponentMeta<typeof OrderPlate>;

const Template: ComponentStory<typeof OrderPlate> = () => (
    <ApolloProvider client={apolloClient}>
        <Provider store={store}>
            <BrowserRouter>
                <OrderPlate />
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
);

export const Order = Template.bind({});

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../../redux/store';
import { Payment } from '../../../components/Index';
import { apolloClient } from '../../..';

export default {
    title: 'Form',
    component: Payment
} as ComponentMeta<typeof Payment>;

const Template: ComponentStory<typeof Payment> = () => (
    <ApolloProvider client={apolloClient}>
        <Provider store={store}>
            <BrowserRouter>
                <Payment />
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
);

export const PaymentForm = Template.bind({});
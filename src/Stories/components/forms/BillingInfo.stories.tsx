import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../../redux/store';
import { BillingInfo } from '../../../components/Index';
import { apolloClient } from '../../..';

export default {
    title: 'Form',
    component: BillingInfo
} as ComponentMeta<typeof BillingInfo>;

const Template: ComponentStory<typeof BillingInfo> = () => (
    <ApolloProvider client={apolloClient}>
        <Provider store={store}>
            <BrowserRouter>
                <BillingInfo />
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
);

export const BillingForm = Template.bind({});
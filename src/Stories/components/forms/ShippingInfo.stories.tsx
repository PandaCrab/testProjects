import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../../redux/store';
import { ShippingInfo } from '../../../components/Index';
import { apolloClient } from '../../..';

export default {
    title: 'Form',
    component: ShippingInfo
} as ComponentMeta<typeof ShippingInfo>;

const Template: ComponentStory<typeof ShippingInfo> = () => (
    <ApolloProvider client={apolloClient}>
        <Provider store={store}>
            <BrowserRouter>
                <ShippingInfo />
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
);

export const ShippingForm = Template.bind({});

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../redux/store';
import App from '../../App';
import { apolloClient } from '../..';

export default {
    title: 'App',
    component: App
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => (
    <ApolloProvider client={apolloClient}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
);

export const Header = Template.bind({});

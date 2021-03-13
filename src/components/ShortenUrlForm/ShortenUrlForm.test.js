/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShortenUrlForm from './ShortenUrlForm';

describe('ShortenUrlForm', () => {
    it('should render the basic fields', () => {

        render(<ShortenUrlForm />);
        expect(
            screen.getByText('Url:'),
        ).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText('Url to shorten'),
        ).toBeInTheDocument();
        expect(
            screen.getByText('Shorten and copy URL'),
        ).toBeInTheDocument();
        expect(
            screen.queryByTestId('result'),
        ).not.toBeInTheDocument();

    });
});

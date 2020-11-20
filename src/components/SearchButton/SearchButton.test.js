import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import SearchButton from './SearchButton';

describe('SearchButton', () => {
    afterEach(cleanup);

    test('if button is rendered', ()=> {
        render(<SearchButton data-testid="button">Hello</SearchButton>);

        const button = screen.getByTestId('button');
        expect(button).toBeInTheDocument();
    });

    test('if text is rendered (button is empty)', ()=> {
        render(<SearchButton data-testid="button"></SearchButton>);

        const button = screen.getByTestId('button');
        expect(button).toBeEmpty();
    });

    test('if text is rendered (button is not empty)', ()=> {
        render(<SearchButton>Hello</SearchButton>);

        const button = screen.getByText('Hello');
        expect(button).not.toBeEmpty();
    });

    test('if onClick fn is fired', () => {
        const test = jest.fn();
        render(<SearchButton data-testid="button" onClick={test}>Hello</SearchButton>);

        const button = screen.getByTestId('button');
        fireEvent.click(button);
        expect(test).toBeCalled();
    });

    test('if button is disabled when empty string passed', () => {
        render(<SearchButton text=''></SearchButton>);

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    test('if button is not disabled when string passed', () => {
        render(<SearchButton text='text'></SearchButton>);

        const button = screen.getByRole('button');
        expect(button).not.toBeDisabled();
    });
})
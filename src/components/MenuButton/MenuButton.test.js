import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import MenuButton from './MenuButton';

describe('MenuButton', () => {
    afterEach(cleanup);

    test('if button is rendered', () => {
        render(<MenuButton data-testid="button">Hello</MenuButton>);

        const button = screen.getByTestId('button');
        expect(button).toBeInTheDocument();
    });

    test('if text is rendered (button is empty)', () => {
        render(<MenuButton data-testid="button"></MenuButton>);

        const button = screen.getByTestId('button');
        expect(button).toBeEmpty();
    });

    test('if text is rendered (button is not empty)', () => {
        render(<MenuButton>Hello</MenuButton>);

        const button = screen.getByText('Hello');
        expect(button).not.toBeEmpty();
    });

    test('if onClick fn is fired', () => {
        const test = jest.fn();
        render(<MenuButton data-testid="button" onClick={test}>Hello</MenuButton>);

        const button = screen.getByTestId('button');
        fireEvent.click(button);
        expect(test).toBeCalled();
      });
})
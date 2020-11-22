import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import ForecastContainer from './ForecastContainer';

const componentProps = {
    forecastArr: [
        {
            weather: [
                {
                    icon: "03d",
                    description: 'Clouds'
                }
            ],
            name: 'Warsaw',
            main: {
                pressure: 1021,
                humidity: 81,
                temp: 10
            },
            wind: {
                speed: 6,
                deg: 100
            }
        },
        {
            weather: [
                {
                    icon: "03d",
                    description: 'Clear sky'
                }
            ],
            name: 'Cracow',
            main: {
                pressure: 1011,
                humidity: 60,
                temp: 12
            },
            wind: {
                speed: 2,
                deg: 150
            }
        }
    ],
};

describe('ForecastContainer', () => {
    afterEach(cleanup);

    test('if component is rendered', () => {
        render(<ForecastContainer forecastArr={componentProps.forecastArr}/>);
    });

    test('if element with index 0 is displayed by default (correct is forecast for Warsaw)', () => {
        render(<ForecastContainer forecastArr={componentProps.forecastArr}/>);
        const title = screen.getByText('Warsaw');
        expect(title).toBeInTheDocument();
    });

    test('if second forecast will be shown after onClick event', () => {
        render(<ForecastContainer forecastArr={componentProps.forecastArr}/>);
        const prevButton = screen.getAllByRole('button')[0];
        fireEvent.click(prevButton);
        const title = screen.getByText('Cracow');
        expect(title).toBeInTheDocument();
    });

    test('if general forecast is rendered by default', () => {
        render(<ForecastContainer forecastArr={componentProps.forecastArr}/>);
        const temp = screen.getByText('10 °C');
        expect(temp).toBeInTheDocument();
    });

    test('if details will be rendered after onClick event', () => {
        render(<ForecastContainer forecastArr={componentProps.forecastArr}/>);
        const button = screen.getByText('Details');
        fireEvent.click(button)
        const list = screen.getByRole('list')
        expect(list).toBeInTheDocument();
    });
})
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Home from '../pages/Home'
import Releases from '../pages/Releases';

describe('Home page' , () => {
  test('Deve existir o texto "Seja Bem vindo(a) ao Space-X"', () => {
    renderWithRouter(<Home />)

    const homeTitle = screen.getByText('Seja Bem vindo(a) ao Space-X')
    expect(homeTitle).toBeInTheDocument
  });

  test('Deve existir o texto "Veja os lançamentos e suas informações"', () => {
    renderWithRouter(<Home />)

    const homeSubtitle = screen.getByText('Veja os lançamentos e suas informações');
    expect(homeSubtitle).toBeInTheDocument
  });
});


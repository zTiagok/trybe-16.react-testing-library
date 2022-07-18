import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testings in the "About" component. It...', () => {
  it('Should have a "H2" element with "About Pokédex" labeled.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/about');

      const screenMessage = screen.getByRole('heading', {
        name: /about pokédex/i,
      });

      expect(screenMessage).toBeInTheDocument();
    });

  it('Should have two paragraph elements in the page.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/about');

      const screenMessage = screen.getByText(/This application simulates a Pokédex/i);
      const screenMessage2 = screen.getByText(/One can filter Pokémons by type/i);

      expect(screenMessage).toBeInTheDocument();
      expect(screenMessage2).toBeInTheDocument();
    });

  it('Should have a certain image in the page.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/about');

      const screenImage = screen.getByRole('img');

      expect(screenImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    });
});

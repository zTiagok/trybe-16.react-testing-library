import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testings in the "Favorite Pokemons" component. It...', () => {
  it('Should have a message in case theres no favorites pokémons selected.',
    () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );

      const favoriteNavButton = screen.getByRole('link', {
        name: /favorite pokémon/i,
      });

      userEvent.click(favoriteNavButton);

      const screenMessage = screen.getByText(/No favorite pokemon found/i);

      expect(screenMessage).toBeInTheDocument();
    });

  it('Should appear the favorite selected pokémon in the favorites page.',
    async () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/');

      const typeButton = await screen.findByRole('button', {
        name: /fire/i,
      });

      userEvent.click(typeButton);

      const detailsButton = await screen.findByRole('link', {
        name: /more details/i,
      });

      userEvent.click(detailsButton);

      const favoriteInput = await screen.findByLabelText(/pokémon favoritado?/i);

      userEvent.click(favoriteInput);

      const favoritesLink = screen.getByRole('link', {
        name: /favorite pokémons/i,
      });

      userEvent.click(favoritesLink);

      const favoritePokemon = screen.getByText(/charmander/i);

      expect(favoritePokemon).toBeInTheDocument();
    });
});

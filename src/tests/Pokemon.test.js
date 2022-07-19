import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

const pokemonClass = '.pokemon-overview';

describe('Testings in the "Pokémon" component. It...', () => {
  it('Should renders the details navigation button.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/');

      const detailsButton = screen.getByRole('link', {
        name: /more details/i,
      });

      expect(detailsButton).toBeInTheDocument();
      userEvent.click(detailsButton);

      expect(customHistory.location.pathname).toBe('/pokemons/25');
    });

  it('Should renders the correct Pokémon name on the page.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/');

      const detailsButton = screen.getByRole('link', {
        name: /more details/i,
      });

      userEvent.click(detailsButton);

      const pokemonName = document.querySelector(pokemonClass);

      expect(pokemonName.firstChild.innerHTML).toBe('Pikachu');
    });

  it('Should renders the correct Pokémon type on the page.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/');

      const detailsButton = screen.getByRole('link', {
        name: /more details/i,
      });

      userEvent.click(detailsButton);

      const pokemonType = document.querySelector(pokemonClass);

      expect(pokemonType.childNodes[1].innerHTML).toBe('Electric');
    });

  it('Should renders the correct Pokémon weight on the page.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/');

      const detailsButton = screen.getByRole('link', {
        name: /more details/i,
      });

      userEvent.click(detailsButton);

      const pokemonWeight = document.querySelector(pokemonClass);

      expect(pokemonWeight.childNodes[2].innerHTML).toBe('Average weight: 6.0 kg');
    });

  it('Should renders the correct Pokémon image and alt text on the page.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/');

      const detailsButton = screen.getByRole('link', {
        name: /more details/i,
      });

      userEvent.click(detailsButton);

      const pokemonImage = document.querySelector(pokemonClass);

      expect(pokemonImage.nextElementSibling).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
      expect(pokemonImage.nextElementSibling).toHaveAttribute('alt', 'Pikachu sprite');
    });

  it('Should renders a star when the Pokémon is favorited.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/');

      const detailsButton = screen.getByRole('link', {
        name: /more details/i,
      });

      userEvent.click(detailsButton);

      const favoriteButton = screen.getByLabelText(/pokémon favoritado?/i);
      expect(favoriteButton).toBeInTheDocument();

      userEvent.click(favoriteButton);

      const pokemonStar = document.querySelector('.favorite-icon');

      expect(pokemonStar).toHaveAttribute('src', '/star-icon.svg');
      expect(pokemonStar).toHaveAttribute('alt', 'Pikachu is marked as favorite');
    });
});

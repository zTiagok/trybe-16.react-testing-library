import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

const pokemons = ['Pikachu', 'Charmander', 'Caterpie', 'Ekans', 'Alakazam',
  'Mew', 'Rapidash', 'Snorlax', 'Dragonair'];

const types = ['All', 'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

describe('Testings in the "Pokédex" component. It...', () => {
  it('Should have a "H2" with a message.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/');

      const screenMessage = screen.getByRole('heading', {
        name: /encountered pokémons/i });

      expect(screenMessage).toBeInTheDocument();
    });

  pokemons.forEach((pokemon, index) => {
    it(`Renders the pokémon '${pokemon}' on the page.`, async () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/');

      const nextButtonEvent = () => {
        const nextButton = screen.getByRole('button', {
          name: /próximo pokémon/i });

        userEvent.click(nextButton);
      };

      Array.from({ length: index }, () => nextButtonEvent());

      const pokemonName = await screen.findByText(pokemon);

      expect(pokemonName).toBeInTheDocument();
    });
  });

  types.forEach((type, index) => {
    it(`Renders a button of the ${type} type.`, async () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/');

      const dataTestId = 'pokemon-type-button';

      const nextButton = screen.getByRole('button', {
        name: /próximo pokémon/i });

      const allButton = screen.getByRole('button', {
        name: 'All',
      });

      const button = screen.getByRole('button', {
        name: type,
      });

      if (type === 'Electric') {
        userEvent.click(button);
        const pokemon1 = await screen.findByText('Pikachu');

        expect(pokemon1).toBeInTheDocument();

        const hasDataTest = screen.getAllByTestId(dataTestId);
        expect(hasDataTest[index]).toBeInTheDocument();
      }

      if (type === 'Fire') {
        userEvent.click(button);
        const pokemon1 = await screen.findByText('Charmander');
        expect(pokemon1).toBeInTheDocument();

        userEvent.click(nextButton);

        const pokemon2 = await screen.findByText('Rapidash');
        expect(pokemon2).toBeInTheDocument();

        const hasDataTest = screen.getAllByTestId(dataTestId);
        expect(hasDataTest[index]).toBeInTheDocument();
      }

      if (type === 'Bug') {
        userEvent.click(button);
        const pokemon1 = await screen.findByText('Caterpie');
        expect(pokemon1).toBeInTheDocument();

        const hasDataTest = screen.getAllByTestId(dataTestId);
        expect(hasDataTest[index]).toBeInTheDocument();
      }

      if (type === 'Poison') {
        userEvent.click(button);
        const pokemon1 = await screen.findByText('Ekans');
        expect(pokemon1).toBeInTheDocument();

        const hasDataTest = screen.getAllByTestId(dataTestId);
        expect(hasDataTest[index]).toBeInTheDocument();
      }

      if (type === 'Psychic') {
        userEvent.click(button);
        const pokemon1 = await screen.findByText('Alakazam');
        expect(pokemon1).toBeInTheDocument();

        userEvent.click(nextButton);

        const pokemon2 = await screen.findByText('Mew');
        expect(pokemon2).toBeInTheDocument();

        const hasDataTest = screen.getAllByTestId(dataTestId);
        expect(hasDataTest[index]).toBeInTheDocument();
      }

      if (type === 'Normal') {
        userEvent.click(button);
        const pokemon1 = await screen.findByText('Snorlax');
        expect(pokemon1).toBeInTheDocument();

        const hasDataTest = screen.getAllByTestId(dataTestId);
        expect(hasDataTest[index]).toBeInTheDocument();
      }

      if (type === 'Dragon') {
        userEvent.click(button);
        const pokemon1 = await screen.findByText('Dragonair');
        expect(pokemon1).toBeInTheDocument();

        const hasDataTest = screen.getAllByTestId(dataTestId);
        expect(hasDataTest[index - 1]).toBeInTheDocument();
      }

      userEvent.click(allButton);

      const firstPokemon = await screen.findByText('Pikachu');

      expect(firstPokemon).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(allButton).toBeInTheDocument();
    });
  });
});

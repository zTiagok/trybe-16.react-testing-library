import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

const pokemons = ['Pikachu', 'Charmander', 'Caterpie', 'Ekans', 'Alakazam',
  'Mew', 'Rapidash', 'Snorlax', 'Dragonair'];

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

  // pokemons.forEach((pokemon, index) => {
  //   it(`Renders the pokémon '${pokemon}' on the page.`, async () => {
  //     const customHistory = createMemoryHistory();
  //     render(
  //       <Router history={ customHistory }>
  //         <App />
  //       </Router>,
  //     );

  //     customHistory.push('/');

  //     const nextButtonEvent = () => {
  //       const nextButton = screen.getByRole('button', {
  //         name: /próximo pokémon/i });

  //       userEvent.click(nextButton);
  //     };

  //     Array.from({ length: index }, () => nextButtonEvent());

  //     const pokemonName = await screen.findByText(pokemon);

  //     expect(pokemonName).toBeInTheDocument();
  //   });
  // });

  it('Renders all pokémons on the page.', async () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <App />
      </Router>,
    );

    customHistory.push('/');

    const nextButton = screen.getByRole('button', {
      name: /próximo pokémon/i });

    expect(screen.getByText(pokemons[0])).toBeInTheDocument();
    userEvent.click(nextButton);

    expect(screen.getByText(pokemons[1])).toBeInTheDocument();
    userEvent.click(nextButton);

    expect(screen.getByText(pokemons[2])).toBeInTheDocument();
    userEvent.click(nextButton);

    expect(screen.getByText(pokemons[3])).toBeInTheDocument();
    userEvent.click(nextButton);

    expect(screen.getByText(pokemons[4])).toBeInTheDocument();
    userEvent.click(nextButton);

    expect(screen.getByText(pokemons[5])).toBeInTheDocument();
    userEvent.click(nextButton);

    expect(screen.getByText(pokemons[6])).toBeInTheDocument();
    userEvent.click(nextButton);

    expect(screen.getByText(pokemons[7])).toBeInTheDocument();
    userEvent.click(nextButton);

    expect(screen.getByText(pokemons[8])).toBeInTheDocument();
    userEvent.click(nextButton);
  });

  it('Renders all types buttons in the page.', async () => {
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

    // ELECTRIC _________________________________________________

    const electric = screen.getByRole('button', {
      name: /electric/i,
    });

    userEvent.click(electric);

    expect(electric).toBeInTheDocument();

    expect(screen.getByText('Pikachu')).toBeInTheDocument();

    expect(screen.getAllByTestId(dataTestId)[0]).toBeInTheDocument();

    // FIRE ___________________________________________________________

    const fire = screen.getByRole('button', {
      name: /fire/i,
    });

    userEvent.click(fire);

    expect(fire).toBeInTheDocument();

    expect(screen.getByText('Charmander')).toBeInTheDocument();

    userEvent.click(nextButton);

    expect(screen.getByText('Rapidash')).toBeInTheDocument();

    expect(screen.getAllByTestId(dataTestId)[1]).toBeInTheDocument();

    // BUG ___________________________________________________________

    const bug = screen.getByRole('button', {
      name: /bug/i,
    });

    userEvent.click(bug);

    expect(bug).toBeInTheDocument();

    expect(screen.getByText('Caterpie')).toBeInTheDocument();

    expect(screen.getAllByTestId(dataTestId)[2]).toBeInTheDocument();

    // POISON ___________________________________________________________

    const poison = screen.getByRole('button', {
      name: /poison/i,
    });

    userEvent.click(poison);

    expect(poison).toBeInTheDocument();

    expect(screen.getByText('Ekans')).toBeInTheDocument();

    expect(screen.getAllByTestId(dataTestId)[3]).toBeInTheDocument();

    // PSYCHIC ___________________________________________________________

    const psychic = screen.getByRole('button', {
      name: /psychic/i,
    });

    userEvent.click(psychic);

    expect(psychic).toBeInTheDocument();

    expect(screen.getByText('Alakazam')).toBeInTheDocument();

    userEvent.click(nextButton);

    expect(screen.getByText('Mew')).toBeInTheDocument();

    expect(screen.getAllByTestId(dataTestId)[4]).toBeInTheDocument();

    // NORMAL ___________________________________________________________

    const normal = screen.getByRole('button', {
      name: /normal/i,
    });

    userEvent.click(normal);

    expect(normal).toBeInTheDocument();

    expect(screen.getByText('Snorlax')).toBeInTheDocument();

    expect(screen.getAllByTestId(dataTestId)[5]).toBeInTheDocument();

    // DRAGON ___________________________________________________________

    const dragon = screen.getByRole('button', {
      name: /dragon/i,
    });

    userEvent.click(dragon);

    expect(dragon).toBeInTheDocument();

    expect(screen.getByText('Dragonair')).toBeInTheDocument();

    expect(screen.getAllByTestId(dataTestId)[6]).toBeInTheDocument();

    userEvent.click(allButton);

    const firstPokemon = await screen.findByText('Pikachu');

    expect(firstPokemon).toBeInTheDocument();
    expect(allButton).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testings in the "App" file.', () => {
  it('Should render three navigation links on the top of the app.',
    () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );

      const firstLink = screen.getByRole('link', {
        name: /home/i,
      });
      expect(firstLink).toBeInTheDocument();

      const secondLink = screen.getByRole('link', {
        name: /about/i,
      });
      expect(secondLink).toBeInTheDocument();

      const thirdLink = screen.getByRole('link', {
        name: /favorite pokémons/i,
      });
      expect(thirdLink).toBeInTheDocument();
    });

  it('Should redirect to "Home" after clicking the navigation button.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/');

      const screenMessage = screen.getByRole('heading', {
        name: /Encountered pokémons/i });

      expect(screenMessage).toBeInTheDocument();
    });

  it('Should redirect to "About" after clicking the navigation button.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/about');

      const screenMessage = screen.getByRole('heading', {
        name: /About Pokédex/i });

      expect(screenMessage).toBeInTheDocument();
    });

  it('Should redirect to "Favorite Pokémons" after clicking the navigation button.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/favorites');

      const screenMessage = screen.getByRole('heading', {
        name: /favorite pokémons/i });

      expect(screenMessage).toBeInTheDocument();
    });

  it('Should redirect to a page not found after entering an invalid url.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/testeeees');

      const screenMessage = screen.getByRole('heading', {
        name: /Page requested not found/i });

      expect(screenMessage).toBeInTheDocument();
    });
});

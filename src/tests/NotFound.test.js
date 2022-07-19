import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testings in the "Page Not Found" component. It...', () => {
  it('Should have a "H2" with a "page not found" message.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/error');

      const screenMessage = screen.getByRole('heading', {
        name: /page requested not found/i,
      });

      expect(screenMessage).toBeInTheDocument();
    });

  it('Should render a GIF when entering the page.',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );

      customHistory.push('/error');

      const screenImage = document.querySelector('.not-found-image');

      expect(screenImage).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    });
});

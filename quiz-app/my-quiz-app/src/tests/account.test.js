import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Pages/Account';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Account from '../Pages/Account';

describe( 'Account Component', () => {
    test('renders Icon with the correct class', () => {
        render(
            <MemoryRouter>
        <Account />
      </MemoryRouter>  
        );
        const iconElement = screen.getByText(/whatshot/i);
        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveClass('material-icons-outlined');
    });

    test('renders page heading', () => {
        render(
          <MemoryRouter>
            <Account />
          </MemoryRouter>
        );
      
        const heading = screen.getByText(/Account/i);
              expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Account');
      });

      test('renders streak section', () => {
        render(
            <MemoryRouter>
            <Account />
          </MemoryRouter>
        );
        const Icon = screen.getByText(/whatshot/i);
        const Title = screen.getByText(/Streaks/i);
        const Text = screen.getByText(/You have a 5 day streak!/i);
    
        expect(Icon).toBeInTheDocument();
        expect(Title).toBeInTheDocument();
        expect(Text).toBeInTheDocument();
      });

});
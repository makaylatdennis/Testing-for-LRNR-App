import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Pages/Home';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';


describe('Home Page', ()=>{
test('logo is visible', () => {
    render(
        <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const logo = screen.getByTestId('home-logo');
    expect(logo).toBeInTheDocument();
});


test('renders the rewarding paragraph', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const rewardingParagraph = screen.getByTestId('rewarding');
  expect(rewardingParagraph).toHaveTextContent(
    'Our app is designed to be both challenging and rewarding, so you can learn new concepts while enjoying the process.'
  );
});

test('displays begin journey button', () =>{
  render(
    <MemoryRouter>
    <Home />
  </MemoryRouter>
  );
  const jrnybttn = screen.getByTestId('begin-bttn')
  expect(jrnybttn).toBeInTheDocument();
})

})
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the header', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const headerElement = screen.getByRole('heading', { name: /my super website boilerplate/i });
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the body', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const bodyElement = screen.getByRole('heading', { name: /body/i });
    expect(bodyElement).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const footerElement = screen.getByRole('heading', { name: /footer/i });
    expect(footerElement).toBeInTheDocument();
  });
});

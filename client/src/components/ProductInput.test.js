import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductInput from './ProductInput';

describe('ProductInput', () => {
  const id = 'product-name';
  const title = 'Product Name';
  let func;
  beforeEach(() => {
    func = jest.fn();
    render(<ProductInput id={id} title={title} setState={func} />);
  }) 
  
  it('contains input field', () => {
    const input = screen.getByRole('textbox', { name: title });
    expect(input).toBeInTheDocument();
  });
  
  it('input field has appropriate value after user inputted text', () => {
    const input = screen.getByRole('textbox');

    const inputText = '1234';
    userEvent.type(input, inputText);

    expect(input).toHaveValue(inputText);
    expect(func.mock.calls.length).toBe(inputText.length);
  })
});

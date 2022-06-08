import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddForm from './AddForm';

describe('AddForm', () => {
  let form;
  let func;

  beforeEach(() => {
    func = jest.fn();
    form = <AddForm onAddProduct={func} />;
  })
  it('contains toggle, add, and cancel buttons', () => {
    
  })
})



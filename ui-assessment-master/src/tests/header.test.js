import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/header';

test('renders Header component with support contact', () => {
  const supportContact = {
    name: 'John Smith',
    email: 'john.smith@feefo.com'
  };

  const { getByText } = render(<Header supportContact={supportContact} />);

  expect(getByText('Account Overview')).toBeInTheDocument();
  expect(getByText('YOUR FEEFO SUPPORT CONTACT')).toBeInTheDocument();
  expect(getByText('Support')).toBeInTheDocument();
  expect(getByText('john.smith@feefo.com')).toBeInTheDocument();
  expect(getByText('020 3362 4208')).toBeInTheDocument();
});

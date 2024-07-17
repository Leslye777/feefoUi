import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Indicators from '../components/indicators';

test('renders Indicators component with correct percentages', () => {
  const salesOverview = {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4
  };

  const { getByText } = render(<Indicators salesOverview={salesOverview} />);

  const uploadSuccess = (salesOverview.successfulUploads / salesOverview.uploads) * 100;
  const linesSaved = (salesOverview.linesSaved / salesOverview.linesAttempted) * 100;

  expect(getByText(`${uploadSuccess.toFixed(2)}%`)).toBeInTheDocument();
  expect(getByText(`${linesSaved.toFixed(2)}%`)).toBeInTheDocument();
  expect(getByText('UPLOAD SUCCESS')).toBeInTheDocument();
  expect(getByText('LINES SAVED')).toBeInTheDocument();
});

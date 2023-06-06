import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderContent from './HeaderContent';
describe('HeaderContent tests', () => { 
  it('Should render HeaderContent', async () => {
    render(<HeaderContent />);
    expect(screen.getByTestId('user-actions')).toHaveTextContent(/User Action/i);
  });
});

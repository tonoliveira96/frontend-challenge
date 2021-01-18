import { render, fireEvent, configure } from '@testing-library/react';
import React from 'react';

import Index from '../pages/Home/index';

configure({ testIdAttribute: 'id' });

describe('Home page', () => {
  it('Criar uma nova meta', () => {
    const { getByTestId } = render(<Index />);

    const WButton = getByTestId('whatsapp');

    // console.log(WButton);
    fireEvent.click(WButton);

    
  });

});

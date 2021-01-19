import { render, fireEvent, configure, getByPlaceholderText, getByText } from '@testing-library/react';
import React from 'react';

import Index from '../pages/Home/index';

configure({ testIdAttribute: 'id' });

const mookAdd = jest.fn();

jest.mock('',()=>{
  return{
    window:()=>({
      location: ()=>({
        reload: jest.fn()
      })
    })
  }
})

jest.mock('',()=>{
  return{
    alert: jest.fn()
  }
})

describe('Home page', () => {
  it('Criar uma nova meta', () => {
    const { getByPlaceholderText, getByText } = render(<Index />);

    const localField = getByPlaceholderText('Digite o local que deseja conhecer');
    const metaField = getByPlaceholderText('mês/ano');

    const addButton = getByText("Adicionar");

    fireEvent.change(localField, {target: { value : "Rio de Janeiro"}});
    fireEvent.change(metaField, {target: { value : "01/2020"}});

    fireEvent.click(addButton);

    expect(mookAdd).toHaveBeenCalledWith(window.location.reload());
    
  });

});

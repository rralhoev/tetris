/* eslint-disable no-undef */
import React from 'react';
import App from './App';

describe('App should be render', () => {
  it('App have header', () => {
    let component = shallow(<App />);
    let header = component.find('h1');
    expect(header.text()).toBe('Header');
  })
})
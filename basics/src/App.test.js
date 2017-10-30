import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App/>
    );
  });

  // assertions
  it('should have the th "Items"', () => {
    expect(
      wrapper.contains(<th>Items</th>)
    ).toBe(true);
  });

  it('should have a button element', () => {
    expect(
      wrapper.containsMatchingElement(
        <button>Add item</button>
      )
    ).toBe(true);
  });

  it('should have an input element', () => {
    expect(
      wrapper.containsMatchingElement(
        <input/>
      )
    ).toBe(true)
  });

  it('button should be disabled', () => {
    const button = wrapper.find('button').first();
    expect(
        button.props().disabled
    ).toBe(true);
  });
})

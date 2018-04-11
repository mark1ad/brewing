import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Home from './Home';

describe("Header", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Carousel', () => {
    expect(
      shallow(<Home />)
        .find('Carousel')
        .length
    ).toBe(1)
  });
});

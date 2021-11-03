import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  Nav from './componets/HomescreenComponent/nav.js';

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For Nav', () => {
  it('should render button', () => {
    const wrapper = shallow(<Nav />)
    const buttonElement  = wrapper.find('#favouriteMovies');
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual('favouriteMovies');
  })
})
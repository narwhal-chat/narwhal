import React from 'react';
import { Signup } from '../../../../components/Auth/Signup/Signup'
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Component: Signup', () => {

  it('Renders the signup page', () => {
    const component = shallow(<Signup />);
    expect(component).toHaveLength(1);
  })

  it('Links to Login page', () => {
    const wrapper = shallow(<Signup />);
    expect(
      wrapper.find('NavLink').prop('to')
    ).toEqual('/login')
  });

  it('should have three input fields', () => {
    const wrapper = shallow(<Signup />);
    const input = wrapper.find('input')
    expect(input).toHaveLength(3)
  })

  it('should be valid if username is 4-28 characters long', () => {
    const wrapper = shallow(<Signup />);
    const username = wrapper.find('input').at(0)
    username.prop('changed')({target: {value: 'asdff'}}, 'username')
    expect(wrapper.state('controls').username.valid).toEqual(true)
  })

  it('should be valid if email is an email address', () => {
    const wrapper = shallow(<Signup />);
    const email = wrapper.find('input').at(1);
    email.prop('changed')({target: { value: 'test@gmail.com'}}, 'email')
    expect(wrapper.state('controls').email.valid).toEqual(true)
  })

  it('should be valid if password is 6-48 characters long', () => {
		const wrapper = shallow(<Signup />);
		const password = wrapper.find('input').at(2);
		password.prop('changed')({ target: { value: 'testpassword' } }, 'password');
		expect(wrapper.state('controls').password.valid).toEqual(true);
  });

});
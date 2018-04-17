import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App />);
    console.log(component.debug());
    expect(component).toHaveLength(1);
  });

  // describe('it renders props correctly', () => {
  //   const component = shallow(<App name="app" />);
  //   console.log(component.debug())
  //   expect(component.name).toBe('app');
  // })
})
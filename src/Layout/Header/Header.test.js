import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from 'Layout/Header';
import { Tested } from './Tested';

configure({ adapter: new Adapter() });

describe('<Tested />', () => {
  it('Logoutが読み込まれている', () => {
    const wrapper = shallow(<Tested />);
    expect(wrapper.find(AuthButtonContainer).length).toEqual(1);
  });

  it('Logoutが読み込まれている', () => {
    const wrapper = shallow(<Tested />);
    expect(wrapper.find(AuthButtonContainer).length).toEqual(1);
  });

  it('Logoutが読み込まれている', () => {
    const wrapper = shallow(<Tested />);
    expect(wrapper.find(AuthButtonContainer).length).toEqual(1);
  });
});

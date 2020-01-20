import React from 'layout/Header/node_modules/react';
import { configure, shallow } from 'layout/Header/node_modules/enzyme';
import Adapter from 'layout/Header/node_modules/enzyme-adapter-react-16';
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

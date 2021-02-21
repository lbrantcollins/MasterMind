// import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

test('renders the game board', () => {
  const wrapper = shallow(<App />);
  
  expect(wrapper.find('Gameboard').exists()).toBe(true);
});

import { shallow } from 'enzyme';
import Gameboard from '../../components/Gameboard';

describe('the Gameboard component', () => {

    let wrapper;

    beforeEach( () => {

        wrapper = shallow(<Gameboard />);
    })

    it('should...', () => {
        
        expect(wrapper.find('PegRow').exists()).toBe(true);

    });

});
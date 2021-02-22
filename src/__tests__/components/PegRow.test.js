import { shallow } from 'enzyme';
import PegRow from '../../components/PegRow';

describe('The PegRow component', () => {

    let wrapper;

    beforeEach( () => {

        wrapper = shallow(<PegRow difficultyLevel={4} />);

    });

    it('should...', () => {

        expect(wrapper.find('[data-test="title"]').text()).toBe("A row of 4 pegs.");
        

    });

});
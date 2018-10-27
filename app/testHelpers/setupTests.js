// import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// jest.mock('./components/LoginForm', () => 'LoginForm');
configure({ adapter: new Adapter() });

import Button from './components/Button';
import { FaAdversal, FaBitcoin } from 'react-icons/fa';

function App() {
  return (
    <div>
      <div>
        <Button className='mb-5' success rounded outline><FaAdversal />Button 1</Button>
      </div>
      <div>
        <Button danger outline><FaBitcoin />+Button 2</Button>
      </div>
      <div>
        <Button warning>Button 3</Button>
      </div>
      <div>
        <Button secondary outline>Button 4</Button>
      </div>
      <div>
        <Button secondary rounded>Button 5</Button>
      </div>
      <div>
        <Button primary>Button 6</Button>
      </div>
    </div>
  );
}

export default App;
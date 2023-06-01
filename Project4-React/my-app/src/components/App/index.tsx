import { GlobalState } from '../../state';
import { Form } from '../Form';
import { List } from '../List';
import { Slider } from '../Slider';
import './App.css';

const App = (props: GlobalState) => (
  <div className='App'>
    <Form />
    <List todos={props.todos}/>
    <Slider images={props.images} page={props.page}/>
  </div>
);

export default App;

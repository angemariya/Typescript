import { GlobalState } from '../../state';
import { Form } from '../Form';
import { List } from '../List';
import { Counter } from '../Counter';
import './App.scss';

const App = (props: GlobalState) => (
  <div className='App'>
    <div className='wrapper'>
      <Form />
      <List todos={props.todos}/>
      <Counter />
    </div>
  </div>
);

export default App;

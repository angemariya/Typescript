import { Form } from '../Form';
import { Header } from '../Header';
import { Main } from '../Main';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Form />
      <Main />
    </div>
  );
}

export default App;

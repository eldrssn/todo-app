import { Provider } from 'react-redux';
import 'normalize.css';

import { List } from './components/list';
import store from './store';
import './styles/global.scss';

function App() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}

export default App;

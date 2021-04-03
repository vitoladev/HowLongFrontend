import GlobalStyle from './styles/globalStyles';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes />
  </BrowserRouter>
);

export default App;

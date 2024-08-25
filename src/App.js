import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from './Pages/Authentication/Login';

function App() {
  return (
    <Router>
      <Layout/>
    </Router>
  );
}

export default App;

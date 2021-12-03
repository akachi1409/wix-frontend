import './App.css';

import Header from "./components/header/header"
import Utility from './components/utility/utility';
import Roadmap from './components/roadmap/roadmap';
function App() {
  return (
    <div className="App">
        <Header/>
        <Utility/>
        <Roadmap/>
    </div>
  );
}

export default App;

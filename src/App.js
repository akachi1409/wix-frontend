import './App.css';

import Header from "./components/header/header"
import Utility from './components/utility/utility';
import Roadmap from './components/roadmap/roadmap';
import Metaverse from './components/metaverse/metaverse';
function App() {
  return (
    <div className="App">
        <Header/>
        <Utility/>
        <Roadmap/>
        <Metaverse/>
    </div>
  );
}

export default App;

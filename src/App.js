import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/projects" component={Projects}/>
      </Switch>
    </div>
  );
}

export default App;

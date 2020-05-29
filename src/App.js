import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Projects from './components/projects.js'
import Articles from './components/articles.js'
import Home from './components/home.js'


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
          <div className="App">

          {/* Set up the Router */}
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/articles" component={Articles} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import './App.css'
import './MediaStyle.css'
import Search from './Components/Search'
import Science from './Components/Science'
import Art from './Components/Art'
import World from './Components/World'
import Home from './Components/Home'
import Header from './Components/Header'
class App extends Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Container fluid>
          <Header/>
          <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/world" component={World}/>
           <Route exact path="/art" component={Art}/>
           <Route exact path="/science" component={Science}/>
           <Route exact path="/search" component={Search}/>
          </Switch>
        </Container>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

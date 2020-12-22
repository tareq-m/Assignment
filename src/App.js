import './App.css';
import React from 'react';
import GrayPage from './components/GrayPage/GrayPage';
import LeftBar from './components/LeftBar/LeftBar';
import WhitePage from './components/WhitePage/WhitePage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {myTickets: [],sharedisSavedBoolen:true};
    this.updateSharedBoolean = this.updateSharedBoolean.bind(this);

  }
  updateSharedBoolean(sharedValue){
    this.setState({sharedisSavedBoolen:sharedValue})
  }
 

componentDidMount() {
    fetch('./data.json')
        .then(response => response.json())
        .then(result => {
            const tickets = result.map(item => {
                return item
            })
            this.setState({
                myTickets: tickets
            });
        });
}
  
  render() {
    return (
      <div className="App " >
 
 
        <LeftBar tickets={this.state.myTickets} />
        <GrayPage sharedisSavedBoolen={this.state.sharedisSavedBoolen} updateSharedBoolean={this.updateSharedBoolean} />
        <WhitePage  sharedisSavedBoolen={this.state.sharedisSavedBoolen} updateSharedBoolean={this.updateSharedBoolean}/>
      </div>
    );
  }
}

export default App;

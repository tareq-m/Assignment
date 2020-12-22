import './App.css';
import React from 'react';
import GrayPage from './components/GrayPage/GrayPage';
import LeftBar from './components/LeftBar/LeftBar';
import WhitePage from './components/WhitePage/WhitePage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { myTickets: [], sharedisSavedBoolen: true ,newTitle:''};
    this.updateSharedBoolean = this.updateSharedBoolean.bind(this);
    this.updateTitle = this.updateTitle.bind(this);

  }
  updateSharedBoolean(sharedValue) {
    this.setState({ sharedisSavedBoolen: sharedValue })
  }
  updateTitle(value){
    this.setState({newTitle :value})
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
        <GrayPage sharedisSavedBoolen={this.state.sharedisSavedBoolen} updateSharedBoolean={this.updateSharedBoolean}  ticketTitle={this.state.newTitle}  updateTitle={this.updateTitle}/>
        <WhitePage sharedisSavedBoolen={this.state.sharedisSavedBoolen} updateSharedBoolean={this.updateSharedBoolean} ticketTitle={this.state.newTitle}  />
      </div>
    );
  }
}

export default App;

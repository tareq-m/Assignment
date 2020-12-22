import './WhitePage.css';
import React from 'react';
import Timer from "react-compound-timer";



class WhitePage extends React.Component {

    constructor() {
        super();
        this.state = { active: false };
        this.toggleClass = this.toggleClass.bind(this);
    }
    toggleClass() {
        const currentState = this.state.active;
        if (!(this.props.sharedisSavedBoolen)) {
            this.setState({ active: !currentState });
        }
        return;
    };

    render() {


        return (

            <div className='right-div '>
                <span className="top-navbar  " >
                    <h1 className="title d-inline-block mt-5 ml-5 title-text-color"> {this.props.ticketTitle ? this.props.ticketTitle : 'No Title please enter title'} </h1>
                    <span className="icons float-right mt-5 mr-2">
                        <i className="far fa-clock px-2 text-color"></i>
                        <i className="fas fa-inbox px-2  text-color"></i>
                        <Timer  startImmediately = {false}  >
                            {({ start, resume, pause, stop, reset, timerState }) => (
                                <React.Fragment>
                                    <span>
                                        0<Timer.Hours /> : 0<Timer.Minutes />:<Timer.Seconds></Timer.Seconds>
                                    </span>
                                    <br />
                                    <button onClick={start}>Start</button>.
                                </React.Fragment>
                            )}
                        </Timer>
                    </span>
                </span>
                <div className=' mt-5 ml-5 rounded w-75 border  user-text-bg area-text' >
                    <p className='mt-2'>I want to do somthing !change</p>
                </div>
                <h6 className='ml-5  mt-2'> Can't see ! something is here </h6>
                <div id="footer">
                    <div onMouseEnter={this.toggleClass} onMouseOut={this.toggleClass} className={this.state.active ? 'input-group mb-3 ml-5 input-group-lg input-group-width' : ' ml-5  input-group mb-3  input-group-sm input-group-width'} >
                        <div className="input-group-prepend ">
                            <span className="input-group-text" id="inputGroup-sizing-sm"><i className={this.props.sharedisSavedBoolen ? 'fas fa-comment-slash ' : ' fas fa-comment'}></i></span>
                        </div>
                        <input disabled={this.props.sharedisSavedBoolen} type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter message here" />
                        <span className="input-group-text" id="inputGroup-sizing-sm"><i class="fas fa-chevron-circle-right  "></i></span>
                    </div>
                    <h1>{this.props.sharedisSavedBoolen}</h1>
                </div>
            </div>
        );
    }
}

export default WhitePage;
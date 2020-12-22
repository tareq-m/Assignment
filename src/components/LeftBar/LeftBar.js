import './LeftBar.css';
import React from 'react';

class LeftBar extends React.Component {


    render() {

        return (
            <div className='left-div' >
                <h1 className=" m-3" id="circle"><i class="fas fa-user"></i><span className='dot green'></span></h1>
                <div>
                    {this.props.tickets.map(item => (
                        <div className="m-3 d-flex align-items-center justify-content-center" id="circle" key={item.id} ><span className='dot red'></span><span>{item.Title}</span> </div>                    ))}
                </div> 

            </div>
        );
    }
}

export default LeftBar;
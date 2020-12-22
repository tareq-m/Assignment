
import React from 'react';
import './GrayPage.css';

class GrayPage extends React.Component {

    constructor() {
        super();
        this.state = { value: '25', userInput: false, disabled: true, dropdownValue: '', userNote: '', userInputField: '', isSaved: false };

        this.textCalculate = this.textCalculate.bind(this);
        this.menuChange = this.menuChange.bind(this);
        this.storeUserInput = this.storeUserInput.bind(this);
        this.updateShared = this.updateShared.bind(this);
    }
    //Gray


    updateShared() {
        this.props.updateSharedBoolean(false);
    }

    textCalculate(e) {
        const number = 25;
        const userNote = e.target.value
        //maybe remove length ?

        const result = e.target.value.length
        let textfilled = false;
        this.setState({ userInput: false });
        this.setState({ disabled: true });
        this.setState({ userNote: userNote });
        this.setState({ value: number - result });

        if (26 > result && result !== 0) {
            textfilled = true;
        }
        if (result > 25) {
            this.setState({ userInput: true });
            textfilled = false;
        }
        if (this.state.dropdownValue.length != null && textfilled) {
            this.setState({ disabled: false });
        }


    }

    menuChange(e) {
        this.setState({ disabled: true });
        const dropValue = e.target.value;


        this.setState({ dropdownValue: dropValue });


    }


    storeUserInput() {
        const dropDown = this.state.dropdownValue;
        const userNote = this.state.userNote;
        const isSaved = this.state.isSaved;
        console.log(isSaved)
        this.setState({
            userInputField: {
                'ticket': {
                    'title': dropDown,
                    'title2': userNote
                }
            }, isSaved: true
        })
        console.log(isSaved)
        console.log(dropDown)
        console.log(this.state.userInputField)

    }
    render() {
        return (
            <div className='center-div pt-5'>
                <h2 className='blue-color ml-5 mt-2'><u>Classify</u></h2>
                <br></br>
                <h4 className='text-color ml-5' >    What is the user asking for?</h4>
                <div>
                    <form className='ml-5'>
                        <select className="font-weight-bold" id='dropDownMenu' name="dropdown" onChange={this.menuChange} >
                            <option value="" selected disabled hidden   >Select</option>
                            <option value="product" >Buy a product</option>
                            <option value="Cancel">Cancel an account</option>
                            <option value="gift">Buy and Recommend a gift</option>
                            <option value="Ask">Ask for the business</option>

                        </select>
                    </form>
                </div>
                <div>
                    <h4 className='text-color ml-5'> what the user want </h4>
                    <textarea className="userText ml-5" onKeyUp={this.textCalculate}></textarea>
                    <div className={` ${this.state.userInput ? "active ml-5 " : "not-active ml-5"}`}> Charcters left  {this.state.value}  </div>
                </div>
                <div><button className='btn btn-info text-white footer mr-2 ' disabled={this.state.disabled} onClick={this.storeUser, this.updateShared} >Procceed</button></div>
            </div>
        );

    }
}
export default GrayPage;

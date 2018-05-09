import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {

    state = {

        dane:""


    };

    componentDidMount(){

    }


set=(event,value)=>{

        this.setState({


            dane:value

        },this.saveToDatabase)
};




    saveToDatabase = () =>

        fetch('https://isa-sandbox-88427.firebaseio.com/Stan/.json',

            {
               method:'PUT',
                body:JSON.stringify(this.state.dane)

            }
        );

    render() {
        return (
            <div>


                <TextField onChange={this.set}/>


            </div>
        );
    }
}

export default App;

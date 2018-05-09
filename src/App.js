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

        })
};




    saveToDatabase = () =>

        fetch('https://isa-sandbox-88427.firebaseio.com/Stan/.json',

            {
               method:'POST',
                body:JSON.stringify(this.state.dane)

            }
        );

    render() {
        return (
            <div>


                <TextField onChange={this.set}/>
                <RaisedButton

                    onClick={()=>this.saveToDatabase()}
                    label={"Klik"}
                    primary={true}/>

            </div>
        );
    }
}

export default App;

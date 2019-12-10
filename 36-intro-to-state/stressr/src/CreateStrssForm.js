import React from 'react';

class CreateStrssForm extends React.Component{

    render(){
        return (
            <div className="add-form-container">
                <div>Create a New Strssr!</div>
                <form>
                    <label>
                    Name
                    <input type="text" />
                    </label>
                    <label>
                    Level
                    <input type="text" />
                    </label>
                    <label>
                    Duration
                    <input type="text" />
                    </label>
                    <label>
                    Image
                    <input type="text" />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateStrssForm;
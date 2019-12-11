import React from 'react';

class CreateStrssForm extends React.Component{

    state = {
        isFormOpen: false,
        name: '',
        level: '',
        duration: '',
        image: ''
    }

    toggleForm = () => {
        this.setState({
            isFormOpen: !this.state.isFormOpen
        })
    }

    handleChange = (e) => {
        // console.log(e.target.name)
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {name, image, duration, level} = this.state; 

        fetch('http://localhost:3001/strssrs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                name, image, duration: parseFloat(duration), level
            })
        })

        // e.persist()
        // debugger;
    }

    renderForm = () => {
        return (
            <>
                <div>Create a New Strssr!<button onClick={this.toggleForm}>Close</button></div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name
                    <input type="text" onChange={this.handleChange} value={this.state.name} name="name" />
                    </label>
                    <label>
                    Level
                    <input type="text" onChange={this.handleChange} value={this.state.level} name="level" />
                    </label>
                    <label>
                    Duration
                    <input type="text" onChange={this.handleChange} value={this.state.duration} name="duration" />
                    </label>
                    <label>
                    Image
                    <input type="text" onChange={this.handleChange} value={this.state.image} name="image" />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }

    render(){
        // console.log('form state', this.state)
        return (
            <div className="add-form-container">
                {this.state.isFormOpen ? this.renderForm() : <button onClick={this.toggleForm}>Open Form</button>}
            </div>
        )
    }
}

export default CreateStrssForm;


// key assignment shortcut
// let name =  "hermione"
// let house = 'gryffindor'

// let student = { name: name, house: house }
// let student2 = { name, house } 
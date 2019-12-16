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

    // handleNameChange = (e) => {
    //     this.setState({ name: e.target.value })
    // } 
    // handleLevelChange = (e) => {
    //     this.setState({ level: e.target.value })
    // } 
    // handleDurationChange = (e) => {
    //     this.setState({ duration: e.target.value })
    // } 
    // handleImageChange = (e) => {
    //     this.setState({ image: e.target.value })
    // } 

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
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
    }

    renderForm = () => {
        console.log(this.state)
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
        return (
            <div className="add-form-container">
                {this.state.isFormOpen ? this.renderForm() : <button onClick={this.toggleForm}>Open Form</button>}
            </div>
        )
    }
}

export default CreateStrssForm;

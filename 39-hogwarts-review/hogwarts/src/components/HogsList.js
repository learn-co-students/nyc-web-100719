import React, { Component } from 'react';
import hogs from '../porkers_data';
import HogTile from './HogTile';

class HogsList extends Component {
    state = {
        hogs: hogs,
        filterGreased: false,
        sort: 'none'
    }

    toggleHogCleanliness = (name) => {

        // find the hog we're changing, make a copy and make the change to the copy
        let targetHogInd = this.state.hogs.findIndex( hog => hog.name === name )
        let targetHog =  this.state.hogs[targetHogInd] 
        targetHog.isDirty = !targetHog.isDirty
        
        // make a copy of all of the hogs and update the hog in the right index 
        let newHogs = [...this.state.hogs]
        newHogs[targetHogInd] = targetHog

        this.setState({ hogs: newHogs })
        
    }

    toggleGreased = () => {
        this.setState({ filterGreased: !this.state.filterGreased })
    }

    handleChange = (e) => {
        this.setState({ sort: e.target.value })
    }

    renderHogs = (showDirty) => {
        let displayedHogs = [...this.state.hogs].filter(hog => showDirty ? hog.isDirty : !hog.isDirty)

        if ( this.state.sort === 'alphabetical' ) {
            displayedHogs = displayedHogs.sort((hog1, hog2) => hog1.name.toLowerCase() <= hog2.name.toLowerCase() ?  -1 : 1)
        }
        if ( this.state.sort === 'weight' ) {
            displayedHogs = displayedHogs.sort((hog1, hog2) => hog1.weight <= hog2.weight ?  -1 : 1)
        }
        if ( this.state.filterGreased ) {
            displayedHogs = displayedHogs.filter( hog => hog.greased )
        }

        return displayedHogs.map(hog => <HogTile handleDirty={this.toggleHogCleanliness} {...hog} />)
        // spread operator instead of name={hog.name} and so on 
    }

    // renderDirtyHogs = () => {
    //     let displayedHogs = [...this.state.hogs].filter(hog => hog.isDirty)

    //     if ( this.state.sort === 'alphabetical' ) {
    //         displayedHogs = displayedHogs.sort((hog1, hog2) => hog1.name.toLowerCase() <= hog2.name.toLowerCase() ?  -1 : 1)
    //     }
    //     if ( this.state.sort === 'weight' ) {
    //         displayedHogs = displayedHogs.sort((hog1, hog2) => hog1.weight <= hog2.weight ?  -1 : 1)
    //     }
    //     if ( this.state.filterGreased ) {
    //         displayedHogs = displayedHogs.filter( hog => hog.greased )
    //     }

    //     return displayedHogs.map(hog => <HogTile handleDirty={this.toggleHogCleanliness} {...hog} />)
    // }

    render(){
        console.log('hogs list state', this.state.hogs)
        return(
            <div>
                <div>
                    <button onClick={this.toggleGreased}> {this.state.filterGreased ? 'Show All Hogs'  :  'Show Only Greased'}  </button>
                    <label>
                        Sort:
                        <select value={this.state.sort} onChange={this.handleChange}>
                            <option value="none">None</option>
                            <option value="weight">Weight</option>
                            <option value="alphabetical">Alphabetical</option>
                        </select>
                    </label>
                </div>
                <div id="main-pen" className="ui grid container">
                    {this.renderHogs(false)}
                </div>
                <div id="dirty-pen" style={{minHeight: '500px'}}className="ui grid container">
                    DIRTY CONTAINER
                   {this.renderHogs(true)}
                </div>
            </div>
        )
    }
}

export default HogsList;
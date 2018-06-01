import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Edit extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: '',
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        const updatedObj = { title: this.state.title, body: this.state.body }
        axios
        .put(`https://glacial-bayou-87205.herokuapp.com/api/note/${this.props.match.params.id}`, updatedObj)
        .then(note => {
            console.log(note)
        })
        .catch(err => {
            console.log(err)
        })
    }



    render() {
        return (
            <div className="Note">
            <div className='Note-feature'> 
                <h1> Lambda Notes </h1>
                <button className ='Note-buttons'>
                    <Link to= '/'> View Your Notes </Link>
                </button>
                <button className ='Note-buttons'>
                    <Link to= '/createnote'> +Create New Note </Link>
                </button>
            </div>
            <div className='Note-content'>
                <h1> Edit Note: </h1>
                <div className='Note-create'>
                        <input 
                            className='Note-title'
                            type='text'
                            placeholder='Note Title'
                            name='title'
                            value = {this.state.title}
                            onChange = {this.handleChange}
                        />
                        <textarea
                            className='Note-contented'
                            type='text'
                            placeholder='Note Content'
                            name='body'
                            value = {this.state.body}
                            onChange = {this.handleChange}
                        />
                    </div>
                <button onClick = {this.handleSubmit} className= 'Note-button'> Update </button>
            </div>
        </div>
        )
    }
}

export default Edit;
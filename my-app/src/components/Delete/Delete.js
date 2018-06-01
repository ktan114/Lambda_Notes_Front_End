import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import './Delete.css';

class Delete extends Component {
    constructor(props) {
      super(props)
      this.state = { isModalOpen: false }
    }

    handleSubmit = (e) => {
      axios
      .delete(`https://glacial-bayou-87205.herokuapp.com/api/note/${this.props.match.params.id}`)
      .then(deleted => {
        console.log(deleted)
      })
      .catch(err => {
        console.log(err)
      })
    }

    openModal() {
        this.setState({ isModalOpen: true })
      }
    
      closeModal() {
        this.setState({ isModalOpen: false })
      }
  
    render() {
      return (
        <div>
          <button className= 'Delete-Button' onClick={() => this.openModal()}>delete</button>
          <Modal 
            isOpen={this.state.isModalOpen} 
            onClose={() => this.closeModal()}
            className = 'Modal'
            >
            <div className='Delete-Modal'>
              <h1 className= 'Text'>Are you sure you want to delete this?</h1>
              <div className= 'Delete-Buttons'>
                <button onClick = {this.handleSubmit} className= 'Delete'> Delete </button>
                <button 
                className= 'No-Button' 
                onClick={() => this.closeModal()}>
                No
                </button>
              </div>
            </div>
          </Modal>
        </div>
      )
    }
  
  }
  
  export default Delete;
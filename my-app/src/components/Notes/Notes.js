import React from 'react';
import { Link } from 'react-router-dom';

import Delete from '../Delete/Delete';
import './Notes.css';

export const Notes = (props) => {

    const id = props.match.params.id;
    const note = props.note.filter(el => el._id === id)[0];

    console.log("line 12", props)
    
    return  (
        <div className="Note">
            <div className='Note-feature'> 
                <h1> Lambda Notes </h1>
                <button className ='Note-buttons'>
                    <Link to= '/'> View Your Notes </Link>
                </button>
                <button className ='Note-buttons'>
                    <Link to= '/newNote'> +Create New Note </Link>
                </button>
            </div>
            <div className='Note-holder'>
                <div className='Note-links'>
                    <Link to= {`/edit/${id}`}> edit </Link>
                    <Delete />
                </div>
                <div className='Note-body'>
                    <h1> Note Name </h1>
                    <div className='Note-text'>
                    <h3> {note.title} </h3>
                    <p> {note.body} </p>
          
                         
                    </div>
                </div>
            </div>
        </div>
    );
}


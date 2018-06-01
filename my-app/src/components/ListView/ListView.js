import React from 'react';
import { Link } from 'react-router-dom';

import './ListView.css';

export const ListView = (props) => {

    return (
        <div className="Note">
            <div className= 'Note-feature'> 
                <h1> Lambda Notes </h1>
                <button className ='Note-buttons'>
                    <Link to= '/'> View Your Notes </Link>
                </button>
                <button className ='Note-buttons'>
                    <Link to= '/createnote'> +Create New Note </Link>
                </button>
            </div>

            <div className='Note-content'>
                <h1> Your Notes: </h1> 
                <div className= 'Note-notesDisplay'>
                    {props.note.map((note,index) => {
                        return <div key={index} className = 'Note-notes'> 
                            <Link to = { `/noteView/${note._id}`} >
                            <h3> {note.title} </h3>
                            <p> {note.body} </p>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}



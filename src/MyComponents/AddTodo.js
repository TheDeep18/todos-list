import React, { useState } from 'react';

export const AddTodo = ({addtodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setdesc] = useState("")

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert('Title or Description cannot be empty')
        }
        else{
        addtodo(title, desc);
        setTitle('')
        setdesc('')
        }

    }
    return (
        <div className= 'container my-3'>
        <h3 className='text-center'>Add a Todo </h3>
            <form onSubmit= {submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="my-2 form-control" id="title" aria-describedby="emailHelp" />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => {setdesc(e.target.value)}}className="my-2 form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-success btn-sm my-2">Add Todo</button>
            </form>
        </div>
    )
}

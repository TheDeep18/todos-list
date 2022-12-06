import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "20vh",
        width: "100%",
    }
    return (
        <footer className= "bg-dark text-light text-center py-3 my-3" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
           
        </footer>
    )
}


import React from 'react';


function Navigation(props) {
    return ( 

            <nav className="navbar nabvar-dark bg-dark">
             <a className=" text-white" href="">
                {props.titulo}
             </a>
            </nav>
    );
}

export default Navigation;

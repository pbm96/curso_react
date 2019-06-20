import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import {tareas} from './tareas.json';
import Formulario from './componentes/Formulario'

class App extends Component {
    constructor(){
        super();
        this.state = {
            tareas
        }
        this.handleAddTarea = this.handleAddTarea.bind(this);

    }
    handleAddTarea(tarea){
        this.setState({
            tareas:[...this.state.tareas, tarea]
        })
    }
    render(){

       const tareas =  this.state.tareas.map((tarea, i) => {
            return(
                <div className="col-md-3" key={i}>
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{tarea.titulo}</h3>
                        <span className="badge badge-pill badge-danger ml-2">{tarea.prioridad}</span>
                    </div>
                    <div className="card-body">
                        <p>{tarea.descripcion}</p>
                        <strong>{tarea.responsable}</strong>
                    </div>
                </div>
                </div>
                )
        })

         return ( 
                <div className = "App" >
                 <nav className=" navbar navbar-dark bg-dark">
                     <a href="" className="text-white">
                          Tareas
                          <span className="badge badge-pill badge-light ml-2">
                            {this.state.tareas.length}
                          </span>
                      </a>
                 </nav>
                <div className="container mt-3">
                    <div className="row">
                        <Formulario onAddTarea={this.handleAddTarea}/>
                    { tareas }
                    </div>
                </div>
                 
                 <img src = { logo } className = "App-logo" alt = "logo"  />

             </div>
         );
    }
}

export default App;
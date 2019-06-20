import React, {Component} from 'react';

class Formulario extends Component{
    constructor(){
        super();
        this.state = {
            titulo: '',
            responsable: '',
            descripcion: '',
            prioridad: 'baja',
            
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleInput(e){
        const { value, name} = e.target;
        this.setState({
            [name]:value
        })
        
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTarea(this.state);
    }

    render(){
        return(
            <div className="card col-md-3 mt-4">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="titulo" className="form-control" placeholder="titulo" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsable" className="form-control" placeholder="responsable" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="descripcion" className="form-control" placeholder="descripcion" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <select  name="responsable" className="form-control" onChange={this.handleInput}>
                            <option value="baja" default>baja</option>
                            <option value="media">media</option>
                            <option value="alta">alta</option>
                        </select>
                    </div>
                    <input type="submit" value="Guardar" className="btn btn-success"></input>
                </form>
            </div>
        )

        
    }
}
export default Formulario;
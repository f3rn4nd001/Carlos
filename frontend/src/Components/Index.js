import React, { Component } from 'react'
import axios from 'axios';
import './css/Index.css';
export default class Index extends Component {
state={
    users:[]
}

    async componentDidMount(){
        const res = await axios.get('http://localhost:3001/api/Usuarios');
        this.setState({users: res.data});
       
    }
    render() {
        return (
                <div class="row">  
                
                    <table class="modal-sm"id="table">
                        <thead class="buscador-contacto">
                       
                        </thead>
                       
                        <tbody  >
                        <tr class="header-tabla-contacto">
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>password</th>
                            <th>role</th>
                            <th>sexo</th>
                            <th>edad</th>
                            <th>telefono</th>
                            <th></th>
                            
                        </tr>

                        {this.state.users.map(user => (
                        <tr key={user._id}>
                                                   
                            <td ><img style={{width:"120px"}} src={user.img}/></td>
                            <td><div>{user.nombre}</div></td>
                            <td><div>{user.apellido}</div></td>
                            <td><div>{user.email}</div></td>
                            <td><div>{user.password}</div></td>
                            <td><div>{user.role}</div></td>
                            <td><div>{user.sexo}</div></td>
                            <td><div>{user.edad}</div></td>
                            <td><div>{user.telefono}</div></td>
                            <td><div style={{width:"250px"}}><input type="submit" value="editar"/> <input type="submit" value="eliminar"/></div></td>
                            <br/><br/>
                        </tr>
                        ))}
                    </tbody>
                   
                </table>
           
        
     
    </div> 
   
   
        )
    }
}

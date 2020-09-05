import React, { Component } from 'react'
import './css/Login.css';
import axios from 'axios';
import ReactFileReader from 'react-file-reader';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {users:[],
            nombre:'',apellido:'',email:'',password:'' ,password_conf:'',img:{},telefono:'',file: '',imagePreviewUrl: ''};
      }
  
   
    
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            
            imagePreviewUrl: reader.result
          });
        }
        
        reader.readAsDataURL(file)
      }
    
       
        onChangetelefono= (e) => {this.setState({telefono : e.target.value})}
        onChangeimg  = (e) => {this.setState({img : e.target.value})}
        onChangenombre = (e) => {this.setState({nombre : e.target.value})}
        onChangeapellido = (e) => {this.setState({apellido : e.target.value})}
        onChangeemail = (e) => {this.setState({email : e.target.value})}
        onChangepassword = (e) => {this.setState({password :e.target.value})}
        onChangepassword_conf= (e) => {this.setState({password_conf : e.target.value})}

        onSubmit= async e => {
            e.preventDefault();
           const res = await axios.post('http://localhost:3001/api/Usuarios',{
                nombre:this.state.nombre,
                apellido:this.state.apellido,
                email:this.state.email,
                password:this.state.password,
                password_conf:this.state.password_conf,
                img:this.state.imagePreviewUrl,
                telefono:this.state.telefono,
                
            })
            console.log(res);
          
        }
        
       

    render() {
        let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);}
        return (
            <div class="login-wrap">
	            <div class="login-html">                   
                    <div class="login-form">
                        
                        <form  onSubmit={this.onSubmit}>
                        <div class="group">
                                <label for="nombre" class="label">nombre</label>
                                <input id="nombre" name="nombre" onChange={this.onChangenombre} type="text" class="input"/>
                            </div>
                            <div class="group">
                                <label for="apellido" class="label">apellido</label>
                                <input id="apellido" name="apellido" onChange={this.onChangeapellido} type="text" class="input"/>
                            </div>
                            <div class="group">
                                <label for="email" class="label">email</label>
                                <input id="email" name="email" onChange={this.onChangeemail} type="text" class="input"/>
                            </div>
                            <div class="group">
                                <label for="password" class="label">password</label>
                                <input id="password" name="password" onChange={this.onChangepassword} type="text" class="input"/>
                            </div>
                       
                            <div class="group">
                                <label for="password_conf" class="label">password_conf</label>
                                <input id="password_conf" name="password_conf" onChange={this.onChangepassword_conf} type="text" class="input"/>
                               
                            </div>
                            <div class="group">
                                <label for="telefono" class="label">telefono</label>
                                <input id="telefono" name="telefono" onChange={this.onChangetelefono} type="text" class="input"/>
                               
                            </div>
                         
                         
                         
                         
                         
                         
                            <div class="group">
                                <div >
                                    <input className="fileInput" 
                                        type="file" 
                                        onChange={(e)=>this._handleImageChange(e)} />
                                   
                                    <div className="imgPreview">
                                    {$imagePreview}
                                    </div>
                                </div>
    
                            </div>
                           
                            <button  type="submit" >Guardar</button>
                        </form> 
                    </div>
                </div>
                
            </div>
                )
            }
        }

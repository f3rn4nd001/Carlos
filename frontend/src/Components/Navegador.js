import React, { Component } from 'react'
import './css/Navegador.css';
import {Link} from 'react-router-dom';
import Index from './Index';
import {  Route } from 'react-router-dom';
import Login from './Login';
export default class Navegador extends Component {
    
    render() {
        
        
        return (
            <html>
            <title>W3.CSS</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            
            <body >
              <div class="area"></div><nav class="main-menu">
                <ul>
                    <li class="has-subnav">
                        <a href="/index">
                            <i class="fa fa-home fa-2x"></i>
                            <span class="nav-text">Index</span>
                                
                            </a>
                      
                    </li>
                    <li class="has-subnav main-menu">
                        <a >
                            <i class="fa fa-laptop fa-2x"></i>
                            <span class="nav-text">
                                Stars Components
                            </span>
                        </a>
                        <div class="area2"></div>
                        <nav class="main-menu2 ">
                            <ul class="logout">
                                <li class="has-subnav main-menu">        
                                    <a href="/">
                                        <i class="fa fa-2x"></i>
                                        <span class="nav-text">
                                            notas
                                        </span>
                                    </a>
                                </li>
                                <li class="has-subnav main-menu"> 
                                    <a href="/chat">
                                        <i class="fa fa-2x"></i>
                                        <span class="nav-text">
                                           Chat
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li class="has-subnav ">
                        <a href="/foto/form">
                           <i class="fa fa-list fa-2x"></i>
                            <span class="nav-text">
                                Forms
                            </span>
                        </a>
                        
                    </li>
                    <li class="has-subnav">
                        <a href="#">
                           <i class="fa fa-folder-open fa-2x"></i>
                            <span class="nav-text">
                                Pages
                            </span>
                        </a>
                       
                    </li>
                    <li class="has-subnav ">
                        <a href="#">
                            <i class="fa fa-bar-chart-o fa-2x"></i>
                            <span class="nav-text">
                                Graphs and Statistics
                            </span>
                        </a>
                    </li>
                    <li class="has-subnav ">
                        <a href="#">
                            <i class="fa fa-font fa-2x"></i>
                            <span class="nav-text">
                               Quotes
                            </span>
                        </a>
                    </li>
                    <li class="has-subnav ">
                       <a href="#">
                           <i class="fa fa-table fa-2x"></i>
                            <span class="nav-text">
                                Tables
                            </span>
                        </a>
                    </li>
                    <li class="has-subnav ">
                       <a href="#">
                            <i class="fa fa-map-marker fa-2x"></i>
                            <span class="nav-text">
                                Maps
                            </span>
                        </a>
                    </li>
                    <li class="has-subnav ">
                        <a href="#">
                           <i class="fa fa-info fa-2x"></i>
                            <span class="nav-text">
                                Documentation
                            </span>
                        </a>
                    </li>
                </ul>
            
                <ul class="logout">
                    <li>
                       <a href="/">
                             <i class="fa fa-group fa-2x"></i>
                            <span class="nav-text">
                                Logout
                            </span>
                        </a>
                    </li>  
                </ul>
            </nav>
            
            <div class="container">
            <Route path="/index" component={Index}/>
            <Route path="/" exact component={Login} />
            </div>
            <nav class="menu">
              
              <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
              <label class="menu-open-button" for="menu-open">
                <span class="hamburger hamburger-1"></span>
                <span class="hamburger hamburger-2"></span>
                <span class="hamburger hamburger-3"></span>
            
              </label>
              
              <a href="#" class="menu-item"> <i class="fa fa-bar-chart"></i> </a>
              <a href="#" class="menu-item"> <i class="fa fa-plus"></i> </a>
              <a href="#" class="menu-item"> <i class="fa fa-heart"></i> </a>
              <a href="/chat" class="menu-item"> <i class="fa fa-envelope"></i> </a>
              <a href="#" class="menu-item"> <i class="fa fa-cog"></i> </a>
              <a href="#" class="menu-item"> <i class="fa fa-ellipsis-h"></i> </a>
              
            </nav>
            
            </body>
            </html>
        )
    }

}

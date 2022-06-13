import React from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Typography, Button,Breadcrumb } from 'antd';
import { Link} from 'react-router-dom';

function Head() {
  const { Header, Content, Footer } = Layout;
  const {Title} = Typography;
  
  return (  

    <div className="container-fluid">
      <div className="header">
      <div className="logo">
        <i className="fas fa-bolt"></i>
        <a style={{color: "white"}} href="www.google.com">Jumbox</a>
        </div>
      <Menu  theme="dark" mode="horizontal">
    <Link to="/">   <Menu.Item style={{color: "white"}}>Home</Menu.Item></Link>
    <Link to="/topmovies">   <Menu.Item style={{color: "white"}}>Top Rated Movies</Menu.Item></Link>
       <Link to="/topshows"><Menu.Item style={{color: "white"}}>Top Rates Tv Shows</Menu.Item></Link>
       <Menu.Item style={{color: "white"}}><Button>Login</Button></Menu.Item>
       <Menu.Item style={{color: "white"}}><Button>Register</Button></Menu.Item>
      
      </Menu>
      </div>
      </div>
  
  );
}

export default Head
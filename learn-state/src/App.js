import React, { Component } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader } from "@mui/material";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";

class App extends Component {
  

  
  render() {
    

    return (
      <>
        <NavBar />
        <Portfolio />
      </>
    );
  }
}

export default App;
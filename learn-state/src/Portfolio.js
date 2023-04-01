import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader } from "@mui/material";
export default class Portfolio extends Component {
    state = {
        person: {
          fullName: "Chiheb Dridi",
          bio: "chiheb here, 26 . Im not the most talkative guy, and prefer my work to do the talk. You can check my portfolio here (ideally you show them your work directly on the screen of your laptop, but if this is a job application you can just share with them a link to your portfolio). As you can see, I custom-coded a variety of websites, ranging from simple e-shops to complex platforms with a variety of functions. On some of these projects I worked alone, but on some I worked on a team and definitely enjoy teamwork. Except of my work, which is my greatest passion, I enjoy running and cycling. Honestly think it is important to balance the long hours we spend in front of a computer screen with some physical activity, and that’s exactly what I do in my leisure time. ",
          imgSrc: "img/pic.jpg",
          profession: "History Researcher"
        },
        show: false,
        mountTime: 0
      };
      
      componentDidMount() {
        setInterval(() => {
          this.setState({
            mountTime: this.state.mountTime + 1
          });
        }, 1000);
      }
      
      handleShow = () => {
        this.setState({
          show: !this.state.show
        });
      };
      
      render() {
        const { person, show, mountTime } = this.state;
        return (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
            <Card style={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar src={person.imgSrc} />}
                title={person.fullName}
                subheader={person.profession}
              />
              {show && (
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {person.bio}
                  </Typography>
                </CardContent>
              )}
              <Button onClick={this.handleShow} fullWidth>
                {show ? "Hide" : "Show"} Profile
              </Button>
              <CardContent>
                <Typography color="textSecondary">
                  Mounted {mountTime} seconds ago.
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      }}
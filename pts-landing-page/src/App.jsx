import React, { useState } from "react";
import { AnimationExample, ChartExample, SoundExample } from "./PtsExamples";
import "./App.css";
import "./highlight-github.css";
import { Paper, Container, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
// import SendIcon from '@mui/icons-material/Send';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemButton from '@mui/material/ListItemButton';

export default function App(props) {
  return (
    <div className="App" style={{ textAlign: "left" }}>
      <AnimationExample
        name="pts_anim"
        background="#5f5"
        play={true}
      />
      <div className="linkTree">
        <Paper>
          <Container fixed>
            <List sx={{ width: '900px', bgcolor: 'background.paper' }}>
              <ListItem button>
                <ListItemIcon>
                  {/* <InboxIcon /> */}
                </ListItemIcon>
                <ListItemText primary="Spotify" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  {/* <DraftsIcon /> */}
                </ListItemIcon>
                <ListItemText primary="Youtube" />
              </ListItem>
            </List>
          </Container>
        </Paper>
      </div>
    </div>
  );
}

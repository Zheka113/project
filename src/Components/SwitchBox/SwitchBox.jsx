import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Music from './ElemBox/MusicBox/Music';
import News from './ElemBox/NewsBox/News';
import Photo from './ElemBox/PhotoBox/Photo';
import Portfolio from './ElemBox/Portfolio/Portfolio';
import './SwitchBox.css';

function SwitchBox(){
    return (
      <div className="SwitchBox">
        <h1>SwitchBox</h1>
        <Switch>
          <Route path="/Portfolio"> <Portfolio/> </Route>
          
          <Route path="/Music"> <Music/> </Route>
        
          <Route path="/Photo"> <Photo/> </Route>

          <Route path="/News"> <News/> </Route>
        </Switch>
      </div>
    );
  }

export default SwitchBox;
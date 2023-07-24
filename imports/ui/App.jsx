import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Upload } from './Upload.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
    <Upload/>
  </div>
);

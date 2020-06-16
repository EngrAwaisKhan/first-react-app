import React from 'react';
import Name from './name.js';
import Roll from  './rollno.js';
import Class from './class.js';

function App() {
  return (
  <div>
      <h2>***Student Info***</h2>
    <Name Sname = "Muhammad Awais Khan"/>
    <Roll sroll = "12"/>
    <Class Sclass = "PIAIC_Bootcamp-class3"/>
  </div>
  )
}

export default App;

import React from 'react'
import Overview from './Overview';
import Content from './Content';
import './styles/layout.css';

function Layout() {
  return (
    <div id="mainPage">
      <div id='mainPageContainer'>
        <Overview/>
        <Content/>
      </div>
    </div>
  )
}

export default Layout

import React, {Component} from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Layout from './components/Layout'
injectTapEventPlugin();
render(
  <Layout/>,
  document.getElementById('root'))

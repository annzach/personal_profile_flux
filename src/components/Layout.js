//we have to always import React for JSX 
import React,{Component} from 'react';
import UserProfile from './UserProfile'
import ProfileBoard from './ProfileBoard'
export default class Layout extends Component {
  render(){
    return(
       <div className="container">
       <h1 className="text-center">Personal Profile</h1>
       <UserProfile/>
       <ProfileBoard/>
       </div>
      )
  }
}
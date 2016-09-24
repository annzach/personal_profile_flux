import React, {Component} from 'react'
import ProfileStore from '../stores/ProfileStore'
import ProfileActions from '../actions/ProfileActions'

export default class ProfileBoard extends Component{
  constructor(props){
    super(props);
    this.state = {
      profile: ProfileStore.getAll(),
      editId: 0
    }
      this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    ProfileStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    ProfileStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      profile:ProfileStore.getAll()
    })
  }
  editMe(){
    this.setState({
      editId: 1
    })
   
  }
  saveMe(){
    let {profile} = this.state.profile;
    let {nameEdit, imageurlEdit,bioEdit} =this.refs;
    let profileNew = {
      name:nameEdit.value,
      imageurl:imageurlEdit.value,
      bio:bioEdit.value
    }
    this.setState({editId: 0})
    ProfileActions.edit(profileNew);
  }

  render(){
    const profile= this.state.profile;
    const editId = this.state.editId;
    console.log('profile in board: ', profile)

    if(editId ===1){
      return (
        <div>
          <input type="text" ref="nameEdit" />
          <input type="text" ref="imageurlEdit" />
          <input type="text"  ref="bioEdit" />
          <div>
            <button onClick={()=> this.saveMe()}className="btn btn-success">Save</button>
            <button className="btn btn-success">Cancel</button>
          </div>
        </div>
        )

    } else if((editId === 0) && (profile.length !== 0 ) ){
    console.log("profile in profile container",profile);
    return (
       <div>
         <div>

         </div>
         <div className="col-md-4">
          <img src={profile[0].imageurl}  width="250 px" height=""/>
         </div>
         <div className ="col-md-8">
           <h3>Name: {profile[0].name}</h3>
           <h3>Biography: {profile[0].bio}</h3>
         </div>
          <div>
            <button onClick= {()=>this.editMe()}className="btn btn-warning">Edit</button>
          </div>
       </div>
      )
  }


  else{
    return(
      <div>
        <h1>
          Loading..
        </h1>
      </div>
      )
  }
 }
 
}

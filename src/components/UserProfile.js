//we have to always import React for JSX 
import React,{Component} from 'react';
import ProfileBoard from './ProfileBoard';
import ProfileActions from '../actions/ProfileActions'


export default class Sample extends Component {
  constructor(props){
    super(props);
    this._submitForm = this._submitForm.bind(this);
  }
  _submitForm(event){
    event.preventDefault();
    const {name,imageurl,bio} = this.refs;
    let profile ={
      name:name.value,
      imageurl:imageurl.value,
      bio:bio.value,
      id: 0
    }
    name.value='';
    imageurl.value='';
    bio.value='';
    ProfileActions.create(profile);

  }
  render(){
    return(
    <form onSubmit={this._submitForm}>
    <div className="form-group">
    <input type="text" className="form-control" ref="name"  placeholder="Name"/>
    </div>

    <div className="form-group">
    <input type="text" className="form-control" ref="imageurl" placeholder="Image url"/>
    </div>

    <div className="form-group">
    <input type="text" className="form-control" ref="bio" placeholder="Biography"/>
    </div>
    <button className="btn btn-success">Submit</button>
    </form>
 
     )
  }
}
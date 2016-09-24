import AppDispatcher from '../AppDispatcher'
import {EventEmitter} from 'events';

let _profile = [];

class ProfileStore extends EventEmitter{
  constructor(){
    super();
      AppDispatcher.register(action=>{

      switch(action.type){
        case 'PROFILE_CREATE':
        //let {profile} = action.profile; //check?????? same as below code.
        let profile = action.payload.profile;
        _profile.push(profile);
     
        this.emit('CHANGE');
        break;

        case 'PROFILE_EDIT':
        //let {profile} = action.profile; //check?????? same as below code.
        let profileNew = action.payload.profile;
        _profile[0]=profileNew;
        this.emit('CHANGE');
        break;

      }
      });
    }
  
  startListening(cb){
    this.on('CHANGE',cb);
  }
  stopListening(cb){
    this.removeListener('CHANGE',cb);
  }
  getAll(){
    return _profile;
  }

}

export default new ProfileStore();
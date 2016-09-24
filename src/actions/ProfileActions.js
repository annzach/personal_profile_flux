import AppDispatcher from  '../AppDispatcher'
const ProfileActions = {
  create(profile) {
    AppDispatcher.dispatch({
      type:"PROFILE_CREATE",
      payload:{
        profile:profile // {product}
        
      }
    })
 },

 edit(profile){
    AppDispatcher.dispatch({
      type:"PROFILE_EDIT",
      payload:{
        profile:profile // {product}
        
      }
    })
 }
}


export default ProfileActions;
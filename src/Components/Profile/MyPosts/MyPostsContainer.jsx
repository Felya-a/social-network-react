import { connect } from 'react-redux';
import { addPostActionCreator, onPostChengeActionCreator } from '../../../redux/profileReducer.js'
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return{
    profilePage: state.profilePage, // MyPosts перересуется только тогда, когда изменится это свойство
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText))
    },
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
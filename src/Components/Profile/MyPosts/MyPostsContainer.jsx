import { connect } from 'react-redux';
import { addPostActionCreator, onPostChengeActionCreator } from '../../../redux/profileReducer.js'
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return{
    posts: state.profilePage.posts, // MyPosts перересуется только тогда, когда изменится это свойство
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
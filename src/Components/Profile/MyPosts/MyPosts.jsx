import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { maxLengthCreator, required } from '../../../utils/validators/validators.js'
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLengthCreator10 = maxLengthCreator(10);

const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field cols="30" rows="3" component={Textarea} name='postText' validate={[required, maxLengthCreator10]} />
			<br />
			<button className={classes.submit} type="submit" >Отправить</button>
			<button className={classes.reset} type="reset" onClick={props.reset}>Очистить</button>
		</form>
	)
}

const MyPostsReduxForm = reduxForm({ form: 'post' })(PostForm)


// Классовая компоннета с защитой от избыточной перерисовки при инициализации
// class MyPosts extends React.PureComponent {

// 	render() {
// 		let postsElements = this.props.profilePage.posts.map(el => (<Post textPost={el.textPost} />));

// 		const onSubmit = (formData) => {
// 			this.props.addPost(formData.postText);
// 		}

// 		console.log('RENDER MYPOSTS');
// 		return (
// 			<div>
// 				<div className={classes.postsHeader} >My posts</div>
// 				<MyPostsReduxForm onSubmit={onSubmit} />
// 				<div className={classes.posts} >
// 					{postsElements}
// 				</div>
// 			</div>
// 		)
// 	}
// }

const MyPosts = React.memo((props) => { // неработает из-за сильной глубины изменяющихся значений в props (так думаю)

	let postsElements = props.posts.map(el => (<Post textPost={el.textPost} />));

	const onSubmit = (formData) => {
		props.addPost(formData.postText);
	}
	return (
		<div>
			<div className={classes.postsHeader} >My posts</div>
			<MyPostsReduxForm onSubmit={onSubmit} />
			<div className={classes.posts} >
				{postsElements}
			</div>
		</div>
	)
})

export default MyPosts;
// export default React.memo(MyPosts);
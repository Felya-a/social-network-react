import classes from './Post.module.css';


const Post = (props) => {
    return (
        <div className={classes.item}>
            {props.textPost}
        </div>
    )
}

export default Post;
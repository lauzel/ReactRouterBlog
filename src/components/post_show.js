import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';

class PostShow extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    render() {        
        const { post } = this.props;

        if(!post) {
            return <div> Loading </div>;
        }

        return (           
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts.post
    }
}

export default connect(mapStateToProps, { fetchPost , deletePost })(PostShow);
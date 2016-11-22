import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentWillMount(){
        this.props.fetchPost();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary" >
                        Ajouter un article
                    </Link>
                </div>               
                List of blogs posts
            </div>
        );
    }
}

export default connect(null, {fetchPost})(PostsIndex);
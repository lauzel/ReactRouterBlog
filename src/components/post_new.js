import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostNew extends Component {
    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
       
        return (
            <form onSubmit={handleSubmit(this.props.createPost)} >
                <h3>Créer un article</h3>
                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" className="form-control" {...title} />
                </div>
                 <div className="form-group">
                    <label>Catégories</label>
                    <input type="text" className="form-control" {...categories} />
                </div>
                 <div className="form-group">
                    <label>Contenu</label>
                    <textarea className="form-control" {...content} />
                </div>

                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>          
        );
    }
}

//connect : first argument is mapStateToProps 
//second : mapDispatchToProps 
//redux Form : 1st is form config , and same argument than connect
export default reduxForm({
    form: 'PostNew',
    fields: ['title', 'categories', 'content']
},null,{createPost})(PostNew);
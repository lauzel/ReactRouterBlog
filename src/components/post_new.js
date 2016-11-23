import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => { 
                //Blog post has been created , navigate the user to the index
                this.context.router.push('/');
             });
    }

    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
       
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Créer un article</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger': ''}`}>
                    <label>Titre</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error: ""}
                    </div>
                </div>
                 <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger': ''}`}>
                    <label>Catégories</label>
                    <input type="text" className="form-control" {...categories} />
                     <div className="text-help">
                        {categories.touched ? categories.error: ""}
                    </div>
                </div>
                 <div className={`form-group ${content.touched && content.invalid ? 'has-danger': ''}`}>
                    <label>Contenu</label>
                    <textarea className="form-control" {...content} />
                     <div className="text-help">
                        {content.touched ? content.error: ""}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Envoyer</button>
                <Link to="/" className="btn btn-danger">Annuler</Link>
            </form>      
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = "Entrez un titre";
    }

     if(!values.categories) {
        errors.categories = "Entrez une catégorie";
    }

     if(!values.content) {
        errors.content = "Entrez un contenu";
    }

    return errors;
}

//connect : first argument is mapStateToProps 
//second : mapDispatchToProps 
//redux Form : 1st is form config , and same argument than connect
export default reduxForm({
    form: 'PostNew',
    fields: ['title', 'categories', 'content'],
    validate
},null,{createPost})(PostNew);
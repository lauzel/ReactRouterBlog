import React, {Component} from 'react';
import { reduxForm } from 'redux-form';

class PostNew extends Component {
    render() {
        const { fields: { titre, categories, contenu }, handleSubmit } = this.props;
       
        return (
            <form onSubmit={handleSubmit} >
                <h3>Créer un article</h3>
                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" className="form-control" {...titre} />
                </div>
                 <div className="form-group">
                    <label>Catégories</label>
                    <input type="text" className="form-control" {...categories} />
                </div>
                 <div className="form-group">
                    <label>Contenu</label>
                    <textarea className="form-control" {...contenu} />
                </div>

                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>          
        );
    }
}

export default reduxForm({
    form: 'PostNew',
    fields: ['titre', 'categories', 'contenu']
})(PostNew);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    if(!this.props.post) {
      return <div>Loading...</div>;
    } else {
      const {title, categories, content} = this.props.post;

      return (
        <div>
          <h3>{title}</h3>
          <h6>Categories: {categories}</h6>
          <p>{content}</p>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  };
}

export default connect(mapStateToProps, {fetchPost})(PostsShow);

import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: '',
      postContent: '',
      postTag: '',
      postAuthor: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      postTitle: event.target.postTitle,
      postContent: event.target.postContent,
      postTag: event.target.postTag, 
    })
  }

  handleSubmit(event) {
    alert('A form was submitted');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          postTitle:
          <input type="text" value={this.state.postTitle} onChange={this.handleChange} />
        </label>
        <label>
          postContent:
          <input type="text" value={this.state.postContent} onChange={this.handleChange} />
        </label>
        <label>
          postTag:
          <input type="text" value={this.state.postTag} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PostForm;
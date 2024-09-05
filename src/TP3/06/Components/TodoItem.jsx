import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    const { task } = this.props;
    return <li>{task}</li>;
  }
}

TodoItem.propTypes = {
    task: PropTypes.string.isRequired
};

export default TodoItem;

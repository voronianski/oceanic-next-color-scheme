import React from 'react';

// This is comment...
class MyComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'World'
    };
  }

  componentDidMount() {
    console.log('MyComponent is mounted!');
  }

  clickHandler(title) {
    this.setState({ title });
  }

  render() {
    const { title } = this.state;

    return (
      <div>
        <h1>Hello, {title}!</h1>
        <button onClick={() => this.clickHandler('React')}>
          Change title
        </button>
      </div>
    );
  }
}

export default MyComponent;

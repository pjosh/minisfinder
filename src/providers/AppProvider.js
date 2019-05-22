import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagsSelected: [],
      toggleTagSelected: this.toggleTagSelected
    };
  }

  toggleTagSelected = tagId => {
    const { tagsSelected: currentTagsSelected } = this.state;
    let tagsSelected = [...currentTagsSelected];

    if (tagsSelected.includes(tagId)) {
      tagsSelected = tagsSelected.filter(item => item !== tagId);
    } else {
      tagsSelected.push(tagId);
    }
    this.setState({ tagsSelected });
  };

  render() {
    const { children } = this.props;
    return <AppContext.Provider value={this.state}>{children}</AppContext.Provider>;
  }
}

export const withAppContext = WrappedComponent => {
  const withHOC = props => {
    return (
      <AppContext.Consumer>
        {context => <WrappedComponent {...props} context={context} />}
      </AppContext.Consumer>
    );
  };
  withHOC.WrappedComponent = WrappedComponent;
  return withHOC;
};

export default AppProvider;

import React from 'react'

const getDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});

const ResizeContext = React.createContext(getDimensions());

class ResizeProvider extends React.PureComponent {
  state = getDimensions();
  
  // you might want to debounce or throttle the event listener
  eventListener = () => this.setState(getDimensions());

  componentDidMount() {
    window.addEventListener('resize', this.eventListener);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.eventListener);
  }
  
  render() {
    return (
      <ResizeContext.Provider value={this.state}>
      {
        this.props.children
      }
      </ResizeContext.Provider>
    );
  }
}

const withResize = (Component) => (props) => (
  <ResizeContext.Consumer>
  {({ width, height }) => (
    <Component {...props} width={width} height={height} />
  )}
  </ResizeContext.Consumer>
);
  
export {ResizeProvider, withResize}  
// const ShowSize = withResize(({ width, height }) => (
//   <div>
//     <div>Width: {width}</div>
//     <div>Height: {height}</div>
//   </div>
// ));

// const Demo = () => (
//   <ResizeProvider>
//     <ShowSize />
//   </ResizeProvider>
// );

// ReactDOM.render(
//   <Demo />,
//   demo
// );
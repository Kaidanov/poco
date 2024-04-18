(function(global) {
    const React = global.React;
    const ExternalComponent = () => <div>Hello from External Component!</div>;
  
    // Expose the component to the global scope
    global.MyExternalComponent = ExternalComponent;
  })(window);
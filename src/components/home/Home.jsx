import React from "react";

function Home() {
  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ color: "green" }}>Home Component</h2>
      <br />
      <p>
        React's component-based architecture allows developers to build reusable
        UI components. This modular approach promotes reusability,
        maintainability, and makes the codebase more manageable.React uses a
        virtual DOM to enhance performance. When the state of an object changes,
        React first updates the virtual DOM, then it compares the virtual DOM
        with a snapshot taken before the update. This process, called
        "reconciliation," ensures that only the necessary parts of the actual
        DOM are updated, leading to faster and more efficient updates.React's
        declarative approach makes it easier to reason about and manage the UI.
        Developers describe how the UI should look for a given state, and React
        handles the rendering, ensuring the UI remains consistent with the
        state.React has a large and active community, which means plenty of
        tutorials, tools, libraries, and frameworks are available. The ecosystem
        around React, including Redux for state management and React Router for
        navigation, is robust and continually growing.
      </p>
      <br />
      <p>
        React Router is a standard library for routing in React. It enables the
        navigation between different views or components in a React application,
        allowing developers to build single-page applications with navigation
        without refreshing the whole page. React Router provides a declarative,
        component-based approach to handle the application's routing, making it
        easier to manage and understand.
      </p>
    </div>
  );
}

export default Home;

### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React Router is a library for managing navigation in React applications.

- What is a single page application?

A Single Page Application (SPA) is a type of web application that dynamically updates the content of a single web page rather than loading entire new pages from the server.

- What are some differences between client side and server side routing?

Client-side routing:
Routing is handled entirely on the client (browser) using JavaScript.
The URL changes without sending a request to the server, and the content is dynamically updated on the client.
Server-side routing:
Routing is handled by the server. Each new URL sends a request to the server, which responds with a complete HTML page.

- What are two ways of handling redirects with React Router? When would you use each?
  <Navigate /> component:
  Use this when you need to redirect the user based on a condition (e.g., authentication).
  useNavigate hook:
  Use this method when you want to trigger a redirect in response to an event (e.g., after a form submission or button click).

- What are two different ways to handle page-not-found user experiences using React Router?
  Route with a path="_":
  You can define a route that matches any URL that doesn’t match your predefined routes by using path="_"
  Conditional redirects:
  You can programmatically redirect users to a 404 page when a specific condition isn’t met

- How do you grab URL parameters from within a component using React Router?
  can use the useParams hook to access the parameters from the URL

- What is context in React? When would you use it?
  Context in React provides a way to pass data through the component tree without manually passing props at every level.
  Use context when need to make global data (like authentication state or theme) available to multiple components without prop drilling.

- Describe some differences between class-based components and function
  components in React.
  Class-based components:
  Use the class keyword and extend React.Component.
  They have access to lifecycle methods like componentDidMount, componentDidUpdate, etc.
  State is managed via this.state and updated via this.setState

Function components:
Use plain JavaScript functions and are simpler and easier to write.
With hooks (e.g., useState, useEffect), function components can now manage state and use lifecycle-like methods.

- What are some of the problems that hooks were designed to solve?
  Simpler state management: Hooks allow function components to manage state without the need for class components, making the code easier to read and maintain.
  Code reuse: Hooks provide a way to reuse stateful logic (via custom hooks) without duplicating code or using higher-order components or render props.
  Cleaner lifecycle management: Instead of dealing with complex lifecycle methods in class components, hooks like useEffect allow developers to manage side effects and subscriptions more cleanly.
  Encouraging functional programming: Hooks encourage the use of function components and the benefits of functional programming (statelessness, immutability).

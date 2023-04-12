import React from 'react';

const Blog = () => {
     return (
          <div className='mt-5 pt-5'>
               <h1 className='py-lg-5 text-center'>Question Answer</h1>
               <div className='my-5 container'>
                    <div className="accordion" id="accordionExample">
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                   <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        When is the Context API used?
                                   </button>
                              </h2>
                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <strong>Context API </strong>
                                        is typically used in scenarios where multiple components need to access the same data or functionality, such as theming, localization, or authentication. It allows developers to avoid "prop drilling" - the process of passing props down through multiple levels of nested components - which can be cumbersome and error-prone.
                                        To use the Context API, you create a context object using the React.createContext() method, which returns an object with a Provider component and a Consumer component. The Provider component wraps the components that need to access the shared data, and the Consumer component is used to consume the data in those components.
                                        the Context API can be a powerful tool for managing state in React applications, especially in situations where multiple components need to access the same data or functionality. <br />
                                   </div>
                              </div>
                         </div>
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingTwo">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What is Custom Hook?
                                   </button>
                              </h2>
                              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <strong>Custom Hook </strong>
                                        is a JavaScript function that starts with the prefix use and allows you to reuse stateful logic between components without duplicating code. Custom hooks allow you to abstract complex logic into a reusable function that can be called from multiple components, making your code more modular and easier to maintain.

                                        Custom hooks can be used to encapsulate logic such as data fetching, event listeners, and other side effects. They can also be used to abstract away common patterns in component logic, such as handling form data or managing component state.
                                        To create a custom hook, you simply create a JavaScript function that uses React's built-in useState, useEffect, and other hooks as needed. You can then export this function and use it in your components as you would any other hook.
                                   </div>
                              </div>
                         </div>
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingThree">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What is useRef?
                                   </button>
                              </h2>
                              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <strong>useRef </strong>
                                        is a hook that returns a mutable ref object that can be used to store a value that persists between renders. Unlike useState, changes to a useRef value do not trigger a re-render.

                                        useRef is often used to reference DOM elements or other mutable values in functional components. When used with a DOM element, useRef allows you to access the element's properties and methods, such as value and focus, without the need for callbacks or event handlers.
                                        useRef is a useful hook in React for storing mutable values that need to persist between renders, and for referencing DOM elements in functional components.
                                   </div>
                              </div>
                         </div>
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingFour">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        What is useMemo?
                                   </button>
                              </h2>
                              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <strong>useMemo </strong>
                                        is a hook that allows you to memoize the result of a function call and only recompute it when its dependencies have changed. This can be used to optimize performance by avoiding unnecessary recomputations of expensive functions.

                                        The useMemo hook takes two arguments: a function that returns the value to be memoized, and an array of dependencies. The value returned by the function will only be recomputed when one or more of the dependencies have changed.
                                        useMemo is a useful hook in React for optimizing performance by memoizing the result of expensive functions and avoiding unnecessary recomputations. However, it's important to use useMemo judiciously and only when necessary, as overuse can lead to code that's harder to understand and maintain.
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Blog;
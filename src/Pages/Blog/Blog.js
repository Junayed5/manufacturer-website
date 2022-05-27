import React from 'react';

const Blog = () => {
    return (
        <div>
            <p className='text-xl font-bold'>1.How will you improve the performance of a React Application?</p>
            <p>ans:1.Keeping component state local where necessary,<br />
                2.Memoizing React components to prevent unnecessary re-renders,<br />
                3.Code-splitting in React using dynamic import(),<br />
                4.Windowing or list virtualization in React,<br />
                5Lazy loading images in React.</p>
            <p className='text-xl font-bold'>2.What are the different ways to manage a state in a React application?</p>
            <p>ans:1.Local state. <br />
                2.Global state. <br />
                3.Server state. <br />
                4.URL state</p>
            <p className='text-xl font-bold'>3.How does prototypical inheritance work?</p>
            <p>ans:The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
            <p className='text-xl font-bold'>4.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
            <p>ans: First i map all product and set input field .when search a product I set onchange for every product name then i got it.</p>
            <p className='text-xl font-bold'>5.What is a unit test? Why should write unit tests?</p>
            <p>ans:Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
        </div>
    );
};

export default Blog;
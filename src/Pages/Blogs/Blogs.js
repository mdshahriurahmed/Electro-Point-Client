import React from 'react';
import { Table } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container gap'>
            <h1 className='text-white text-center mt-5'>Blogs</h1>

            <div className='tableshadow'>
                <h4 className="  text-white mb-3 mt-1">
                    1. Difference between JavaScript vs NodeJs.
                </h4>
                <div>
                    <Table className='text-white tabledesign' responsive size="sm">
                        <thead>
                            <tr className='text-center t-color'>
                                <th>JavaScript</th>
                                <th>NodeJs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>
                                    Javascript is a computer language that may be used to create website scripts.
                                </td>
                                <td>
                                    NodeJS is a runtime environment for Javascript.
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Javascript is only available in browsers.
                                </td>
                                <td>
                                    With the help of NodeJS, we can run Javascript outside of the browser.
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    It's mostly used on the client's end.
                                </td>
                                <td>
                                    It's primarily utilized on the server.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Javascript has the ability to add HTML and manipulate the DOM.
                                </td>
                                <td>
                                    Nodejs does not support the addition of HTML tags.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Javascript can run in any browser engine, such as Safari's JS core and Firefox's Spidermonkey.
                                </td>
                                <td>
                                    Node's Javascript engine is called V8. js that parses Javascript and executes it.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    In frontend development, Javascript is used.
                                </td>
                                <td>
                                    In server-side development, Nodejs is employed.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className='tableshadow text-white'>
                <h4 className="   mb-3 mt-1">
                    2. When should you use nodejs and when should you use mongodb?
                </h4>
                <hr className='t-color ' />
                <div>
                    <p>The Document Oriented Database is MongoDB. JSON format is used by MongoDB to store a lot of data. MongoDB is significantly faster than any RDBMS. MongoDB is built to handle large amounts of data. MongoDB is a multi-server database. MongoDB is capable of handling a huge number of access requests with ease. In programming, there are two design patterns. Asynchronous and synchronous programming are the two types of programming. The Asynchronous pattern is used by default in Node JS. That is, it does not await the completion of a task. Meanwhile, NodeJS created a new project. We use nodeJS for this reason.</p>
                </div>
            </div>

            <div className='tableshadow'>
                <h4 className="  text-white mb-3 mt-1">
                    3. Differences between sql and nosql databases.
                </h4>
                <div>
                    <Table className='text-white tabledesign' responsive size="sm">
                        <thead>
                            <tr className='text-center t-color'>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>
                                    SYSTEM FOR MANAGING RELATIONAL DATABASES (RDBMS)
                                </td>
                                <td>
                                    A distributed or non-relational database system.
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    These databases have a predefined or fixed schema.
                                </td>
                                <td>
                                    They have a flexible schema.
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    These databases are not designed to store hierarchical data.
                                </td>
                                <td>
                                    These databases are great for storing hierarchical data.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Scalable vertically
                                </td>
                                <td>
                                    Scalable from the top down
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Complex queries are best served by these databases.
                                </td>
                                <td>
                                    Complex queries are not well served by these databases.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ACID property is followed.
                                </td>
                                <td>
                                    CAP is followed (consistency, availability, partition tolerance)
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>

    );
};

export default Blogs;
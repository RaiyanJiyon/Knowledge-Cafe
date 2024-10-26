import PropTypes from 'prop-types';
import {useState, useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then((response) => response.json())
        .then((jsonData) => setBlogs(jsonData))
    },[])
    return (
        <div className="md:w-[70%]">
            {
                blogs.map((blog) => (
                    <Blog key={blog.id} blog={blog} handleReadingTime={handleReadingTime}></Blog>
                )) 
            }
        </div>
    );
};

Blogs.propTypes = {
    handleReadingTime: PropTypes.func.isRequired
}

export default Blogs;
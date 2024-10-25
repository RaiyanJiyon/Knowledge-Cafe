import {useState, useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then((response) => response.json())
        .then((jsonData) => setBlogs(jsonData))
    },[])
    return (
        <div className="w-[70%]">
            {
                blogs.map((blog) => (
                    <Blog key={blog.id} blog={blog}></Blog>
                )) 
            }
        </div>
    );
};

export default Blogs;
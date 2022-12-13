import React from 'react'
import './style.css'
import BlogItem from './BlogItem'

const BlogList = ({ blogs }) => (
    <div className='blogList-wrap'>
        {blogs.map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
        ))}
    </div>
)

export default BlogList
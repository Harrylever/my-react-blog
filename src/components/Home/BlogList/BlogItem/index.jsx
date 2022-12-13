import React from 'react'
import { Link } from 'react-router-dom'
import Chip from '../../../common/Chip'
import './style.css'

const BlogItem = ({ 
    blog:{
        id, 
        description, 
        title, 
        createdAt, 
        authorName, 
        authorAvatar, 
        category, 
        cover, 
    },
}) => (
    <div className='blogItem_wrap'>
        <img src={cover} alt="cover" className='blogItem_cover' />
        <Chip label={category} />
        <h3>{title}</h3>
        <p className='blogItem_desc'>{description}</p>

        <footer>
            <div className="blogItem_author">
                <img src={authorAvatar} alt="avatar" />
                <div>
                    <h6>{authorName}</h6>
                    <p>{createdAt}</p>
                </div>
            </div>
            <Link className='blogItem_link' to={`/blog/${id}`}> &gt; </Link>
        </footer>
    </div>
)

export default BlogItem;
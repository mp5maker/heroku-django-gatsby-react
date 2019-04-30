import React from 'react'

import Card from 'react-bootstrap/Card'

import './blog-details.scss'

const BlogDetails = ({title, author, date}) => (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>
                { title }
            </Card.Title>
            <Card.Text>
                <span>
                    Author: { author }
                </span>
                <span>
                    Date: { date }
                </span>
            </Card.Text>
        </Card.Body>
    </Card>
)

export default BlogDetails
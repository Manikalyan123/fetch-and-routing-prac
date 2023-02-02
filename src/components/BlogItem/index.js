// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogItem} = this.props
    const {id, title, imageUrl, avatarUrl, author, topic} = blogItem
    return (
      <li className="listOrder">
        <Link to={`/blogs/${id}`}>
          <div className="blog-item-container">
            <img className="blog-item-image" src={imageUrl} alt={`item${id}`} />
            <div className="blog-item-info">
              <p className="blog-item-topic">{topic}</p>
              <h1 className="blog-item-title">{title}</h1>
              <div className="author-info">
                <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
                <p className="author-name">{author}</p>
              </div>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}
export default BlogItem

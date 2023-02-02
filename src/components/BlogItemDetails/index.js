// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {list: {}, isLoading: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      title: data.title,
      content: data.content,
      author: data.author,
    }
    console.log(updatedData)
    this.setState({list: updatedData, isLoading: false})
  }

  render() {
    const {list, isLoading} = this.state
    const {imageUrl, avatarUrl, title, content, author} = list
    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div>
            <h1 className="blog-details-title">{title}</h1>
            <div className="author-details">
              <img className="author-pic" src={avatarUrl} alt={author} />
              <p className="details-author-name">{author}</p>
            </div>
            <img className="blog-image" src={imageUrl} alt={title} />
            <p className="blog-content">{content}</p>)
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails

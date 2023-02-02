// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {list: [], isLoading: true}

  componentDidMount = () => {
    this.BlogsList()
  }

  BlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    console.log(updatedData)
    this.setState({list: updatedData, isLoading: false})
  }

  render() {
    const {list, isLoading} = this.state
    return (
      <div>
        <ul className="unOrderList">
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            list.map(each => <BlogItem key={each.id} blogItem={each} />)
          )}
        </ul>
      </div>
    )
  }
}

export default BlogList

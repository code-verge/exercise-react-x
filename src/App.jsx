import './App.css'
import Post from './components/Post'
import NewPost from './components/NewPost'

const posts = [
  {
    id: 1,
    avatar: '/avatar.png',
    username: 'CodevergeHQ',
    name: 'Codeverge',
    verified: true,
    postedAt: '21h',
    content: 'There are some really amazing up and coming developers in the making here at Codeverge.',
    comments: 62,
    retweets: 5,
    likes: 311,
  },
  {
    id: 2,
    avatar: '/avatar.png',
    username: 'CodevergeHQ',
    name: 'Codeverge',
    verified: true,
    postedAt: '6h',
    content: 'You can learn more about our team and what we do at Codeverge by visiting our website.',
    comments: 4,
    retweets: 8,
    likes: 10,
  },
  {
    id: 3,
    avatar: '/avatar.png',
    username: 'CodevergeHQ',
    name: 'Codeverge',
    verified: true,
    postedAt: '1h',
    content: 'We are always looking for new professionals who are passionate and are looking to make a change in their career.',
    comments: 0,
    retweets: 0,
    likes: 0,
  }
]


function App() {
  return (
    <>
      <NewPost />
      <Post />
    </>
  )
}

export default App

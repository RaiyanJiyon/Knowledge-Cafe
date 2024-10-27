import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [readingTime, setReadingTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  const handleReadingTime = (time) => {
    setReadingTime((prevTime) => prevTime + time);
  }

  const handleBookmark = (title) => {
    if (!bookmarks.includes(title)) {
      setBookmarks((prevBookmarks) => [...prevBookmarks, title])
    }
  }

  return (
    <>
      <Header></Header>

      <main className='flex flex-col-reverse md:flex-row gap-6 w-11/12 mx-auto'>
        <Blogs handleReadingTime={handleReadingTime} handleBookmark={handleBookmark}></Blogs>
        <Bookmark readingTime={readingTime} bookmarks={bookmarks}></Bookmark>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App

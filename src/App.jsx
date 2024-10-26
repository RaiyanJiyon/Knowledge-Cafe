import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {
  const [readingTime, setReadingTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  const handleReadingTime = (time) => {
    const totalTime = readingTime + time;
    setReadingTime(totalTime);
  }

  const handleBookmark = (title) => {
    if (!bookmarks.includes(title)) {
      setBookmarks([...bookmarks, title]);
    }
  }

  return (
    <>
      <Header></Header>

      <main className='flex flex-col-reverse md:flex-row gap-6 w-11/12 mx-auto mb-10'>
        <Blogs handleReadingTime={handleReadingTime} handleBookmark={handleBookmark}></Blogs>
        <Bookmark readingTime={readingTime} bookmarks={bookmarks}></Bookmark>
      </main>
    </>
  )
}

export default App

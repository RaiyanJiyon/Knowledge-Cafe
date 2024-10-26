import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {
  const [readingTime, setReadingTime] = useState(0);

  const handleReadingTime = (time) => {
    console.log('Reading Time Added', time);
    const totalTime = readingTime + time;
    setReadingTime(totalTime);
    console.log(totalTime);
  }

  return (
    <>
      <Header></Header>

      <main className='flex flex-col md:flex-row gap-6 w-11/12 mx-auto mb-10'>
        <Blogs handleReadingTime={handleReadingTime}></Blogs>
        <Bookmark readingTime={readingTime}></Bookmark>
      </main>
    </>
  )
}

export default App

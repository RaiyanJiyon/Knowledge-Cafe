import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>

      <main className='flex flex-col md:flex-row gap-6 w-11/12 mx-auto mb-10'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </main>
    </>
  )
}

export default App

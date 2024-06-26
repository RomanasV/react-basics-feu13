import HuddlePage from './pages/HuddlePage/HuddlePage'
import Testimonials from './pages/TestimonialsPage/Testimonials'
import NewsPage from './pages/NewsPage/NewsPage'
import { Link, Route, Routes } from 'react-router-dom'
import PageHeader from './components/PageHeader/PageHeader'
import CounterPage from './pages/CounterPage/CounterPage'
import CitiesPage from './pages/CitiesPage/CitiesPage'
import CarsPage from './pages/CarsPage/CarsPage'
import TodoPage from './pages/TodoPage/TodoPage'
import ChuckPage from './pages/ChuckPage/ChuckPage'
import DogsPage from './pages/DogsPage/DogsPage'
import AIPage from './pages/AIPage/AIPage'
import HomePage from './pages/apiProject/HomePage/HomePage'
import PostsPage from './pages/apiProject/PostsPage/PostsPage'
import UsersPage from './pages/apiProject/UsersPage/UsersPage'
import AlbumsPage from './pages/apiProject/AlbumsPage/AlbumsPage'
import PostPage from './pages/apiProject/PostPage/PostPage'
import UserPage from './pages/apiProject/UserPage/UserPage'
import AlbumPage from './pages/apiProject/AlbumPage/AlbumPage'
import CreatePost from './pages/CreatePost/CreatePost'
import EditPostPage from './pages/EditPostPage/EditPostPage'
import { API_URL } from './config'
import CreateUserPage from './pages/apiProject/CreateUserPage/CreateUserPage'
import CreateAlbumPage from './pages/apiProject/CreateAlbumPage/CreateAlbumPage'
import EditUserPage from './pages/apiProject/EditUserPage/EditUserPage'
import StylingPage from './pages/StylingPage/StylingPage'

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ChildrenProp from './pages/ChildrenProp/ChildrenProp'

const App = () => {
  const notify = () => {
    toast('Labas', {})
  }

  return (
    <>
      <PageHeader />

      <button onClick={notify}>Click</button>
      

      <Routes>
        <Route path='/' element={<h1>Hello world</h1>} />
        <Route path='/styling' element={<StylingPage />} />
        <Route path='/huddle' element={<HuddlePage />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/codeacademy' element={<h1>Code Academy page</h1>} />
        <Route path='/codeacademy/news' element={<NewsPage />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/cities' element={<CitiesPage />} />
        <Route path='/cars' element={<CarsPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/api/chuck' element={<ChuckPage />} />
        <Route path='/api/dogs' element={<DogsPage />} />
        <Route path='/api/ai' element={<AIPage />} />
        <Route path='/api-project/' element={<HomePage />} />
        <Route path='/children-prop/' element={<ChildrenProp />} />

        <Route path='/api-project/posts' element={<PostsPage />} />
        <Route path='/api-project/users' element={<UsersPage />} />
        <Route path='/api-project/albums' element={<AlbumsPage />} />

        <Route path='/api-project/posts/:id' element={<PostPage />} />
        <Route path='/api-project/users/:id' element={<UserPage />} />
        <Route path='/api-project/albums/:id' element={<AlbumPage />} />

        <Route path='/api-project/create-post' element={<CreatePost />} />
        <Route path='/api-project/create-user' element={<CreateUserPage />} />
        <Route path='/api-project/create-album' element={<CreateAlbumPage />} />

        <Route path='/api-project/edit-post/:id' element={<EditPostPage />} />
        <Route path='/api-project/edit-user/:id' element={<EditUserPage />} />
        {/* <Route path='/api-project/edit-album/:id' element={<EditPostPage />} /> */}

        <Route path='*' element={
          <div>
            <h1>404: Page not found</h1>
            <Link to="/">Go back to home page</Link>
          </div>
        } />
      </Routes>

      <ToastContainer position="bottom-right" />
    </>
  )
}

export default App

















const updateCommentHandler = async (commentData) => {
  const res = await fetch(`${API_URL}/comments/${commentData.id}`, {
    method: 'PUT',
    body: JSON.stringify(commentData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  const updatedComment = await res.json()
  console.log(updatedComment)
}









const updateAlbumHandler = async (albumData) => {
  const res = await fetch(`${API_URL}/albums/${albumData.id}`, {
    method: 'PUT',
    body: JSON.stringify(albumData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  const updatedAlbum = await res.json()
  console.log(updatedAlbum)
}







const updatePhotoHandler = async (photoData) => {
  const res = await fetch(`${API_URL}/photos/${photoData.id}`, {
    method: 'PUT',
    body: JSON.stringify(photoData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  const updatedPhoto = await res.json()
  console.log(updatedPhoto)
}

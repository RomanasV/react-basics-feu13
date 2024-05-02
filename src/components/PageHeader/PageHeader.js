import { NavLink } from 'react-router-dom'
import './PageHeader.css'

const PageHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/api-project">API project</NavLink>

            <ul>
              <li>
                <NavLink to="/api-project">Home</NavLink>
              </li>
              <li>
                <NavLink to="/api-project/posts">Posts</NavLink>

                <ul>
                  <li>
                    <NavLink to="/api-project/create-post">Create Post</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/api-project/users">Users</NavLink>

                <ul>
                  <li>
                    <NavLink to="/api-project/create-user">Create User</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/api-project/albums">Albums</NavLink>

                <ul>
                  <li>
                    <NavLink to="/api-project/create-album">Create Album</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/styling">Styling</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/cities">Cities</NavLink>
          </li>
          <li>
            <NavLink to="/todo">Todo</NavLink>
          </li>
          <li>
            <NavLink to="/cars">Cars</NavLink>
          </li>
          <li>
            <NavLink to="/huddle">Huddle</NavLink>
          </li>
          <li>
            <NavLink to="/testimonials">Testimonials</NavLink>
          </li>
          <li>
            <NavLink to="/api">API</NavLink>

            <ul>
              <li>
                <NavLink to="/api/chuck">Chuck</NavLink>
              </li>
              <li>
                <NavLink to="/api/dogs">Dogs</NavLink>
              </li>
              <li>
                <NavLink to="/api/ai">AI</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/codeacademy">Code Academy</NavLink>

            <ul>
              <li>
                <NavLink to="/codeacademy/news">News</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default PageHeader
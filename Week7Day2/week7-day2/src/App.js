import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from 'react-router-dom';

const BlogPosts = {
  '1': {
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.',
  },
  '2': {
    title: 'Second Blog Post',
    description: 'Hello React Router v6',
  },
};

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function Posts() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
}

function PostLists() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug}>
          <Link to={`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Post() {
  const { slug } = useParams();
  const post = BlogPosts[slug];

  if (!post) {
    return (
      <div style={{ padding: '20px' }}>
        <h3>Post not found</h3>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav style={{ margin: '10px' }}>
          <Link to="/" style={{ padding: '5px' }}>
            Home
          </Link>
          <Link to="/about" style={{ padding: '5px' }}>
            About
          </Link>
          <Link to="/posts" style={{ padding: '5px' }}>
            Posts
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />}>
            <Route index element={<PostLists />} />
            <Route path=":slug" element={<Post />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
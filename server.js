import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let posts = [];

// Show all posts (home page)
app.get('/', (req, res) => {
  console.log('Home page accessed. Total posts:', posts.length);
  res.render('index', { title: 'Home Page', posts: posts });
});

// Show create form
app.get('/new', (req, res) => {
  console.log('Create form accessed');
  res.render('new', { title: 'Create New Post' });
});

// Handle create form submission
app.post('/create', (req, res) => {
  console.log('Form submitted:', req.body);
  const newPost = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content, 
    author: req.body.author
  };
  posts.push(newPost);
  console.log('Post added. Total posts:', posts.length);
  res.redirect('/');
});

// View individual post with full content
app.get('/post/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  console.log('Viewing post ID:', postId);
  
  const post = posts.find(p => p.id === postId);
  
  if (post) {
    res.render('post', { post: post });
  } else {
    console.log('Post not found');
    res.redirect('/');
  }
});

// Show edit form with existing post data
app.get('/edit/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  console.log('Edit page accessed for post ID:', postId);
  
  const post = posts.find(p => p.id === postId);
  
  if (post) {
    res.render('edit', { post: post });
  } else {
    console.log('Post not found');
    res.redirect('/');
  }
});

// Handle edit form submission
app.post('/update/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  console.log('Update requested for post ID:', postId);
  console.log('New data:', req.body);
  
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex !== -1) {
    posts[postIndex] = {
      id: postId,
      title: req.body.title,
      author: req.body.author,
      content: req.body.content
    };
    console.log('Post updated successfully');
  }
  
  res.redirect('/');
});

// Handle delete request
app.post('/delete/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  console.log('Delete requested for post ID:', postId);
  
  const initialLength = posts.length;
  posts = posts.filter(p => p.id !== postId);
  const finalLength = posts.length;
  
  console.log(`Deleted ${initialLength - finalLength} post(s)`);
  console.log('Remaining posts:', finalLength);
  
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:3000`);
});

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.render('signup', { title: 'Sign Up' });
  });
  
  

app.get('/signup', (req, res) => {
    res.render('signup', { title: 'Sign Up' });
  });
  
  app.post('/signup', (req, res) => {
    // Handle signup logic here
    res.redirect('/login');
  });

  app.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
  });
  
  app.post('/login', (req, res) => {
    // Handle login logic here
    res.redirect('/');
  });
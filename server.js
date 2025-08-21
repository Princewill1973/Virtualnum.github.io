const express = require('express');
const path = require('path');
const { render } = require('express/lib/response');

const app = express();
const PORT = process.env.PORT || 10000;

// Set up the view engine (e.g., EJS, Pug, or Handlebars). Here we use EJS as example.
app.set("views", path.join(__dirname, ".../views"));
app.set("view engine", "ejs");

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Example route that uses render
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', message: 'Welcome to Rendered Express App!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
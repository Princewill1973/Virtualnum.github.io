const express = require('express');
const path = require('path');
const { render } = require('express/lib/response');

const app = express();
const PORT = process.env.PORT || 10000;

// Set up the view engine (e.g., EJS, Pug, or Handlebars). Here we use EJS as example.
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');
app.use(express.static("public")); // for css/js if needed
app.use(express.static("public")); // for css/js if needed

// Sample numbers data
const numbers = [
  { country: "🇺🇸", phone: "+1 202 555 0198", desc: "Free US virtual number.", link: "https://smstome.com" },
  { country: "🇬🇧", phone: "+44 7911 123456", desc: "Free UK virtual number.", link: "https://receive-smss.com" },
  { country: "🇨🇦", phone: "+1 647 555 5678", desc: "Free Canada virtual number.", link: "https://sms24.me" }
// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Example route that uses render
app.get("/", (req, res) => {
  res.render("index", { numbers }); // 👈 pass numbers to EJS
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

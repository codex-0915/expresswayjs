const express = require('express');
const path = require('path');
const { sequelize } = require('./expressway/core/model');

const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
});

// Load routes
const homeRoutes = require('./app/routes/homeRoutes');
app.use('/', homeRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Expressway running on http://localhost:${PORT}`);
});

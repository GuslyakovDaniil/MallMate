const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nav',
  password: 'mysql',
  port: 5432,
});

app.use(express.static('public')); // Папка для статических файлов (например, изображений)

app.get('/shop/:id', async (req, res) => {
  const shopId = req.params.id;

  try {
    const result = await pool.query('SELECT * FROM shop WHERE id = $1', [shopId]);
    const shop = result.rows[0];
    res.json(shop);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

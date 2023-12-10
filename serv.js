const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = 3000;

// Подключение к базе данных PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nav',
    password: 'mysql',
    port: 5432,
});

app.use(bodyParser.json());

// Middleware для обслуживания статических файлов
app.use('/public', express.static(path.join(__dirname, 'public')));

// Обработчик для поиска магазинов
app.get('/api/search', async (req, res) => {
    const searchTerm = req.query.term.toLowerCase();
    const categories = req.query.categories ? req.query.categories.split(',') : [];

    try {
        let query = 'SELECT DISTINCT shops.* FROM shops';

        if (categories.length > 0) {
            query += ' INNER JOIN shop_categories ON shops.id = shop_categories.shop_id';
            query += ' WHERE LOWER(shops.name) LIKE $1 AND shop_categories.category_id IN (';
            query += categories.map((_, index) => `$${index + 2}`).join(',');
            query += ')';
        } else {
            query += ' WHERE LOWER(shops.name) LIKE $1';
        }

        const params = [`%${searchTerm}%`, ...categories.map(category => parseInt(category))];

        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Обработчик для получения категорий
app.get('/api/categories', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM categories');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Обработчик для корневого пути
app.get('/', (req, res) => {
    // Замените на путь к вашему index.html
    res.sendFile(path.join(__dirname, 'first','firstFloor1.html'));
});
// Обработчик для корневого пути
app.get('/second', (req, res) => {
    // Замените на путь к вашему index.html
    res.sendFile(path.join(__dirname, 'second','secondFloor1.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

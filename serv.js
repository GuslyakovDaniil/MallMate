const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');  // Добавьте эту строку

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

    try {
        const result = await pool.query(
            'SELECT * FROM shops WHERE LOWER(name) LIKE $1',
            [`%${searchTerm}%`]
        );

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Обработчик для корневого пути
app.get('/', (req, res) => {
    // Замените на путь к вашему index.html
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

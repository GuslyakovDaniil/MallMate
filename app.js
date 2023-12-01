
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'nav',
  password: 'mysql',
  port: 5432, // замените 'порт' на фактический порт
});

async function fetchData() {
  await client.connect();

  try {
    const result = await client.query('SELECT * FROM shop');
    return result.rows;
  } finally {
    await client.end();
  }
}

async function updateMap() {
    const data = await fetchData();
    data.forEach((row) => {
      const itemNumber = row.item_number; // замените на фактическое имя столбца
      map[itemNumber] = 1;
    });
  
    // После обновления массива вызовите другие функции, которые зависят от него
    createMap();
    startSearch();
  }
  

// Вызовите функцию обновления массива перед инициализацией
updateMap();

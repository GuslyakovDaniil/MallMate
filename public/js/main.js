document.addEventListener('DOMContentLoaded', function () {
    const shopListContainer = document.getElementById('shopListContainer');

    function fetchResultsFromServer(searchTerm) {
        fetch(`/api/search?term=${searchTerm}`)
            .then(response => response.json())
            .then(data => displayShopList(data))
            .catch(error => console.error('Error fetching data:', error));
    }

    function updateShopList() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        fetchResultsFromServer(searchTerm);
    }

    function displayShopList(shops) {
        shopListContainer.innerHTML = '';

        if (shops.length > 0) {
            const ul = document.createElement('ul');
            shops.forEach(shop => {
                const li = document.createElement('li');
                li.textContent = shop.name;
                li.addEventListener('click', function () {
                    document.getElementById('searchInput').value = shop.name;
                    hideShopList();
                });
                ul.appendChild(li);
            });
            shopListContainer.appendChild(ul);
            shopListContainer.classList.add('active');
        } else {
            hideShopList();
        }
    }

    function hideShopList() {
        shopListContainer.classList.remove('active');
    }

    // Добавляем обработчик фокуса на поле ввода
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('focus', function () {
        updateShopList();
    });

    // Добавляем обработчик клика на документе, чтобы скрывать список магазинов
    document.addEventListener('click', function (event) {
        if (event.target !== shopListContainer && !shopListContainer.contains(event.target) && event.target !== searchInput) {
            hideShopList();
        }
    });
});

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
    shopListContainer.innerHTML = ''; // Clear the content
    shopListContainer.classList.remove('active');
}


    // Добавляем обработчик фокуса на поле ввода
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('focus', function () {
        updateShopList();
    });

    document.addEventListener('click', function (event) {
        const isClickInsideShopList = shopListContainer.contains(event.target);
        const isClickOnSearchInput = event.target === searchInput;
    
        if (!isClickInsideShopList && !isClickOnSearchInput) {
            hideShopList();
        } else if (isClickInsideShopList && event.target.tagName === 'LI') {
            // If the click is inside the shop list and on an LI element, hide the list
            hideShopList();
        }
    });
    
    
    
    
});

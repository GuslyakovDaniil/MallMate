document.addEventListener('DOMContentLoaded', function () {
    const shopListContainer = document.getElementById('shopListContainer');
    const categoryDropdown = document.getElementById('categoryDropdown');

    function fetchResultsFromServer(searchTerm) {
        const selectedCategories = Array.from(categoryDropdown.selectedOptions).map(option => option.value);

        fetch(`/api/search?term=${searchTerm}&categories=${selectedCategories.join(',')}`)
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
        shopListContainer.innerHTML = '';
        shopListContainer.classList.remove('active');
    }

    // Добавляем обработчик ввода символа в поле ввода
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function () {
        updateShopList();
    });

    document.addEventListener('click', function (event) {
        const isClickInsideShopList = shopListContainer.contains(event.target);
        const isClickOnSearchInput = event.target === searchInput;

        if (!isClickInsideShopList && !isClickOnSearchInput) {
            hideShopList();
        } else if (isClickInsideShopList && event.target.tagName === 'LI') {
            hideShopList();
        }
    });

    // Fetch categories and update the dropdown
    fetch('/api/categories')
        .then(response => response.json())
        .then(data => updateCategoryDropdown(data))
        .catch(error => console.error('Error fetching categories:', error));

    function updateCategoryDropdown(categories) {
        const categoryDropdown = document.getElementById('categoryDropdown');

        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryDropdown.appendChild(option);
        });

        // Initialize Select2 for the multi-select dropdown
        $(categoryDropdown).select2();
    }
});

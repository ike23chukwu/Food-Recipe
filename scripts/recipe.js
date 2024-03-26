document.addEventListener("DOMContentLoaded", function () {
    const recipeCardsContainer = document.querySelector(".recipe-cards");

    const recipes = [
        {
            id: 1,
            title: "Spaghetti Carbonara",
            description: "A classic Italian pasta dish with creamy sauce.",
            image: "spaghetti-carbonara.jpg",
            likes: 25,
            comments: [
                { id: 1, user: "User1", comment: "Great recipe!" },
                { id: 2, user: "User2", comment: "I tried it and loved it!" }
            ]
        },
        {
            id: 2,
            title: "Chicken Alfredo",
            description: "Creamy pasta with chicken and parmesan cheese.",
            image: "chicken-alfredo.jpg",
            likes: 30,
            comments: [
                { id: 1, user: "User3", comment: "Delicious dish!" }
            ]
        }

    ];


    function createRecipeCard(recipe) {
        return `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h2>${recipe.title}</h2>
                <p>${recipe.description}</p>
                <div class="interaction-options">
                    <button class="like-button">Like (${recipe.likes})</button>
                    <button class="comment-button">Comment (${recipe.comments.length})</button>
                </div>
            </div>
        `;
    }


    function renderRecipeCards() {
        recipes.forEach(recipe => {
            const recipeCardHTML = createRecipeCard(recipe);
            recipeCardsContainer.innerHTML += recipeCardHTML;
        });
    }


    renderRecipeCards();
});
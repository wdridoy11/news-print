/* ==================================================
               Api fetch Categories
   ================================================== */
const fetchCategories = () => {
   fetch("https://openapi.programming-hero.com/api/news/categories")
      .then(res => res.json())
      .then(data => showCategories(data.data))
}

/* ==================================================
               showCategories Categories
   ================================================== */
const showCategories = (data) => {
   console.log(data);
   const categories = document.getElementById("categories-container")
   data.news_category.forEach(singleCategory => {
      // console.log(singleCategory);
      // categories.innerHTML += ` <a class="nav-link" aria-current="page" href="#">${singleCategory.category_name}</a>`
      const categoryLink = document.createElement("a")
      categoryLink.innerHTML = `
      <a class="nav-link" aria-current="page" 
      onclick="fetchCategoriesNews('${singleCategory.category_id}', '${singleCategory.category_name}')"
      href="#">${singleCategory.category_name}</a>
       `
      categories.appendChild(categoryLink)
   })

}

/* ==================================================
               fetch Categories News
   ================================================== */
const fetchCategoriesNews = (categoryId, categoryName) => {
   const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`
   fetch(url)
      .then(res => res.json())
      .then(data => showAllNews(data.data, categoryName))
}
/* ==================================================
               fetch Categories News
   ================================================== */
const showAllNews = (singleNews, categoryName) => {
   const categoryNameDisplay = document.getElementById("category-name");
   categoryNameDisplay.innerText = categoryName;
   const newsCount = document.getElementById("news-count");
   newsCount.innerText = singleNews.length;
   console.log(singleNews, categoryName);

}







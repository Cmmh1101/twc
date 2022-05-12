const articlesDOM = document.querySelector('.articles')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.article-form')
const articleTitleInputDOM = document.querySelector('.article-input-title')
const articleContentInputDOM = document.querySelector('.article-input-content')
const formAlertDOM = document.querySelector('.form-alert')
// Load articles from /api/articles
const showArticles = async () => {
  loadingDOM.style.visibility = 'visible'
  try {
    const {
      data: { articles },
    } = await axios.get('/api/v1/articles') 
    if (articles.length < 1) {
      articlesDOM.innerHTML = '<h5 class="empty-list">No articles in your list</h5>'
      loadingDOM.style.visibility = 'hidden'
      return
    }
    const allArticles = articles
      .map((article) => {
        const { published, _id: articleID, title, content } = article
        return `<div class="single-article ${published && 'article-published'}">
<h5><span><i class="far fa-check-circle"></i></span>${title}</h5></div><div><p class="single-article ${published && 'article-published'}">${content}</p></div>
<div class="article-links">



<!-- edit link -->
<a href="edit-article.html?id=${articleID}"  class="edit-link">
<i class="fas fa-edit"></i>
</a>
<!-- delete btn -->
<button type="button" class="delete-btn" data-id="${articleID}">
<i class="fas fa-trash"></i>
</button>
</div>
</div>`
      })
      .join('')
    articlesDOM.innerHTML = allArticles
  } catch (error) {
    articlesDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>'
  }
  loadingDOM.style.visibility = 'hidden'
}

showArticles()

// delete article /api/articles/:id

articlesDOM.addEventListener('click', async (e) => {
  const el = e.target
  if (el.parentElement.classList.contains('delete-btn')) {
    loadingDOM.style.visibility = 'visible'
    const id = el.parentElement.dataset.id
    try {
      await axios.delete(`/api/v1/articles/${id}`)
      showArticles()
    } catch (error) {
      console.log(error)
    }
  }
  loadingDOM.style.visibility = 'hidden'
})

// form

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const title = articleTitleInputDOM.value;
  const content = articleContentInputDOM.value;

  try {
    await axios.post('/api/v1/articles', { title, content })
    showArticles()
    articleTitleInputDOM.value = ''
    articleContentInputDOM.value = ''
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `success, article added`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 4000)
})

const articleIDDOM = document.querySelector('.article-edit-id')
const articleNameDOM = document.querySelector('.article-edit-title')
const articleContentDOM = document.querySelector('.article-edit-content')
const articlePublishedDOM = document.querySelector('.article-edit-published')
const editFormDOM = document.querySelector('.single-article-form')
const editBtnDOM = document.querySelector('.article-edit-btn')
const formEditAlertDOM = document.querySelector('.form-alert')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempName
let tempContent

const showArticle = async () => {
  try {
    const {
      data: { article },
    } = await axios.get(`/api/v1/articles/${id}`)
    let { _id: articleID, published, title, content } = article

    articleIDDOM.textContent = articleID
    articleNameDOM.value = title
    articleContentDOM = content
    tempName = title
    tempContent = content
    if (published) {
      articlePublishedDOM.checked = true
    }
  } catch (error) {
    console.log(error)
  }
}

showArticle()

editFormDOM.addEventListener('submit', async (e) => {
  editBtnDOM.textContent = 'Loading...'
  e.preventDefault()
  try {
    const articleName = articleNameDOM.value
    const articlePublished = articlePublishedDOM.checked
    const articleContent = articleContentDOM.value

    const {
      data: { article },
    } = await axios.patch(`/api/v1/articles/${id}`, {
      title: articleName,
      published: articlePublished,
      content: articleContent,
    })

    const { _id: articleID, published, title, content } = article

    articleIDDOM.textContent = articleID
    articleNameDOM.value = title
    articleContentDOM.value = content
    tempName = title
    tempContent = content
    if (published) {
      articlePublishedDOM.checked = true
    }
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `success, edited article`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    console.error(error)
    articleNameDOM.value = tempName
    articleContentDOM.value = tempContent
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }
  editBtnDOM.textContent = 'Edit'
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 4000)
})

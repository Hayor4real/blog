let postArray = []
const inputTitle = document.getElementById("post-title")
const inputBody = document.getElementById("post-body")
const form = document.getElementById("new-post")

function renderPost() {
    let html = ""
        for (let post of postArray) {
            html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr /> `

        }

        document.getElementById("blog-list").innerHTML = html
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
         postArray = data.slice(0, 5)
       renderPost()
        
    })

    document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = inputTitle.value
    const postBody = inputBody.value

    const data = {
        title: postTitle,
        body: postBody
    }



    const optional = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json"
      }
    }

fetch("https://apis.scrimba.com/jsonplaceholder/posts", optional)
.then(res => res.json())
.then(post => {postArray.unshift(post)
renderPost()

inputTitle.value = ""
inputBody.value = "" 

// form.reset()

})


})
 







 
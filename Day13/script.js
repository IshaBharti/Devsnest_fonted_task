fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        let container = document.getElementById("myData")
        let author = document.querySelector("#author")
        var authorNameLenght = data.author.length

        if (authorNameLenght >= 20) {
            author.style.marginLeft = "85%"
        } else {
            author.style.marginLeft = "60%"
        }
        container.innerText = data.content
        author.innerText = "- " +data.author
    });
// console.log(data.content));
console.log(resources)

let resourcesHTML = ""

resources.map(resource => resourcesHTML += `<article>
<h2><a href="#">${resource.category}</a></h2>
<h3>${resource.category}</h3>
<p>${resource.text}</p>
<ul><li><a href="${resource.sources["url"]}">${resource.sources["title"]}</a></li></ul>
</article>`)

console.log(resourcesHTML)

const body = document.getElementsByTagName("body")
body[0].innerHTML = resourcesHTML

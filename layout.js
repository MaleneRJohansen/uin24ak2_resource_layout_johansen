console.log(resources)

let resourcesHTML = ""

resources.map(resource => resourcesHTML += `<article><h2><a href="#">${resource.category}</a></h2></article>`)
//<h2><a href="#">${resource.category}</a></h2><h3>${resource.category}</h3><p>${resource.text}</p><ul><li><a href="${resource.sources["url"]}">${resource.sources["title"]}</a></li></ul>

console.log(resourcesHTML)

const nav = document.getElementsByTagName("nav")
nav[0].innerHTML = resourcesHTML

const body = document.getElementsByTagName("body")

if (resources.category === "HTML") {

}
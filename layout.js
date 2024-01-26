let printOut = ""
const documentName = window.location.pathname.split("/").pop()
//Linje 2 er kode jeg har fått fra ChatGPT da jeg spurte hvordan sjekke navnet på dokumentet. "How to check the name of the document"

if (documentName ==="index.html") {
    const HTMLresource = resources[0]

    printOut += `<h2>${HTMLresource.category}</h2><p>${HTMLresource.text}</p><ul>`

    HTMLresource.sources.map((source) => {
        printOut += `<li><a href="${source.url}">${source.title}</a></li>`
    })

    printOut += `</ul>`
} else {
    resources.map((resource) => {
        printOut += `<h2>${resource.category}</h2><p>${resource.text}</p><ul>`
    })

    resource.sources.map((source) => {
        printOut += `<li><a href="${source.url}">${source.title}</a></li>`
    })

    printOut += `</ul>`
}

document.getElementById("content").innerHTML = printOut
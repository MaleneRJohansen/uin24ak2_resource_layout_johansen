let printOut = ""
const documentName = window.location.pathname.split("/").pop()
//Her har jeg fått hjelp av chat gpt til å se hvordan sjekke navnet på dokumentet. "how to check the name of the document"

if (documentName === "index.html") {
    const HTMLresource = resources[0]

    printOut += `<h2>${HTMLresource.category}</h2><p>${HTMLresource.text}</p><ul>`

    HTMLresource.sources.map((source) => {
        printOut += `<li><a href="${source.url}">${source.title}</a></li>`
    })

    printOut += `</ul>`

    document.getElementById("link1").style.color = "#2A324B"
    document.getElementById("html").style.backgroundColor = "#fff"


} else if (documentName === "css.html") {
    const CSSresource = resources[1]
    
    printOut += `<h2>${CSSresource.category}</h2><p>${CSSresource.text}</p><ul>`

    CSSresource.sources.map((source) => {
        printOut += `<li><a href="${source.url}">${source.title}</a></li>`
    })

    document.getElementById("link2").style.color = "#2A324B"
    document.getElementById("css").style.backgroundColor = "#fff"

} else if (documentName === "javascript.html") {
    const jsresource = resources[2]
    
    printOut += `<h2>${jsresource.category}</h2><p>${jsresource.text}</p><ul>`

    jsresource.sources.map((source) => {
        printOut += `<li><a href="${source.url}">${source.title}</a></li>`
    })

    document.getElementById("link3").style.color = "#2A324B"
    document.getElementById("js").style.backgroundColor = "#fff"

} else if (documentName === "react.html") {
    const rctresource = resources[3]
    
    printOut += `<h2>${rctresource.category}</h2><p>${rctresource.text}</p><ul>`

   rctresource.sources.map((source) => {
        printOut += `<li><a href="${source.url}">${source.title}</a></li>`
    })

    document.getElementById("link4").style.color = "#2A324B"
    document.getElementById("rct").style.backgroundColor = "#fff"

} else if (documentName === "sandhcms.html") {
    const shcmsresource = resources[4]
    
    printOut += `<h2>${shcmsresource.category}</h2><p>${shcmsresource.text}</p><ul>`

    shcmsresource.sources.map((source) => {
        printOut += `<li><a href="${source.url}">${source.title}</a></li>`
    })

    document.getElementById("link5").style.color = "#2A324B"
    document.getElementById("shcms").style.backgroundColor = "#fff"

}

document.getElementById("content").innerHTML = printOut
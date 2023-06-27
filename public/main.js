function renderElement(element) {
    document.body.innerHTML = `
    <div class="card">
    <div>Tag:  ${element.tag}</div>
    <div>Lehrer: ${element.lehrer1}</div>
    <div>Vertretung: ${element.lehrer2}</div>
    <div>Klasse: ${element.klasse}</div>
    <div>Stunde: ${element.stunde}</div>
    </div>
    `
}

async function init() {
    const request = await fetch("/data")
    const data = await request.json()

    for (let element of data) {
        renderElement(element)
    }
}

window.onload = init
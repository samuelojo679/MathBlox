function show() {
    let base = document.getElementById("tri-base").value
    let height = document.getElementById("tri-height").value
    let displayarea = document.getElementById("display")
    let unit = document.getElementById("unit").value
    let area = base*height/2
    displayarea.textContent = `${area} ${unit}²`
}
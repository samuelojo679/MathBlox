function show() {
    let radius = document.getElementById("radius").value
    let unit = document.getElementById("unit").value
    let displayarea = document.getElementById("display")
    let area = Math.PI*radius**2


    displayarea.textContent = `${area} ${unit}²`
}
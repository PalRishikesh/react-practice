console.log("This is simple drag and drop utility");
const imgBox = document.querySelector(".imgBox");
const whiteBoxs = document.getElementsByClassName("whiteBox");

console.log(imgBox);
console.log(whiteBoxs);
// Event listeners for draggable box
imgBox.addEventListener('dragstart', (e) => {
    console.log("Drag started...");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0)
});

imgBox.addEventListener('dragend', (e) => {
    console.log("Drag End!");
    e.target.className = 'imgBox'

})

for (const whiteBox of whiteBoxs) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("Drag over...");
        // e.target.append(imgBox)

    })
    whiteBox.addEventListener('dragenter', (e) => {
        e.preventDefault();
        e.target.className +=' dashed'
        console.log("Drag Enter... dashed");
    })
    whiteBox.addEventListener('dragleave', (e) => {
        // e.preventDefault();
        e.target.className = 'whiteBox';
        console.log("Drag Leave...");
    })
    whiteBox.addEventListener('drop', (e) => {
        e.preventDefault();
        console.log("Drag end...");
        e.target.append(imgBox)
        // console.log(e.target.html())
    })
}
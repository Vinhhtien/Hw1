function upDate(previewPic) {
    console.log("Event triggered!"); // Kiểm tra xem sự kiện có hoạt động không
    console.log("Image source: " + previewPic.src); // Kiểm tra src của ảnh
    console.log("Image alt text: " + previewPic.alt); // Kiểm tra alt của ảnh

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerText = previewPic.alt;
}

function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')"; 
    imageDiv.innerText = "Hover over an image below to display here.";
}

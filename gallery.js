document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
    const serializedArray = urlParams.get('data');

    var array = JSON.parse(decodeURIComponent(serializedArray));
    console.log(array);
    document.getElementById('heading').textContent = array[0];
    var property = array.slice(5,);
     
    var dynamicContent = document.getElementById('dynamicContent');
    property.forEach(function(imageSrc) {
        var columnDiv = document.createElement('div');
        columnDiv.classList.add('col-12', 'col-md-6','mt-5','mb-5');
                
        var imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.classList.add('w-100');
                
        columnDiv.appendChild(imgElement);
        dynamicContent.appendChild(columnDiv);
    });
});
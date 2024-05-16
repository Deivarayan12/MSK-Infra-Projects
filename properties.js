const propertiesList = document.getElementById("propertiesList");
const loader = document.getElementById("loader");


    
loader.style.display = "block";
fetch('https://script.google.com/macros/s/AKfycbyfpO73m2A5ZQtnM2DB5rpnhCc7AXABOnwRYI9uwt5fn6PJc8rfAnyyFxe6Ra-7JjzWfA/exec')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        loader.style.display = "none";

        if (data.content) {
            console.log(data.content);
            data.content.forEach(item => {
                    let divElement = document.createElement('div');
                    divElement.classList.add("col-12", "col-md-4", "mb-3");
                    propertiesList.appendChild(divElement);
                    // divElement.setAttribute("href","./gallery.html");
                    var array = item;
                    var serializedArray = JSON.stringify(array);
                    divElement.onclick = function (){
                        window.location.href = 'gallery.html?data=' + encodeURIComponent(serializedArray);
                    };

                    let imgElement = document.createElement('img');
                    imgElement.src = item[4];
                    imgElement.setAttribute("style", "height: 250px");
                    imgElement.classList.add("w-100", "shadow");
                    divElement.appendChild(imgElement);

                    let divElement2 = document.createElement('div');
                    divElement2.classList.add("pl-3", "pt-3", "text-box", "shadow");
                    divElement.appendChild(divElement2);

                    let h3Element = document.createElement('h3');
                    h3Element.classList.add("pb-2");
                    h3Element.textContent = item[0];
                    divElement2.appendChild(h3Element);

                    let divElement3 = document.createElement('div');
                    divElement3.setAttribute("style", "color: rgba(49, 46, 46, 0.933)");
                    divElement3.classList.add("d-flex", "flex-row");
                    divElement2.appendChild(divElement3);

                    let bedIcon = document.createElement('i');
                    bedIcon.classList.add("fa-solid", "fa-bed", "ml-2", "mt-1");
                    divElement3.appendChild(bedIcon);

                    let bedCount = document.createElement('p');
                    bedCount.classList.add("ml-2");
                    bedCount.textContent = item[1];
                    divElement3.appendChild(bedCount);

                    let bathIcon = document.createElement('i');
                    bathIcon.classList.add("fa-solid", "fa-bath", "ml-2", "mt-1");
                    divElement3.appendChild(bathIcon);

                    let bathCount = document.createElement('p');
                    bathCount.classList.add("ml-2");
                    bathCount.textContent = item[2];
                    divElement3.appendChild(bathCount);

                    let otherInfo = document.createElement('p');
                    otherInfo.classList.add("ml-2");
                    otherInfo.textContent = item[3];
                    divElement3.appendChild(otherInfo);
                });
                document.getElementById("footer-hide").style.display = "block";
        } 
        else {
                console.error("No 'content' property found in data object.");
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        loader.style.display = "none";
    });
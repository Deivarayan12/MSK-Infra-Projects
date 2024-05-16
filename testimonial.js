var appendingContainer = document.getElementById("adding-items");

fetch('https://script.google.com/macros/s/AKfycbzL0EcLpL5vtBwJzABTcY5WmjSulZectvES2oLhbe31_el0ntAtDTjJDnfpnDA1DcvB/exec')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("loader-1").style.display="none";
        document.getElementById("test").style.display="block";
        if (data.content) {
            console.log(data.content);
            data.content.forEach(item => {
                var additem =`<div class="col-12 col-md-4">
                <div style="background-color: white;border-radius: 10px;" class="p-4 mt-4 mb-4 shadow">  
                  <div class="d-flex flex-row">
                  <img src="${item[0]}" class="img-resizer"/>
                  <div class="d-flex flex-column mt-3 ml-4">
                    <h5>${item[1]}</h5>
                    <div class="d-flex flex-row mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFDE20" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFDE20" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFDE20" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFDE20" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFDE20" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    </div>
                  </div>
                  </div>
                  <p>${item[2]}</p>
                </div>
              </div>`

                appendingContainer.innerHTML+=additem;
            });
            document.getElementById("footer-hide").style="block";
        } 
        else {
            console.error("No 'content' property found in data object.");
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
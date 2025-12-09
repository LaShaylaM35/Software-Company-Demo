let url = "https://nbwqtuymbktwrhmopjti.supabase.co/rest/v1/Leads";
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5id3F0dXltYmt0d3JobW9wanRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MTA3MDcsImV4cCI6MjA4MDM4NjcwN30.V6AO7DgIWRYIn8sHdWDjGVLQ0PSHAsl_6vyGKk0z2Qs";
let urlProducts = "https://nbwqtuymbktwrhmopjti.supabase.co/rest/v1/Product";





async function createLead(){

    event.preventDefault();

    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMessage").value;

    let lead = {
        "name" : name , 
        "email" : email,
        "message" : message
    }

 
    let response = await fetch(url , {
        method: "POST",
        headers: {
            "apikey" : apikey,
            "Content-Type" : "application/json"
        }, 
        body : JSON.stringify(lead)
    })

    console.log("createLead");
    console.log(lead);

}

async function getProducts(){

    // promise= is an operation JS loading in the background 
    let response = await fetch(urlProducts , {
        method: "GET",
        headers: {
            "apikey" : apikey,
            "Content-Type" : "application/json"
        }
    });

    let data = await response.json();

    let cardsContainer = document.getElementById("cardsContainer");

    for(let i = 0; i < data.length; i++){

        cardsContainer.innerHTML += `
        
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card" style="width: 18rem">
            <img
              src="${data[i].image_url}"
              class="card-img-top"
              alt="${data[i].name}"
            />
            <div class="card-body">
              <h5 class="card-title">${data[i].name}</h5>
              <p class="card-text">
                ${data[i].description}
              </p>
              <p class="btn btn-primary">$ ${data[i].price}</p>
            </div>
          </div>
        </div>

        `

    }
}



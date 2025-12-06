let url = "https://nbwqtuymbktwrhmopjti.supabase.co/rest/v1/Leads";
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5id3F0dXltYmt0d3JobW9wanRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MTA3MDcsImV4cCI6MjA4MDM4NjcwN30.V6AO7DgIWRYIn8sHdWDjGVLQ0PSHAsl_6vyGKk0z2Qs";
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
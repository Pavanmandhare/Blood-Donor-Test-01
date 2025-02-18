document.getElementById("donorForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var bloodGroup = document.getElementById("bloodGroup").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("location").value;

    var data = { 
        name: name, 
        age: age, 
        bloodGroup: bloodGroup, 
        phone: phone, 
        email: email, 
        location: location 
    };

    fetch("https://script.google.com/macros/s/AKfycbw_fIHAQvrVR5Ep9gzvIB8VMR0JlL2olBnchswdCzBnEZytRLqKTcoGsWU-W-EkSsLM/exec", { 
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("responseMessage").innerText = "Registration successful!";
        document.getElementById("donorForm").reset();
    })
    .catch(error => console.error("Error:", error));
});

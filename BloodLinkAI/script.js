function findDonor() {

    let blood = document.getElementById("blood").value;
    let city = document.getElementById("city").value;
    let emergency = document.getElementById("emergency").value;

    let result = document.getElementById("result");

    let filtered = donors.filter(function(each){

        return each.blood === blood &&
               each.city.toLowerCase() === city.toLowerCase();

    });

    result.innerHTML = "";

    if(filtered.length === 0){

        result.innerHTML = "<h3>No Donor Found</h3>";
        return;
    }

    filtered.forEach(function(each){

        result.innerHTML += `
        <div>

            <h3>${each.name}</h3>

            <p>Blood: ${each.blood}</p>

            <p>Availability: ${each.availability}%</p>

            <p>Priority: ${emergency}</p>

            <hr>

        </div>
        `;
    });

    if(emergency === "High"){

        result.innerHTML +=
        "<h3 style='color:red'>Emergency Routing Activated</h3>";

    }
}
function chatBot(){

let msg = document.getElementById("userMessage").value.toLowerCase();

let result = document.getElementById("chatResult");

if(msg.includes("blood")){
    result.innerHTML = "<p>AI: Please select blood group and city to find donors.</p>";
}
else if(msg.includes("donor")){
    result.innerHTML = "<p>AI: Matching donors are prioritized by availability.</p>";
}
else if(msg.includes("emergency")){
    result.innerHTML = "<p>AI: Emergency routing activated for high priority cases.</p>";
}
else{
    result.innerHTML = "<p>AI: Sorry, I can help with blood donation queries only.</p>";
}

}
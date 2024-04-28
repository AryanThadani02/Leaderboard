var scores = [
  { 
    firstname: "John",
    lastname: "Doe",
    country: "USA",
    score: 85,
    submissionDateTime:"4/28/2022, 2:27:47 PM"
  },
  { 
    firstname: "Jane",
    lastname: "Smith",
    country: "Canada",
    score: 92,
    submissionDateTime:"5/22/2021, 3:21:57 PM"
  },
  { 
    firstname: "David",
    lastname: "Lee",
    country: "Australia",
    score: 78,
    submissionDateTime:"8/11/2015, 5:50:55 PM"
  },
  { 
    firstname: "Emily",
    lastname: "Wong",
    country: "UK",
    score: 88,
    submissionDateTime:"10/18/2016, 6:11:27 PM"
  }
];
// sorting function
// 0 = orignal
// -1 = ab
// 1 = ba
function compareScore(a,b){
  if(a["score"] > b["score"]){
    return -1;
  }else if(a["score"] < b["score"]){
    return 1;
  }else{
    return 0; 
  }
}
function displayData(data){

  let main = document.getElementById("info")

  //1. clear previous data
  main.innerHTML="";

  //2. data sorted  
 data.sort(compareScore)
  // 3. load the data
  data.forEach((item , index) => {
    // console.log(item)

    // created div
    let box = document.createElement("div");
    box.classList.add("row")

    // name
    let name = document.createElement("p")
    name.innerText=item["firstname"] + item["lastname"]
    // Append submission date and time below name
    name.innerHTML += "<br><small>" + item["submissionDateTime"] + "</small>";

    // country
    let country = document.createElement("p")
    country.innerText=item["country"] 

    // score
    let score = document.createElement("p")
    score.innerText=item["score"] 

    // delete bttn
    let dele = document.createElement("button")
    dele.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Font Awesome trash icon
    dele.addEventListener("click", () => deleteItem(index))
    dele.classList.add("delete")

    
    // +5 bttn
    let plus5 = document.createElement("button")
    plus5.innerText=["+5"] 
    plus5.addEventListener("click", () => incrementScore(index))
    plus5.classList.add("plus")

    
    // -5 bttn
    let minus5 = document.createElement("button")
    minus5.innerText=["-5"] 
    minus5.addEventListener("click", () => decrementScore(index))
    minus5.classList.add("minus")


    box.append(name)
    box.append(country)
    box.append(score)
    box.append(dele)
    box.append(plus5)
    box.append(minus5)
    // append box in main
    main.append(box)
  });


 

}

function deleteItem(index){
  scores.splice(index , 1)
  displayData(scores)
}
function incrementScore(index){
  scores[index]["score"] += 5;
  displayData(scores)
}
function decrementScore(index){
  scores[index]["score"] -= 5;
  displayData(scores)
}
function addData(fname, lname, score, country) {
  let obj = {
    "firstname": fname,
    "lastname": lname,
    "score": score,
    "country": country,
    "submissionDateTime": new Date().toLocaleString()  // Add current date and time
  };
  scores.push(obj);
  displayData(scores);
   // Clear the form fields after submission
   document.getElementById("scoreForm").reset();
}


addEventListener("load", ()=>{
  // 1. show all data
  displayData(scores)
  // 2. add the listener on the form
  document.getElementById("scoreForm").addEventListener("submit",(e)=>{
    // stop the screen reload 
    e.preventDefault();
    // fetch data 
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let country = document.getElementById("country").value
    let score = parseInt(document.getElementById("score").value);
    // add the values
    addData(fname,lname,score,country)

    
  })
})
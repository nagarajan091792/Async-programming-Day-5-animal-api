async function foo () {
    try{
    let res =  await fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    var res1=  await res.json()
    
    
    console.log(res1)
        var div = document.createElement("div");
        div.innerHTML=`
        <div class="card card_center text-white  mb-3;">
  <div  class="card-header bg-primary"><h3>Zoo Animals</h3></div>
  <div class="card-body bg-secondary">
    <p class="card-text"><b>Animal Name:</b> ${res1.name}</p>
    <p class="card-text"><b>Animal Length Min:</b> ${res1.length_min} ft</p>
    <p class="card-text"><b>Animal Length Max:</b> ${res1.length_max} ft</p>
    <p class="card-text"><b>Animal Weight Min:</b> ${res1.weight_min} lbs</p>
    <p class="card-text"><b>Animal Weight Max:</b> ${res1.weight_max} lbs</p>
    <p class="card-text"><b>Animal Lifespan:</b> ${res1.lifespan} years</p>
  </div>
  </div>
        `
        document.body.append(div);
    }
  
  catch(error){
    console.log(error)
  }
  }
  foo()
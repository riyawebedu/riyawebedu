let jsonFormat='{"fact":"Blue-eyed, white cats are often prone to deafness.","length":50}';
console.log(jsonFormat.fact);

let validRes=JSON.parse(jsonFormat);
console.log(validRes.fact)

let st1={
    name:"Riya",
    review:"I like to grab it."
}

let st1json=JSON.stringify(st1)
console.log(st1json)

let student={
    name:"Riya",
    class:"MCA",
    rollno :"25PCA011",
    address:"Baddi",
}


let studentjson=JSON.stringify(student)
console.log(studentjson)
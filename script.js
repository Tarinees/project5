let data = [
    {id: 1, name: "Zahid", email: "zahid402@gmail.com"},
    {id: 2, name: "Maqbool", email: "maqbool113@gmail.com"}
];

function readAll() {
    localStorage.setItem("object", JSON.stringify(data));
    var tabledata = document.querySelector(".data-table");

    var object = localStorage.getItem("object");
    var objectdata = JSON.parse(object);
    var elements = "";

    objectdata.map(record => {
        elements += `<tr>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>
                <button class ="edit" onclick={edit(${record.id})}>Edit</button>
                <button class ="delete" onclick={delet(${record.id})}>Delete</button>
            </td>
        </tr>`;
    });

    tabledata.innerHTML = elements;
}

function create(){
    document.querySelector(".create-form").style.display = "block";
     document.querySelector(".add-div").style.display = "none";

}

function add(){

    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    var newObj = {id :3, name:name, email:email};
    data.push(newObj);

    document.querySelector(".create-form").style.display = "none";
    document.querySelector(".add-div").style.display = "block";

    readAll()
}
function edit(id){
    document.querySelector('.update-form').style.display = "block";
    var obj = data.find(rec => rec.id === id);
    document.querySelector('.id').value = obj.id; 
    document.querySelector('.uname').value = obj.name;
    document.querySelector('.uemail').value = obj.email;
}
function delet(id){
    data = data.filter(rec => rec.id !==id)
    readAll()
} 

function update(){
    var id = parseInt(document.querySelector(".id").value);
    var name = document.querySelector(".uname").value;
    var email = document.querySelector(".uemail").value;

    var index = data.findIndex(res => res.id === id);
    data[index] = {id , name , email};
    document.querySelector('.update-form').style.display = "none";

    readAll();
}

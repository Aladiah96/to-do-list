document.getElementById('add').onclick = function add() {

    var input = document.createElement("INPUT");
    input.setAttribute("type", "checkbox");
    const val = document.querySelector('input').value;
    const ul = document.getElementById('tasks');
    let li = document.createElement('li');
    
    li.appendChild(input);
    li.appendChild(document.createTextNode(val));
    ul.appendChild(li);
    };


    
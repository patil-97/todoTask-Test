const cl = console.log;

const todoItem = document.getElementById("todoItem");
const liItem = document.getElementById("liItem");
const ul = document.getElementById("ul");

let todoArr = [
    {
        todo: "JavaScript"
    }
];

const templateLi = (arr) => {
    let result = "";
    arr.forEach(ele => result += `<li class="list-group-item d-flex justify-content-between" style="line-height:34px;">
                                    <span>${ele.todo}</span>
                                    <span >
                                        <button class="btn btn-outline-primary">Edit</button>
                                        <button class="btn btn-outline-danger">Remove</button>
                                    </span>
                                </li>`);
    ul.innerHTML = result;
}

templateLi(todoArr);

const createLi = (obj) => {
    let li = document.createElement("li");
    li.className = `list-group-item d-flex justify-content-between`;
    li.style.lineHeight = "34px";
    li.innerHTML = `
                    <span>${obj.todo}</span>
                    <span >
                        <button class="btn btn-outline-primary">Edit</button>
                        <button class="btn btn-outline-danger">Remove</button>
                    </span>
                    `;
    ul.append(li);
}

const onSubmit = (eve) => {
    eve.preventDefault();
    let todoObj = {
        todo : liItem.value,
    }
    todoArr.push(todoObj);
    eve.target.reset();

    createLi(todoObj);
}



todoItem.addEventListener("submit", onSubmit);
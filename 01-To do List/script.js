let list = document.querySelector("#list-main");
let btn = document.querySelector("button");

let inputBox = document.querySelector(".text-box");
let MessageBar = document.getElementById("MessageBar");

let Length = 0;

btn.addEventListener("click", () => {
    MessageBar.innerText = "";
    let text = document.querySelector(".text-box");

    let li = document.querySelectorAll("li");
    Length = li.length;

    if (Length < 15) {
        if (text.value != "") {
            let div = document.createElement("div");
            let task = document.createElement("li");
            let Button = document.createElement("button");

            div.append(task);
            div.append(Button);
            list.prepend(div);

            task.innerText = text.value;
            Button.innerText = "Delete";
            div.classList.add("list");
            Button.classList.add("deleteBTN");
            text.value = null;

            delete_btn();
        } else {
            MessageBar.innerText = "Please enter a task..!";
        }
    } else {
        MessageBar.innerText = `You have reached maximum length [${Length}].`;
    }

})

inputBox.addEventListener("input", () => {
    MessageBar.innerText = "";
})

function delete_btn () {
    let del_buttons = document.querySelectorAll(".deleteBTN");
    for (let dlt_btn of del_buttons) {
        dlt_btn.addEventListener("click", (e) => {
            let parent = e.target.parentElement;
            parent.remove();
        })
    }
}
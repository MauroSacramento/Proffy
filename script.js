document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField(){
    var newField = document.querySelector(".schedule-item").cloneNode(true);

    var fields = newField.querySelectorAll('input')

    fields.forEach(element => {
        element.value = ""
    });

    document.querySelector("#schedule-items").appendChild(newField)
}
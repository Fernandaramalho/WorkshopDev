
 function onOff(){
    document.querySelector("#modal").classList.toggle("hide")

    document.querySelector("moda").classList.toggle("hidescroll")

    document.querySelector("#modal").classList.toggle("addscroll")
}

function checkfields(event){
   const valueToCheck = [
       "title",
       "image",
       "category",
       "description",
       "link"
   ]
    const isEmpty = valueToCheck.find(function(value){

        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = typeof event.target[value].value.trim()
       
        if(checkIfIsString && checkIfIsEmpty){
            return true
        }

        if (isEmpty){
            event.preventDefault()
            alert("Por favor, preencha todos os campos")
        }

    })

}

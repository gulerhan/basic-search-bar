const input = document.querySelector('input')
const items = document.querySelectorAll('div')

input.addEventListener('input',mySearch)

function mySearch(){
    items.forEach(item => {
        if(input.value === ""){
            item.style.display = "none"
        }else{
            if(item.innerText.toLocaleLowerCase().includes(input.value.toLocaleLowerCase())){
                item.style.display= "block"
            }else{
                item.style.display="none"
            }
        }
    })
}
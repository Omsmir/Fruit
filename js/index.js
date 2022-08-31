let li = document.querySelectorAll("ul li a")
let image = document.querySelectorAll("#images .pic img")

let headerImage = document.querySelector("header img")

let section = document.querySelectorAll("section")


let minus = document.querySelector(".more .minus")
let plus = document.querySelector(".more .plus")
let num = document.querySelector(".more .num")

let About = document.getElementById("About")

let nav = document.querySelector(".navbar")

li.forEach((ele) => {
   ele.addEventListener("click" ,() => {
    if(ele.classList.contains("active")){
        return true

    }else {
       removeAllActive()
        ele.classList.add("active")
    }
   })
})



console.log(section)


image.forEach((ele) => {
    ele.addEventListener("click" ,() => {
        if(ele.classList.contains("active")){
            return true
        }else {
            removeAllActive(image)
            ele.classList.add("active")
            headerImage.src = "imgs/" + ele.classList[0] + ".jpg"

        }
    })
})


minus.addEventListener("click",() => {
    let n = Number(num.textContent)
if(n < 10 && n > 0){
    n--
}else if(n == 10){
    n--

}
num.textContent = n
})

plus.addEventListener("click",() => {
    let n = Number(num.textContent)
    if(n < 10 ){
        n++

    }else if(n == 10){
        return false
    }
    num.textContent = n
})



  AOS.init();


console.log(section[2].offsetTop)

 onscroll = function(){

    let position = document.documentElement.scrollTop

        if(position >= section[1].offsetHeight && position < section[1].offsetHeight + section[2].offsetHeight) {
                nav.classList.add("back");
        }else {
            nav.classList.remove("back")
        }

  



    section.forEach((ele) => {
        if(position >= ele.offsetTop - ele.offsetHeight * .25 && 
            position < ele.offsetTop + ele.offsetHeight -ele.offsetHeight * .25) {
                let currentId = ele.attributes.id.value

                removeAllActive(li)
                addActive(currentId)

            }
    })
}

var removeAllActive = function(para){
    para.forEach((ele) => {
        ele.classList.remove("active")
    })
  }


  var addActive = function(id){
    let select = `.navbar-nav li a[href="#${id}"]`


    document.querySelector(select).classList.add("active")
  }


console.log(nav)
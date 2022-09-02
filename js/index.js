let li = document.querySelectorAll("nav ul li a")
let image = document.querySelectorAll("#images .pic img")

let headerImage = document.querySelector("header img")

let section = document.querySelectorAll("section")


let minus = document.querySelector(".more .minus")
let plus = document.querySelector(".more .plus")
let num = document.querySelector(".more .num")

let About = document.getElementById("About")

let nav = document.querySelector(".navbar")


let years = document.querySelectorAll(".years ul li")


let circle = document.querySelector(".circle article h2")

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

        if(position >= section[1].offsetHeight ) {
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




  let ctx = document.getElementById('myChart')
  let myChart = new Chart(ctx, {
      type: 'bar',
     data: {
        labels:["Jul","Aug",'Sep',"Oct","Nov","Dec"],
        datasets: [{
            label:"Last 6 Months",
            data: [185, 1825, 500 ,1400 ,815 ,745],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            barThickness: 50,
            borderRadius: 5,
            hoverBackgroundColor: '#0593F9',

        }]
     },
      options: {
        animations: {
            borderColor: {
              duration: 1000,
              easing: 'easeInOut',
              from: 1,
              to: 5,
              loop: true
            }
          },
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  console.log(circle)

    years.forEach((ele) => {
        ele.addEventListener("click" , () =>{
            if(ele.classList.contains("active")){
                GenerateData(ele)
                console.log(ele.attributes.id.value)
                
            }else {
              removeAllActive(years)
                ele.classList.add("active")
                GenerateData(ele)
                circle.innerText = `Our Sales ${ele.attributes.id.value}`

            }
        })
    })



function GenerateData(id){
    let select = id.attributes["data-attr"].value
    
    
    let array = select.split(" ").map((ele) => Number(ele))
    let data = myChart.config.data;

    data.datasets[0].data = array;  
    
    myChart.update()
 }



 let windw = window.matchMedia("(max-width:1198px")


function match(x){
    let nodata = myChart.config.data;

    if(x.matches){

        nodata.datasets[0].barThickness = 25

    }else {
        nodata.datasets[0].barThickness = 50
    }
    myChart.update()

}


windw.addListener(match)


var typed = new Typed('span.auto', {
    // Waits 1000ms after typing "First"
    strings: ['First ^1000 sentence.', 'healthy',"Nice"],
    typeSpeed:200,
    backSpeed: 200,
    loop: true,
    smartBackspace: true 
  });
let section = document.querySelector("#about");
let clients = document.querySelector("#clients");
let home = document.querySelector("#home");
let divs = document.querySelectorAll("#about .progress-bar");
let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll("nav .nav-link");
let sections = document.querySelectorAll("section") ;
const root = document.querySelector(":root"); 

let x1 = document.getElementById("happyCustomers") ;
let x2 = document.getElementById("completeProjects") ;
let x3 = document.getElementById("linesOfCode") ;
let x4 = document.getElementById("filesDownloaded") ;
let flag = false ;
window.onscroll = ()=>{
    
    if(window.scrollY >= section.offsetTop - 250)
    {
        divs.forEach((div)=>{
            div.style.width = div.dataset.width;
        })
    }
    if(window.scrollY >= section.offsetTop)
    {
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');
        nav.classList.add('bg-white');
        navLinks.forEach((link)=>{link.style.color = "#000"});
        nav.style.boxShadow = "2px 2px 6px #eee" ;
    }
    else
    {
        nav.style.backgroundColor = "transparent";
        nav.classList.remove('navbar-light');
        nav.classList.remove('bg-white');
        nav.classList.add('navbar-dark');
        navLinks.forEach((a)=>{a.style.color = "#fff"});
        nav.style.boxShadow = "none" ;
        }

    sections.forEach((sec)=>{
        if(window.scrollY >= sec.offsetTop && window.scrollY < (sec.offsetTop + sec.offsetHeight))
        {
        navLinks.forEach((link)=>{
            link.classList.remove("active");
            document.querySelector('nav .nav-link[href *=' + sec.getAttribute('id') + ']').classList.add("active") ;
            root.style.setProperty("--color","#000");
        });
       
        }
    });
    if(window.scrollY >= home.offsetTop && window.scrollY <= (home.offsetTop + home.offsetHeight))
    {   
        root.style.setProperty("--color","#fff");
    }
    if(window.scrollY >= clients.offsetTop - 300)
    {

        function inc(el)
        {
            let goal = el.dataset.goal ;
            let c= setInterval(()=>{
                el.textContent++;

                if(el.textContent == goal)
                {
                    clearInterval(c) ;
                }
            },(2000/goal)); //20000 / 9450 = 2.116 ms
        }
       
     if(!flag)
      inc(x1);

    //   flag = true ;

      if(!flag)
      inc(x2);
    //   flag=true

      if(!flag)
      inc(x3);
    //   flag = true

      if(!flag)
      inc(x4);
      flag = true
  
 
    }
}
let brand = document.getElementById("brand") ;
let design = document.getElementById("design") ;
let graphic = document.getElementById("graphic") ;
let all = document.getElementById("all") ;
let allSection = document.querySelector(".all0");
let brandSection = document.querySelector(".brand0");
let designSection = document.querySelector(".design0");
let graphicSection = document.querySelector(".graphic0");

brand.onclick = ()=>{
all.classList.remove('active');
graphic.classList.remove('active');
design.classList.remove('active');
brand.classList.add('active');

allSection.style.display = "none" ;
graphicSection.style.display = "none" ;
designSection.style.display = "none" ;
brandSection.style.display = "block";   
}
design.onclick = ()=>{
    all.classList.remove('active');
    brand.classList.remove('active');
    graphic.classList.remove('active');
    design.classList.add('active');
    
    allSection.style.display = "none" ;
    graphicSection.style.display = "none" ;
    brandSection.style.display = "none";   
    designSection.style.display = "block" ;
}
graphic.onclick = ()=>{
    all.classList.remove('active');
    brand.classList.remove('active');
    design.classList.remove('active');
    graphic.classList.add('active');
    
    allSection.style.display = "none" ;
    brandSection.style.display = "none";   
    designSection.style.display = "none" ;
    graphicSection.style.display = "block" ;
    }
    all.onclick = ()=>{
        brand.classList.remove('active');
        graphic.classList.remove('active');
        design.classList.remove('active');
        all.classList.add('active');
        
        graphicSection.style.display = "none" ;
        brandSection.style.display = "none";   
        designSection.style.display = "none" ;
        allSection.style.display = "block" ;
        }
    let zAll = document.querySelectorAll(".all0 .zoom");
    let imageNumber = 0 ;
    let right = document.querySelector('#right');
    let left = document.querySelector('#left');
    for(let i=0; i<zAll.length; i++)
    {
        zAll[i].addEventListener("click", ()=>{
            imageNumber = Number(i+1) ;
            document.getElementsByClassName("popup")[0].style.display = "block" ;
            document.querySelector(".popup img").src = 'imgs/portfolio/' + imageNumber + '.jpg' ;
            

        });
    }
    right.addEventListener('click',()=>{
        if(imageNumber<6)
        {
        imageNumber++;
        document.querySelector(".popup img").src = 'imgs/portfolio/' + Number(imageNumber)  + '.jpg' ;
        }
        if(imageNumber==6)
        imageNumber = 0 ;
        
    });
    imageNumber = 0 ;
    left.addEventListener('click',()=>{
        if(imageNumber>1)
        {
        imageNumber--;
        document.querySelector(".popup img").src = 'imgs/portfolio/' + Number(imageNumber)  + '.jpg' ;
        }
        if(imageNumber == 1)
        imageNumber = 7 ;

            });
    
            imageNumber = 0;
    
    
    let zBrand = document.querySelectorAll(".brand0 .zoom");
    zBrand[0].addEventListener("click", ()=>{
            
        document.getElementsByClassName("popup")[0].style.display = "block" ;
        document.querySelector(".popup img").src = 'imgs/portfolio/' + 4 + '.jpg' ;
    });
    zBrand[1].addEventListener("click", ()=>{
            
        document.getElementsByClassName("popup")[0].style.display = "block" ;
        document.querySelector(".popup img").src = 'imgs/portfolio/' + 6 + '.jpg' ;
    });
    

    let zDesign = document.querySelectorAll(".design0 .zoom");
    zDesign[0].addEventListener("click", ()=>{
            
        document.getElementsByClassName("popup")[0].style.display = "block" ;
        document.querySelector(".popup img").src = 'imgs/portfolio/' + 2 + '.jpg' ;
        
    });
    zDesign[1].addEventListener("click", ()=>{
            
        document.getElementsByClassName("popup")[0].style.display = "block" ;
        document.querySelector(".popup img").src = 'imgs/portfolio/' + 5 + '.jpg' ;
        
    });

    let zGraphic = document.querySelectorAll(".graphic0 .zoom");
    zGraphic[0].addEventListener("click", ()=>{
            
        document.getElementsByClassName("popup")[0].style.display = "block" ;
        document.querySelector(".popup img").src = 'imgs/portfolio/' + 1 + '.jpg' ;
        
    });
    zGraphic[1].addEventListener("click", ()=>{
            
        document.getElementsByClassName("popup")[0].style.display = "block" ;
        document.querySelector(".popup img").src = 'imgs/portfolio/' + 3 + '.jpg' ;
        
    });
    zGraphic[2].addEventListener("click", ()=>{
            
        document.getElementsByClassName("popup")[0].style.display = "block" ;
        document.querySelector(".popup img").src = 'imgs/portfolio/' + 5 + '.jpg' ;
        
    });
    let exit = document.querySelector('#exit');
    exit.addEventListener('click',()=>{
        document.getElementsByClassName("popup")[0].style.display = "none" ;
});
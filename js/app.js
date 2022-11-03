const faqs=document.querySelectorAll(".faq_wrapper")

faqs.forEach((faq)=>{
   
    faq.addEventListener("click",(e)=>{
        
        faqs.forEach((faq)=>{
            faq.classList.remove("faq_active")
            console.log(faq)
        })
        faq.classList.toggle("faq_active")
    })
})

// menu icon

const menuBtn=document.querySelector('.menu_icon')
const nav=document.querySelector(".menuitems")

menuBtn.addEventListener("click", ()=>{
    nav.classList.toggle("menu_active")
    if(menuBtn.classList.contains("icofont-navigation-menu")){
        menuBtn.classList.remove("icofont-navigation-menu")
        menuBtn.classList.add("icofont-close-line")
    }else{
        menuBtn.classList.add("icofont-navigation-menu")
        menuBtn.classList.remove("icofont-close-line")
    }
})
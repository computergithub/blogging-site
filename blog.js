let topArrow=addEventListener('scroll',()=>{
    document.querySelector('.top-arrow').classList.toggle
    ('arrowScroll',window.scrollY>400)
})

        nav = addEventListener('scroll', () => {
            document.querySelector('nav').classList.toggle
            ('scroll', window.scrollY > 10)
                    
            })  

               
let menu=document.querySelector('.list')
let openBtn=document.querySelector('#opan-btn')
let clossBtn=document.querySelector('#closs-btn')
// let body=document.querySelector('body')
openBtn.addEventListener('click',()=>{
    menu.style.display="flex"
    openBtn.style.display="none"
    clossBtn.style.display="block"
    // body.style.backgroundColor="black"
})
const hide = ()=>{
    menu.style.display="none"
    openBtn.style.display="block"
    clossBtn.style.display="none"

}
clossBtn.addEventListener('click',hide)
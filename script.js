function scroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
scroll()


function navbarAnimation(){
    gsap.to("#nav #nav-part1 svg",{
        transform:"translateY(-100%)",
        
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            start:"top 0",
            end:"top -5%",
            scrub:true
    
        }
    })
    
    gsap.to("#nav #nav-part2 #links",{
        transform:"translateY(-100%)",
        opacity:0,
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            start:"top 0",
            end:"top -5%",
            scrub:true
    
        }
    })
    
}
navbarAnimation()

function videoAnimation(){
    var video=document.querySelector("#video-container")
var play=document.querySelector("#play")
video.addEventListener("mouseenter",()=>{
    gsap.to(play,{
        scale:1,
        opacity:1
    })
   
})
video.addEventListener("mouseleave",()=>{
    gsap.to(play,{
        scale:0,
        opacity:0
    })
   
    
})
video.addEventListener("mousemove",(dets)=>{
    gsap.to(play,{
        left:`${dets.x-80}+px`,
        top:`${dets.y-80}+px`
    })
})


}
videoAnimation()

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        delay:0.5,
        duration:0.9,
        stagger:0.3,
        opacity:0
    })
    gsap.from("#video-container",{
        scale:0.9,
        delay:1.3,
        duration:0.5,
        opacity:0
    })
}
loadingAnimation()

function mousemove(){
    document.addEventListener("mousemove",(dets)=>{
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
    })
}
mousemove()

function cursormove(){
    document.querySelector("#child1").addEventListener("mouseenter",()=>{
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(1)"
        })
    })
    document.querySelector("#child1").addEventListener("mouseleave",()=>{
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(0)"
            
        })
    })
    document.querySelector("#child2").addEventListener("mouseenter",()=>{
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(1)",
            // backgrounfColor:"rgb(138, 224, 240)"
        })
    })
    document.querySelector("#child2").addEventListener("mouseleave",()=>{
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(0)"
            
        })
    })
    
    document.querySelector("#child3").addEventListener("mouseenter",()=>{
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(1)",
            // backgrounfColor:"rgb(119, 240, 143)"
        })
    })
    document.querySelector("#child3").addEventListener("mouseleave",()=>{
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(0)"
        })
    })
    
    document.querySelector("#child4").addEventListener("mouseenter",()=>{
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(1)",
            // backgrounfColor:`${rgb(235, 227, 115)}`
        })
    })
    document.querySelector("#child4").addEventListener("mouseleave",()=>{
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(0)"
        })
    })
}
cursormove()
 
// function cursor(){
//     var child=document.querySelectorAll(".child")
// child.forEach((elem)=>{
//      elem.addEventListener("mouseenter",()=>{
//         gsap.to("#cursor",{
//             transform: "translate(-50%,-50%) scale(1)"
//         }) 
//      })
//      elem.addEventListener("mouseleave",()=>{
//         gsap.to("#cursor",{
//             transform: "translate(-50%,-50%) scale(0)"
//         }) 
//      })
// })
// }
// cursor()



gsap.registerPlugin(ScrollTrigger);

var tl =gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})

tl.to("#fanta",{
    top:"120%",
    left:"10%" 
} , 'orange')

tl.to("#orange-cut",{
    top:"160%",
    left:"27%" 
} , 'orange')
tl.to("#orange",{
    top:"165%",
    left:"80%" 
} , 'orange')
tl.to("#leaf2",{
    top:"107%",
    left:"10%" ,
    rotate:"130deg"
} , 'orange')
tl.to("#leaf",{
    rotate:"130deg",
    top:"105%",
    left:"80%" 
} , 'orange')

var tl2 =gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    markers:true,
}})

tl2.from("#green-lemon",{
    rotate:"-360deg",
    top:"140%",
} , 'lemon')

tl2.from("#green-lemon2",{
    rotate:"-360deg",
    top:"130%",
} , 'lemon')

tl2.from("#pepsi",{
    rotate:"-360deg",
    top:"140%",
} , 'lemon')
tl2.from("#coca-cola",{
    rotate:"-360deg",
    top:"140%",
} , 'lemon')

tl2.to("#orange-cut",{
    rotate: "360deg",
    left: "44%",
    top: "210%"
}, 'lemon')

tl2.to("#fanta",{
    rotate: "360deg",
    top: "220%",
    left: "38%",
    height: "370px"
}, 'lemon')



var tl = gsap.timeline ()

tl.from (".loader img", {
    x:0,
    y:0,
    duration:1.3,
    opacity:0,
    rotate:-90
})

tl.to (".loader img", {
    x:0,
    y:0,
    opacity:0,
    duration:0,
    delay:0
})

tl.to (".loader .left-door", {
    x:-1000,
    duration:1.5,
    
})
tl.to (".loader .right-door", {
    x:1000,
    duration:1.5,
}, "-=1.5")

tl.to (".loader", {
    opacity: 0
})

tl.to (".loader", {
    display:"none"
})

tl.from (".page1-top h3 span", {
    y:-100,
    opacity:0,
    duration:0.6,
    stagger:0.3,
    delay:-1.6
})
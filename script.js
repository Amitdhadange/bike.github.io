gsap .from(".img",{
    x:-1200,
    duration:1.5,
    delay:.5,

});
var logo=gsap.from(".nav>ul,.logo,.nav>h2",{
    y:-50,
    duration:.7,
    delay:.5,
    stagger:.3 

});
var mern= gsap.timeline({
    scrollTrigger:{
        trigger:`.page2`,
        start:`top 40%`,
        end:`5% top`,
        // markers:true,
        scrub:.5
    }
})
mern.from(".page2>.mid2>.left>h1",{
    top:`10%`,
    opacity:0,

})
mern.from(".page2>.mid2>.left>button",{
    top:`10%`,
    opacity:0,
})

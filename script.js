//animazioni home

const email = document.getElementById('email');
const phone = document.getElementById('telefono');
const position = document.getElementById('home');


let timeline = new TimelineMax();

email.addEventListener('click', ()=> {

    timeline.to('.contact_2', 0.7, {
        display: 'none',
        opacity: 0,
        ease: Expo.easeInOut
    })

    .to('.contact_3', 0.7, {
        display: 'none',
        opacity: 0,
        ease: Expo.easeInOut
    })
    
    .to('.contact_1', 0.7, {
        display: 'flex',
        opacity: 1,
        ease: Expo.easeInOut
    })

})


phone.addEventListener('click', ()=>{

    timeline.to('.contact_1', 0.7, {
        display: 'none',
        opacity: 0,
        ease: Expo.easeInOut
    })

    .to('.contact_3', 0.7, {
        display: 'none',
        opacity: 0,
        ease: Expo.easeInOut
    })

    .to('.contact_2', 0.7, {
        display: 'flex',
        opacity: 1,
        ease: Expo.easeInOut
    })

})

position.addEventListener('click', ()=>{

    timeline.to('.contact_1', 0.7, {
        display: 'none',
        opacity: 0,
        ease: Expo.easeInOut
    })

    .to('.contact_2', 0.7, {
        display: 'none',
        opacity: 0,
        ease: Expo.easeInOut
    })

    .to('.contact_3', 0.7, {
        display: 'flex',
        opacity: 1,
        ease: Expo.easeInOut
    })

})


TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay span", 2, {
    delay: 3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut
})

TweenMax.from(".ellipse-container", 1, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".yellow", 1, {
    delay: 3.5,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".logo", 1, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".menu ul li", 1, {
    delay: 3.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
}, 0.1)

TweenMax.from(".scrolldown", 1, {
    delay: 3.4,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
})

TweenMax.from(".title", 1, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})

TweenMax.from(".text h2", 1, {
    delay: 3,
    opacity: 0,
    y: 200,
    ease: Expo.easeInOut
})

TweenMax.from(".text p", 1, {
    delay: 3.3,
    opacity: 0,
    y: 200,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".media ul li", 1, {
    delay: 3,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
}, 0.1)

TweenMax.from(".perspective-text", 1, {
    delay: 3.5,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".container_2", 1, {
    delay: 2.5,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".container_3", 1, {
    delay: 2.5,
    y: 50,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".container_4", 1, {
    delay: 2.5,
    y: 50,
    opacity: 0,
    ease: Expo.easeInOut
})



//animazione oggetti 3D

document.getElementById('btn').addEventListener('click', function(){

    gsap.from(".risorsa_1", 1, {
        delay: 1,
        y: -210,
        rotate: -50,
        opacity: 0,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_2", 1.2, {
        delay: 1.2,
        x: -20,
        opacity: 0,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_3", 2, {
        delay: 1,
        x: 260,
        rotate: 100,
        opacity: 0,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_4", 3, {
        delay: 1.2,
        y: 260,
        opacity: 0,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_5", 2.5, {
        delay: 1.4,
        y: -160,
        opacity: 0,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_6", 3, {
        delay: 1.5,
        x: 160,
        opacity: 0,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_7", 4, {
        delay: 1.2,
        y: -180,
        x: 50,
        opacity: 0,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_8", 5, {
        opacity: 0,
        width: 10,
        delay: 1.8,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_9", 4, {
        opacity: 0,
        width: 10,
        delay: 1.8,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_10", 3, {
        delay: 1,
        y: -210,
        rotate: -50,
        opacity: 0,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_11", 4, {
        delay: 2,
        x: 200,
        y: -210,
        opacity: 0,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_12", 4.2, {
        delay: 2.2,
        x: 300,
        y: -210,
        opacity: 0,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_13", 4, {
        opacity: 0,
        width: 15,
        delay: 2,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_14", 2, {
        opacity: 0,
        width: 15,
        delay: 2.2,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_15", 3, {
        opacity: 0,
        width: 5,
        delay: 3,
        ease: Expo.easeInOut
    });
    
    
    gsap.from(".risorsa_16", 5, {
        opacity: 0,
        width: 25,
        delay: 4,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_17", 5, {
        opacity: 0,
        width: 25,
        delay: 4,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_18", 5, {
        opacity: 0,
        width: 25,
        delay: 4,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_19", 5, {
        opacity: 0,
        width: 25,
        delay: 4,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_20", 5, {
        opacity: 0,
        width: 25,
        delay: 4,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_21", 5, {
        opacity: 0,
        width: 25,
        delay: 4,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_22", 5, {
        opacity: 0,
        width: 25,
        delay: 4,
        ease: Expo.easeInOut
    });
    
    gsap.from(".risorsa_23", 5, {
        opacity: 0,
        width: 25,
        delay: 4,
        ease: Expo.easeInOut
    });
})
    

document.addEventListener('mousemove', move)

function move(e) {
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

const portfolio = document.getElementById('bottom-nav');

const close = document.getElementById('close');


portfolio.addEventListener('click', () => {
    let timeline2 = new TimelineMax();
    timeline2.set('.grid', {
        display: 'flex'
    })

    gsap.from(".grid", 0.5, {
        opacity: 0,
        delay: 1,
        ease: Expo.easeInOut
    });


    close.addEventListener('click', () => {
        timeline2.reverse();

    })
})

const skill = document.getElementById('bottom-skill');



skill.addEventListener('click', () => {
    let timeline = new TimelineMax();
    timeline.set('.list', {
        display: 'flex'
    })

    gsap.from(".list-skill", 1, {
        x: 50,
        opacity: 0,
        delay: 1,
        ease: Expo.easeInOut
    });

    gsap.from(".list-skill2", 1, {
        x: 50,
        opacity: 0,
        delay: 1.5,
        ease: Expo.easeInOut
    });

    gsap.from(".list-skill3", 1, {
        x: 50,
        opacity: 0,
        delay: 2,
        ease: Expo.easeInOut
    });

})
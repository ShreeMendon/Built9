let counts1 = setInterval(updated1);
let upto1 = 0;

function updated1() {
    let count_1 = document.getElementById("count1");
    count_1.innerHTML = ++upto1 + '+';
    if (upto1 === 200) {
        clearInterval(counts1);
    }
}
let counts = setInterval(updated);
let upto = 0;

function updated() {
    let count = document.getElementById("count2");
    count.innerHTML = ++upto + '+';
    if (upto === 8) {
        clearInterval(counts);
    }
}
let counts2 = setInterval(updated2);
let upto2 = 0;

function updated2() {
    let count_2 = document.getElementById("count3");
    count_2.innerHTML = ++upto2 + '+';
    if (upto2 === 150) {
        clearInterval(counts2);
    }
}
$('.owl-client').owlCarousel({
    loop: true,
    lazyLoad: true,
    margin: 0,
    nav: false,
    dot: false,
    autoplay: true,
    autoplayTimeout: 800,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

$('.owl-testimonial').owlCarousel({
    items: 3,
    loop: true,
    lazyLoad: true,
    margin: 10,
    nav: false,
    dot: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

// gallery filter

// const filterButtons = document.querySelector("#filter-btns").children;
// const items = document.querySelector(".gallery-grid").children;

// for (let i = 0; i < filterButtons.length; i++) {
//     filterButtons[i].addEventListener("click", function() {
//         for (let j = 0; j < filterButtons.length; j++) {
//             filterButtons[j].classList.remove("active")
//         }
//         this.classList.add("active");
//         const target = this.getAttribute("data-target")

//         for (let k = 0; k < items.length; k++) {
//             items[k].style.display = "none";
//             if (target == items[k].getAttribute("data-id")) {
//                 items[k].style.display = "block";
//             }
//             if (target == "all") {
//                 items[k].style.display = "block"
//             }
//         }
//     })
// }



window.onload = function() {
    // Get all filter buttons
    var filterButtons = document.querySelectorAll('.filter-btns button');

    // Get all gallery images
    var images = document.querySelectorAll('#gallery .image');

    // Attach click event listener to each filter button
    for (var i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener('click', filterImages);
    }

    function filterImages() {
        var category = this.getAttribute('data-category');

        // Show all images if the filter is set to 'all'
        if (category === 'all') {
            for (var i = 0; i < images.length; i++) {
                images[i].style.display = 'block';
            }
        } else {
            // Hide images that don't belong to the selected category
            for (var i = 0; i < images.length; i++) {
                if (images[i].getAttribute('data-category') === category) {
                    images[i].style.display = 'block';
                } else {
                    images[i].style.display = 'none';
                }
            }
        }
    }
};
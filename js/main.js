var flag = true;
document.getElementById("btnSend").addEventListener("click", function(){flag=true});
$(document).ready(function() {
    "use strict";

    populateEvents();
    menu();
    icons();
    text();
    ddl();
    insertImage();
    magnifPopup();
    insertRadioBtn();
    insertCb();
    imagesDesing();
    couponPopUp();

    document.getElementById("btnSend").addEventListener("click", formValidate);

    //SERVICE SHOW
    $(':radio[name=radio]').change(function() {
        $(".showService").show("slow")
    });

    //BACK TO TOP AROW
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    //PORTFOLIO IMG
    const appear = document.querySelector('.appear');
    const cb = function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('inview');
            } else {
                entry.target.classList.remove('inview');
            }
        });
    }
    const io = new IntersectionObserver(cb);
    io.observe(appear);

    function magnifPopup() {
        $('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }
})

function couponPopUp() {
    const couponContainer = document.querySelector(".coupon-container");
    const closeBtn = document.querySelector(".coupon-container .close");
    const redeemBtn = document.querySelector(".coupon-container .btn");

    setTimeout(() => {
        couponContainer.classList.add("active");
    }, 5000);

    closeBtn.addEventListener("click", () => {
        couponContainer.classList.remove("active");
    });

    redeemBtn.addEventListener("click", () => {
        couponContainer.classList.remove("active");
    });
}

function imagesDesing() {
    let ispis = ""
    let image = ["Weddings", "Birthdays", "Christenings"];

    image.forEach(e => {

        if (e == "Weddings") {
            ispis += `<div class="carousel-item active">
                    <img src="images/people/${e.toLowerCase()}.jpg" class="img-fluid team-image" alt="${e}">
                    <div class="team-thumb bg-warning">
                        <h3 class="text-white mb-0">${e}</h3>
                    </div>
                </div>`
        } else {
            ispis += `<div class="carousel-item">
            <img src="images/people/${e.toLowerCase()}.jpg" class="img-fluid team-image" alt="${e}">
            <div class="team-thumb bg-warning">
                <h3 class="text-white mb-0">${e}</h3>
            </div>
        </div>`
        }

    });
    document.getElementById("inputImg").innerHTML = ispis;

}

function menu() {
    let ispis = "<ul class='navbar-nav mx-auto'>"
    let menu = ["Home", "About", "Portfolio", "Events", "Contact", "Author"];
    menu.forEach(element => {
        ispis += `<li class="nav-item"><a class="nav-link" href="#${element.toLowerCase()}">${element}</a></li>`
    });
    ispis += '</ul>';
    document.getElementById("navbarNav").innerHTML = ispis;
}

function icons() {
    var social = "<ul class='social-icon'>"
    let menu = ["facebook", "whatsapp", "instagram", "youtube", "diagram-3", "file-earmark-pdf"];
    let href = ["https://www.facebook.com/Fotostudiolazarevic",
        "https://wa.me/+381601499117",
        "https://www.instagram.com/lazar_lazarevic_photography/",
        "https://www.youtube.com/@Lazaryss7",
        "informations/sitemap.xml",
        "informations/documentation.pdf"
    ]

    menu.forEach(function callback(element, index) {
        social += `<li><a href="${href[index]}"  target="_blank" class="social-icon-link bi-${element}"></a></li>`
    });
    social += '</ul>';
    document.getElementById("icons").innerHTML = social;
}

function text() {
    let ispis = '';
    let p = ["Photography services that we offer includes portrait photography, events photography, real estate photography and more.",
        "From the beggining of our journey, we've made a lot of memories together with our clients that made us perfect for your occasions.",
        "Some moments deserve more than a selfie, especially moments that are shared with family. Let us turn your moments together into memories that last for a lifetime."
    ];

    p.forEach(element => {
        ispis += `<p class= "textBr">${element}</p>`
    });
    document.querySelector("#text").innerHTML = ispis;
}

function insertImage() {
    let ispis = '';
    const list = document.getElementsByClassName("insert");
    let src = [{
            type: "birthday2",
            title: "Nevena's Birthday"
        },
        {
            type: "wedding2",
            title: "Ana and Marko Wedding"
        },
        {
            type: "wedding1",
            title: "Nikolina and Dragan Wedding"
        },
        {
            type: "newYear",
            title: "Pictures for New Year calendars"
        }
    ];

    for (let i = 0; i < src.length; i++) {
        ispis = `<a href="images/portfolio/${src[i].type}.jpg" class="image-popup">
                    <img src="images/portfolio/${src[i].type}.jpg" class="img-fluid portfolio-image" alt="">
                </a>
                <div class="portfolio-info">                     
                    <h4 class="portfolio-title mb-0">${src[i].title}</h4>
                </div>`
        list[i].innerHTML = ispis;
    }
}

function insertRadioBtn() {
    let ispis = '';
    const radioBtn = document.getElementsByClassName("inputRadio");
    let typeOfCelebration = ["Wedding", "Birthday", "Christening"];

    typeOfCelebration.forEach(function callback(element, index) {
        ispis = `<div class="form-check">
        <input type="radio" name="radio" class="form-check-input fnt">
        
        <label class="form-label">${element}</label></div>`
        radioBtn[index].innerHTML = ispis;
    });
}

function insertCb() {
    let ispis = '';
    const cb = document.getElementsByClassName("cb");
    let typeOfServices = ["Photography", "Video recording", "Drone video recording"];

    typeOfServices.forEach(function callback(element, index) {
        ispis = `<div class="form-check">
        <input type="checkbox" name="checkbox" class="form-check-input fnt">
        
        <label class="form-label">${element}</label></div>`
        cb[index].innerHTML = ispis;
    });
}

function ddl() {
    let ispisDDL = "<label class='form-label'>Which time suits you:</label><select id='time' name='time'><option value='0'>Choose..</option>"
    let valueDDL = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
    valueDDL.forEach(element => {
        ispisDDL += `<option value="${element}">${element}h</option>`
    });

    ispisDDL += "</select>";
    document.getElementById("ddl").innerHTML = ispisDDL;
}

function formValidate() {
    var nameContact = document.getElementById("name");
    var email = document.getElementById("email");
    var radioBtns = document.getElementsByName("radio");
    var cb = document.getElementsByName("checkbox");
    var date = document.getElementById("date");
    var ddlTime = document.getElementById("time");

    var reName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{1,11}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{1,11})+$/;
    var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var messageFullName = "You didn't enter Full Name correctly! Example: John Doe.";
    var messageEmail = "You didn't enter Email correctly! Example: john.doe@gmail.com";
    var messageRadio = "You have to chose one of occasion!";
    var messageCb = "You have to chose one of services!"
    var messageDate = "You must select date, and it must be in future!";
    var messageTime = "You must chose time for your occasion!";

    checkRegex(reName, nameContact, messageFullName);
    checkRegex(reEmail, email, messageEmail);

    let valueRadio = "";
    for (let i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
            valueRadio = radioBtns[i].value;
            break;
        }
    }

    let valueCb = "";
    for (let i = 0; i < cb.length; i++) {
        if (cb[i].checked) {
            valueCb += cb[i].value + " ";
        }
    }

    serviceChecks(valueRadio, radioBtns, messageRadio);
    if (valueRadio != "") {
        serviceChecks(valueCb, cb, messageCb);
    }

    dateValidation(date, messageDate);
    timeValidation(ddlTime, messageTime);

    if (flag) {
        let divSuccess = document.querySelector("#success");
        divSuccess.setAttribute("class", "alert alert-success mt-4");

        divSuccess.innerHTML = `Thanks ${nameContact.value}, we will reach You as soon as possible!`;

        document.getElementById("form").reset();
        console.log(errorCount)
    }
}


function checkRegex(regex, object, message) {
    if (!regex.test(object.value)) {
        object.nextElementSibling.classList.remove("hide");
        object.nextElementSibling.innerHTML = message;
        flag=false;
    } else {
        object.nextElementSibling.classList.add("hide");
    }
}

function serviceChecks(checkedElements, array, message) {
    if (checkedElements == "") {
        array[array.length - 1].parentElement.parentElement.nextElementSibling.classList.remove("hide");
        array[array.length - 1].parentElement.parentElement.nextElementSibling.innerHTML = message;
        flag=false;
    } else {
        array[array.length - 1].parentElement.parentElement.nextElementSibling.classList.add("hide");
    }
}

function dateValidation(date, message) {
    var selectedDate = new Date(date.value);

    var now = new Date();

    if (isNaN(selectedDate) || selectedDate < now) {
        date.parentElement.nextElementSibling.classList.remove("hide");
        date.parentElement.nextElementSibling.innerHTML = message;
        flag=false;
    } else {
        date.parentElement.nextElementSibling.classList.add("hide");
    }
}

function timeValidation(time, message) {
    let ddlTimeValue = time.options[time.selectedIndex].value;

    if (ddlTimeValue == "0") {
        time.parentElement.parentElement.nextElementSibling.classList.remove("hide");
        time.parentElement.parentElement.nextElementSibling.innerHTML = message;
        flag=false;
    } else {
        time.parentElement.parentElement.nextElementSibling.classList.add("hide");
    }

}

function populateEvents() {

    let ispis = "";
    let events = [{
            src: "anniversary",
            alt: "8th anniversary",
            bg: "primary",
            time: "Upcoming",
            title: "Come and celebrate with us on the 8th anniversary of our opening!",
            happend: "January 30, 2023"
        },
        {
            src: "calendars",
            alt: "New Year calendars",
            bg: "success",
            time: "Current",
            title: "Photo shooting for New Year's calendars",
            happend: "Still going"
        }
    ]

    events.forEach(e => {
        ispis += `<div class="news-thumb news-two-column d-flex flex-column flex-lg-row" data-aos="fade-up">
                        <div class="news-top w-100 news-image-hover news-image-hover-${e.bg}" data-aos="fade-up">
                             <img src="images/news/${e.src}.jpg" class="img-fluid news-image" alt="${e.alt}" />
                            <div class="news-category bg-${e.bg} text-white">${e.time}</div>
                        </div>
                        <div class="news-bottom w-100">
                            <div class="news-text-info">
                                 <h5 class="news-title news-title-link">
                                 ${e.title}
                                </h5>
                                <span class="text-muted">
                                     <i class="bi-geo-alt-fill me-1 mb-2 mb-lg-0"></i>
                                    Obrenovac, ${e.happend}
                                 </span>
                            </div>
                        </div>
                        </div>
                    `
    });

    document.getElementById("eventSpace").innerHTML = ispis;
}

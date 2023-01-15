const navContainer = document.querySelector('.nav-container')
const servContainer = document.querySelector('.services-container')
const swiperWrapper = document.querySelector(".swiper-wrapper")


const navItems = [ 
    {name: 'Home', href: '#'},
    {name: 'Find a doctor', href: '#'},
    {name: 'apps', href: '#'},
    {name: 'testimonials', href: '#'},
    {name: 'about us', href: '#'},
]

navItems.forEach((item, index) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.innerText = item.name
    a.href = item.href
    a.classList.add('text-[#1F1534]/50', 'capitalize', 'cursor-pointer')
    if (index === 0) {
        a.classList.add('text-[#1F1534]', 'font-bold');
    }
    li.appendChild(a)
    navContainer.appendChild(li)
})

const services = [
    {label: 'Search doctor', paragraph: 'Choose your doctor from thousands of specialist, general, and trusted hospitals', icon: '/dist/icons/search-doctor.svg'},
    {label: 'Online pharmacy', paragraph: 'Buy  your medicines with our mobile application with a simple delivery system', icon: '/dist/icons/online-pharmacy.svg'},
    {label: 'Consultation', paragraph: 'Free consultation with our trusted doctors and get the best recomendations', icon: '/dist/icons/consultation.svg'},
    {label: 'Details info', paragraph: 'Free consultation with our trusted doctors and get the best recomendations', icon: '/dist/icons/details-info.svg'},
    {label: 'Emergency care', paragraph: 'You can get 24/7 urgent care for yourself or your children and your lovely family', icon: '/dist/icons/emergency-care.svg'},
    {label: 'Tracking', paragraph: 'Track and save your medical history and health data', icon: '/dist/icons/tracking.svg'},
]


services.forEach(item => {
    const div = document.createElement('div');
    const img = document.createElement('img')
    const h4 = document.createElement('h4')
    const p = document.createElement('p');

    img.src = item.icon
    h4.innerText = item.label
    p.innerText = item.paragraph
    
    div.classList.add('bg-white', 'p-8', 'rounded-lg', 'drop-shadow-lg')
    img.classList.add('w-18')
    h4.classList.add('font-bold', 'text-[24px]', 'pt-6')
    p.classList.add('text-[#7D7987]', 'text-[16px]', 'font-light', 'pt-2', 'leading-6')


    div.append(img, h4, p)
    servContainer.appendChild(div)
})


const reviews = [
    {
        name: "John Doe",
        job: "Founder Circle",
        userImg: "/dist/images/userProfileImg.png",
        review: "This service is amazing! I highly recommend it."
    },
    {
        name: "Jane Smith",
        job: "Founder Circle",
        userImg: "/dist/images/userProfileImg.png",
        review: "I had a great experience with this service. The doctors are very friendly and helpful."
    },
    {
        name: "Robert Johnson",
        job: "Founder Circle",
        userImg: "/dist/images/userProfileImg.png",
        review: "I've been using this service for a few months now and it's been great. The virtual consultations are very convenient."
    },
    {
        name: "Robert Johnson",
        job: "Founder Circle",
        userImg: "/dist/images/userProfileImg.png",
        review: "I've been using this service for a few months now and it's been great. The virtual consultations are very convenient."
    },
    {
        name: "Robert Johnson",
        job: "Founder Circle",
        userImg: "/dist/images/userProfileImg.png",
        review: "I've been using this service for a few months now and it's been great. The virtual consultations are very convenient."
    },
    {
        name: "Robert Johnson",
        job: "Founder Circle",
        userImg: "/dist/images/userProfileImg.png",
        review: "I've been using this service for a few months now and it's been great. The virtual consultations are very convenient."
    },
    {
        name: "Robert Johnson",
        job: "Founder Circle",
        userImg: "/dist/images/userProfileImg.png",
        review: "I've been using this service for a few months now and it's been great. The virtual consultations are very convenient."
    },
];


reviews.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("swiper-slide");
  
  const grid = document.createElement("div");
  grid.classList.add("grid", "grid-cols-1","lg:grid-cols-4", "justify-between", "w-[1000px]");
  
  const gridCol1 = document.createElement("div");
  gridCol1.classList.add("col-span-2", 'flex', 'flex-row', 'gap-5', 'items-center');
  
  const gridCol1Text = document.createElement("div");
  gridCol1Text.classList.add("flex", "flex-col", "items-start", "justify-center");
  
  const h4 = document.createElement("h4");
  h4.innerText = item.name;
  h4.classList.add("text-white", "font-bold", "text-[22px]");
  
  const p = document.createElement("p");
  p.innerText = item.job;
  p.classList.add("text-white", "font-light", "text-[18px]");
  
  gridCol1Text.append(h4, p);
  
  const img = document.createElement("img");
  img.src = item.userImg;
  img.classList.add('rounded-full', 'w-24');
  
  gridCol1.append(img, gridCol1Text);
  
  const gridCol2 = document.createElement("div");
  gridCol2.classList.add("col-span-2");
  
  const p2 = document.createElement("p");
  p2.innerText = item.review;
  p2.classList.add('text-white', 'text-[19px]', 'leading-8');
  
  gridCol2.appendChild(p2);
  
  grid.append(gridCol1, gridCol2);
  div.appendChild(grid);
  swiperWrapper.appendChild(div);
});

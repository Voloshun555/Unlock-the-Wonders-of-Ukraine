(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const c="/Unlock-the-Wonders-of-Ukraine/image/our-tours/forest.jpg",l="/Unlock-the-Wonders-of-Ukraine/image/our-tours/forest@2x.jpg",u="/Unlock-the-Wonders-of-Ukraine/image/our-tours/river.jpg",d="/Unlock-the-Wonders-of-Ukraine/image/our-tours/river@2x.jpg",f="/Unlock-the-Wonders-of-Ukraine/image/our-tours/home.jpg",m="/Unlock-the-Wonders-of-Ukraine/image/our-tours/home@2x.jpg",g=[{id:1,image:c,image2:l,title:"Lake Synevyr and Shipit waterfall",info:["Departure from Lviv (07:00) / Stryi (08:00)","Pylypets (overview of Shipit waterfall and lunch)","Synevyr Pass (photographing and viewing of Carpathian panoramas)",'"Synevyr" National Park (brown bear rehabilitation center and transition to the lake)',"Stryi (21:00)/Lviv (return by 22:00)"],price:"2000 UAH"},{id:2,image:f,image2:m,title:"Ancient History & Vibrant Present",info:["Departure from Kiev (08:00)","St. Sophia's Cathedral (iconic UNESCO World Heritage site)","Golden Gate (historical monument visit)","Bessarabsky Market (tasting local delicacies)","Kiev Pechersk Lavra (exploration of the significant monastery)","Return to Kiev by 20:00"],price:"3000 UAH"},{id:3,image:u,image2:d,title:"Black Sea Jewel",info:["Departure from Odessa (08:00)","Primorsky Boulevard (city's scenic walk)","Potemkin Steps (historical site and great city view)","Odessa Opera and Ballet Theatre (exterior visit)","Lunch at a local seafood restaurant","Return to Odessa by 20:00"],price:"3500 UAH"}],n=document.querySelector(".list-our-tours");function p(){return g.map(a=>{const{image:r,image2:o,title:i,info:e}=a,s=e.map(t=>`<li class="characteristic-item"> ${t} </li>`).join("");return`
        <li class="our-tours-item">
          <picture>
            <source 
              media="(max-width: 767px)" 
              srcset="${r} 1x, ${o} 2x"
            >
            <img
              src="${r}"
              alt="${i}"
              loading="lazy"
              class="img-tours"
            />
          </picture>
<div class="wrapper-yours">
<h3 class="title-tours">${i}</h3>
          <ul class="characteristic-list">
            ${s}
          </ul>

          <div class="included-section">
            <p class="text-include">Included:</p>
            <ul class="included-list">
              <li class="included-item"> 
                <svg class="included-icon">
                  <use href="./src/assets/svg/symbol-defs.svg#icon-bus"></use>
                </svg>
                <p>Transfer</p>
              </li>
              <li class="included-item"> 
                <svg class="included-icon">
                  <use href="./src/assets/svg/symbol-defs.svg#icon-id-card"></use>
                </svg>
                 <p>Travel insurance</p>
              </li>
              <li class="included-item"> 
                <svg class="included-icon">
                  <use href="./src/assets/svg/symbol-defs.svg#icon-face"></use>
                </svg>
                 <p>Professional guide</p>
              </li>
              <li class="included-item"> 
                <svg class="included-icon">
                  <use href="./src/assets/svg/symbol-defs.svg#icon-ticket"></use>
                </svg>
                 <p>Travel insurance</p>
              </li>
            </ul>
          </div>
          <button class="btn-tours-book">Book<button/>
</div>
          
        </li>
      `}).join("")}n?n.insertAdjacentHTML("beforeend",p()):console.warn("Елемент .list-our-tours не знайдено на сторінці.");

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire709e;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire709e=o);var l=o("4ukh0");const i=JSON.parse(localStorage.getItem("watchedList"))||[],d=JSON.parse(localStorage.getItem("queueList"))||[],a=document.getElementById("add-to-watched--btn"),r=document.getElementById("add-to-queue--btn"),c=document.getElementById("movie-modal--close-btn"),m=document.getElementById("movie-modal");function s(e){localStorage.setItem("queueList",JSON.stringify(e)),m.style.display="none",location.reload()}function u(e){localStorage.setItem("watchedList",JSON.stringify(e)),m.style.display="none",location.reload()}c.addEventListener("click",(()=>{m.style.display="none"})),window.openModal=function(e){document.getElementById("movie-modal").style.display="flex",function(e){const t="https://image.tmdb.org/t/p/",n=e,o="en",c=document.getElementById("movie-modal--image"),g=document.getElementById("movie-modal-title"),y=document.getElementById("movie-modal-votes"),v=document.getElementById("movie-modal-popularity"),f=document.getElementById("movie-modal-original-title"),p=document.getElementById("movie-modal-genre"),h=document.getElementById("movie-modal-about"),E=document.getElementById("add-to-watched--btn"),I=document.getElementById("add-to-queue--btn"),w=d.filter((t=>t!==e)),x=i.filter((t=>t!==e));w.length!==d.length?(I.textContent="Remove from queue",r.addEventListener("click",(()=>{s(w)}))):d&&w.length!==d.length||(I.textContent="Add to queue",r.addEventListener("click",(()=>{!function(){if(d){d.includes(r.value)||(d.push(r.value),localStorage.setItem("queueList",JSON.stringify(d)))}else d=JSON.stringify([r.value]);m.style.display="none",location.reload()}(),u(i.filter((t=>t!==e)))})));x.length!==i.length?(E.textContent="Remove from watched",a.addEventListener("click",(()=>{u(x)}))):i&&x.length!==i.length||(E.textContent="Add to watched",a.addEventListener("click",(()=>{!function(){const e=JSON.parse(localStorage.getItem("watchedList"))||[];if(e){e.includes(a.value)||(e.push(a.value),localStorage.setItem("watchedList",JSON.stringify(e)))}else e=JSON.stringify([a.value]);m.style.display="none",location.reload()}(),s(d.filter((t=>t!==e)))})));fetch(`https://api.themoviedb.org/3/movie/${n}?api_key=${l.API_KEY}&language=${o}`).then((e=>e.json())).then((e=>{c.src=`${t}w500${e.poster_path}`,g.textContent=e.title,y.textContent=e.vote_average+" / "+e.vote_count,v.textContent=e.popularity,f.textContent=e.original_title;const n=e.genres.map((e=>e.name)).join(" | ");p.textContent=n,h.textContent=e.overview,a.value=e.id,r.value=e.id})).catch((e=>console.error(e)))}(e)};
//# sourceMappingURL=myLibrary.2d2afff2.js.map
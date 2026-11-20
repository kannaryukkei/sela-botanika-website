(function(){
  "use strict";
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Responsive navigation with keyboard dismissal and focus return.
  var menuToggle = document.getElementById("menuToggle");
  var primaryNav = document.getElementById("primaryNav");
  function closeMenu(returnFocus){
    if(!menuToggle || !primaryNav) return;
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded","false");
    if(returnFocus) menuToggle.focus();
  }
  if(menuToggle && primaryNav){
    menuToggle.addEventListener("click",function(){
      var open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded",String(!open));
      primaryNav.classList.toggle("is-open",!open);
      if(!open){
        var first = primaryNav.querySelector("a");
        if(first) first.focus();
      }
    });
    primaryNav.querySelectorAll("a").forEach(function(link){
      link.addEventListener("click",function(){ closeMenu(false); });
    });
    document.addEventListener("keydown",function(event){
      if(event.key === "Escape" && primaryNav.classList.contains("is-open")) closeMenu(true);
    });
  }

  // Room reader: client-side directional guidance only, never a plant diagnosis.
  var roomForm = document.getElementById("roomForm");
  var roomResult = document.getElementById("roomResult");
  var roomCopy = {
    shade:{
      light:"Naungan",
      lightNote:"Mulai dengan memeriksa seberapa jauh titik pot dari sumber cahaya.",
      care:{
        light:["Komposisi ringkas","Pilih satu bentuk yang mudah diamati dan letakkan di titik yang paling terang di antara pilihan Anda.","Batasi jumlah pot agar perubahan daun mudah terlihat."],
        steady:["Lapisan dedaunan","Susun dua tingkat tinggi yang berbeda dan amati responsnya dari minggu ke minggu.","Sisakan ruang untuk memeriksa media dan daun."],
        hands:["Sudut observasi","Jadikan satu kelompok kecil sebagai latihan mengamati perubahan cahaya dan kelembapan.","Catat perubahan; jangan memindahkan pot berulang kali tanpa alasan."]
      }
    },
    soft:{
      light:"Cahaya lembut",
      lightNote:"Catat durasi cahaya tidak langsung dan perubahan bayangan.",
      care:{
        light:["Satu titik fokus","Mulai dari satu tanaman dengan bentuk yang kuat dan pot yang proporsional.","Tempatkan dekat area yang mudah diperiksa."],
        steady:["Kelompok berimbang","Padukan satu tanaman utama dengan satu aksen kecil, tanpa menutup jalur gerak.","Gunakan posisi yang mudah dijangkau saat perawatan."],
        hands:["Komposisi bertahap","Uji dua tekstur daun dalam satu area lalu amati perubahan selama beberapa minggu.","Simpan catatan cahaya dan kondisi media."]
      }
    },
    bright:{
      light:"Terang tersaring",
      lightNote:"Perhatikan panas di dekat kaca, arah sinar, dan perubahan intensitas sepanjang hari.",
      care:{
        light:["Aksen yang terukur","Pilih satu titik dengan perlindungan dari panas berlebih dan sisakan ruang di sekitarnya.","Amati perubahan saat cuaca dan musim berganti."],
        steady:["Komposisi berlapis","Gunakan variasi tinggi dan bentuk, tetapi pertahankan akses untuk memeriksa setiap pot.","Pastikan posisi tidak mengganggu sirkulasi."],
        hands:["Titik koleksi kecil","Mulai dengan kelompok terbatas dan catat respons tiap pot secara terpisah.","Jangan menyamakan kebutuhan air hanya karena pot berada berdekatan."]
      }
    }
  };
  var careNames={light:"Sesekali",steady:"Teratur",hands:"Suka terlibat"};
  var spaceNames={compact:"Sudut kecil",shared:"Ruang bersama",work:"Ruang usaha"};
  function selected(name){
    var el=document.querySelector('input[name="'+name+'"]:checked');
    return el ? el.value : "";
  }
  function updateRoom(){
    if(!roomForm || !roomResult) return;
    var light=selected("light"),care=selected("care"),space=selected("space");
    var item=roomCopy[light] && roomCopy[light].care[care];
    if(!item) return;
    var scaleNote=space==="work" ? "Untuk ruang usaha, tentukan siapa yang memeriksa tanaman di antara jam sibuk." :
      space==="shared" ? "Untuk ruang bersama, jaga jarak dari jalur orang bergerak dan area yang sering disentuh." :
      "Untuk sudut kecil, prioritaskan satu titik yang mudah diamati dan tidak menghalangi aktivitas.";
    roomResult.innerHTML =
      '<div class="result-top"><span class="result-label">ARAH AWAL / DIPERBARUI</span><span class="result-mark" aria-hidden="true">↗</span></div>'+
      '<p class="result-overline">Mulai dengan</p>'+
      '<h3>'+item[0]+'</h3>'+
      '<p class="result-copy">'+item[1]+' '+scaleNote+'</p>'+
      '<div class="result-details"><span>Cahaya<b id="resultLight">'+roomCopy[light].light+'</b></span><span>Ritme<b id="resultCare">'+careNames[care]+'</b></span><span>Skala<b id="resultSpace">'+spaceNames[space]+'</b></span></div>'+
      '<p class="result-caveat">'+item[2]+' '+roomCopy[light].lightNote+' Ini bukan diagnosis botanis atau jaminan kecocokan.</p>';
  }
  if(roomForm){
    roomForm.addEventListener("change",updateRoom);
    updateRoom();
  }

  // Room styling tabs.
  var tabData={
    home:{
      label:"CATATAN UNTUK RUMAH",
      title:"Mulai dari sudut yang sering Anda lihat.",
      points:["Jaga jalur berjalan dan bukaan pintu.","Pilih alas yang sesuai dengan permukaan lantai.","Pastikan rutinitas rawat tidak bergantung pada satu orang saja."]
    },
    work:{
      label:"CATATAN UNTUK RUANG USAHA",
      title:"Tanaman harus hidup berdampingan dengan aktivitas.",
      points:["Hindari area servis, pintu, dan jalur kerja.","Tentukan penanggung jawab pemeriksaan media.","Pilih penempatan yang tidak mengganggu pelanggan atau staf."]
    }
  };
  var spacePanel=document.getElementById("spacePanel");
  document.querySelectorAll("[data-space-tab]").forEach(function(button){
    button.addEventListener("click",function(){
      var key=button.getAttribute("data-space-tab");
      var data=tabData[key];
      document.querySelectorAll("[data-space-tab]").forEach(function(other){
        var active=other===button;
        other.classList.toggle("is-active",active);
        other.setAttribute("aria-pressed",String(active));
      });
      if(spacePanel && data){
        spacePanel.innerHTML='<span class="panel-kicker">'+data.label+'</span><h3>'+data.title+'</h3><ul>'+data.points.map(function(point){return "<li>"+point+"</li>";}).join("")+'</ul>';
      }
    });
  });

  // Discovery search and category filters.
  var itemSearch=document.getElementById("itemSearch");
  var itemCards=Array.prototype.slice.call(document.querySelectorAll(".item-card"));
  var filterButtons=Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var itemCount=document.getElementById("itemCount");
  var emptyState=document.getElementById("emptyState");
  var activeFilter="all";
  function filterItems(){
    var query=itemSearch ? itemSearch.value.trim().toLowerCase() : "";
    var count=0;
    itemCards.forEach(function(card){
      var categoryMatch=activeFilter==="all" || card.getAttribute("data-category")===activeFilter;
      var textMatch=card.textContent.toLowerCase().indexOf(query)!==-1;
      var show=categoryMatch && textMatch;
      card.hidden=!show;
      if(show) count++;
    });
    if(itemCount) itemCount.textContent=count+" entri ditampilkan";
    if(emptyState) emptyState.hidden=count!==0;
  }
  filterButtons.forEach(function(button){
    button.addEventListener("click",function(){
      activeFilter=button.getAttribute("data-filter");
      filterButtons.forEach(function(other){
        var active=other===button;
        other.classList.toggle("is-active",active);
        other.setAttribute("aria-pressed",String(active));
      });
      filterItems();
    });
  });
  if(itemSearch) itemSearch.addEventListener("input",filterItems);
  var resetItems=document.getElementById("resetItems");
  if(resetItems) resetItems.addEventListener("click",function(){
    if(itemSearch) itemSearch.value="";
    activeFilter="all";
    filterButtons.forEach(function(button){
      var active=button.getAttribute("data-filter")==="all";
      button.classList.toggle("is-active",active);
      button.setAttribute("aria-pressed",String(active));
    });
    filterItems();
  });
  filterItems();

  // Non-sending local note form.
  var noteForm=document.getElementById("noteForm");
  var formStatus=document.getElementById("formStatus");
  if(noteForm){
    noteForm.addEventListener("submit",function(event){
      event.preventDefault();
      if(formStatus) formStatus.textContent="Simulasi selesai. Tidak ada pesan yang dikirim atau data yang disimpan.";
    });
    noteForm.addEventListener("reset",function(){
      if(formStatus) formStatus.textContent="Belum ada catatan yang diproses.";
    });
  }

  // Current navigation marker, including when GSAP is unavailable.
  var navLinks=Array.prototype.slice.call(document.querySelectorAll('.primary-nav a[href^="#"]'));
  var sections=Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  function setActive(id){
    navLinks.forEach(function(link){
      if(link.getAttribute("href")==="#"+id) link.setAttribute("aria-current","location");
      else link.removeAttribute("aria-current");
    });
  }
  if("IntersectionObserver" in window){
    var navObserver=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){if(entry.isIntersecting) setActive(entry.target.id);});
    },{rootMargin:"-35% 0px -55% 0px"});
    sections.forEach(function(section){navObserver.observe(section);});
  }

  // Scroll progress and purposeful editorial reveals. All content remains visible without GSAP.
  var progress=document.getElementById("scrollProgress");
  function updateProgress(){
    if(!progress) return;
    var root=document.documentElement;
    var max=root.scrollHeight-root.clientHeight;
    var ratio=max>0 ? root.scrollTop/max : 0;
    progress.style.transform="scaleX("+ratio+")";
  }
  if(!reduceMotion && window.gsap && window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(progress,{scaleX:1,ease:"none",scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:0.35}});
    gsap.utils.toArray(".reveal").forEach(function(el){
      gsap.from(el,{y:22,opacity:0,duration:0.7,ease:"power2.out",immediateRender:false,scrollTrigger:{trigger:el,start:"top 88%",once:true}});
    });
    gsap.from(".hero-copy > *",{y:16,opacity:0,duration:0.7,stagger:0.08,ease:"power2.out",delay:0.12});
  }else{
    window.addEventListener("scroll",updateProgress,{passive:true});
    updateProgress();
  }
})();
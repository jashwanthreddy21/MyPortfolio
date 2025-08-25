
/* ========= Mobile Menu ========= */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Animate hamburger (optional)
  menuToggle.classList.toggle('open');
});


/* ========= Home Text ========= */
// Rotating Hero Text
document.addEventListener("DOMContentLoaded", () => {
  const sets = document.querySelectorAll(".text-rotator .text-set");
  let index = 0;
  let animating = false;

  function wrapChars(el) {
  const isBreakMobile = el.classList.contains('break-mobile');
  const raw = el.textContent.trim();
  el.setAttribute('data-text', raw);

  el.innerHTML = raw.split('').map((ch, i) => {
    // If space:
    if (ch === ' ') {
      // For .break-mobile allow a real space → browser can wrap
      if (isBreakMobile) {
        return `<span class="char space" style="animation-delay:${i * 0.05}s"> </span>`;
      }
      // For others, force no-break
      else {
        return `<span class="char space" style="animation-delay:${i * 0.05}s">&nbsp;</span>`;
      }
    }
    return `<span class="char" style="animation-delay:${i * 0.05}s">${ch}</span>`;
  }).join('');
}

  sets.forEach(set => {
    const h1 = set.querySelector(".glitch-text");
    wrapChars(h1);
  });

  function animateIn(set) {
    const chars = set.querySelectorAll(".char");
    chars.forEach((c, i) => {
      c.classList.remove("out");
      setTimeout(() => c.classList.add("in"), i * 50);
    });
  }

  function animateOut(set, callback) {
    const chars = set.querySelectorAll(".char");
    chars.forEach((c, i) => {
      setTimeout(() => {
        c.classList.remove("in");
        c.classList.add("out");
        if (i === chars.length - 1 && callback) callback();
      }, i * 30);
    });
  }

  function rotate() {
    if (animating) return;
    animating = true;

    const current = sets[index];
    const nextIndex = (index + 1) % sets.length;
    const next = sets[nextIndex];

    animateOut(current, () => {
      current.classList.remove("active");
      next.classList.add("active");
      animateIn(next);
      index = nextIndex;
      animating = false;
    });
  }

  // Start first phrase
  sets[0].classList.add("active");
  animateIn(sets[0]);

  // Rotate every 4.5s
  setInterval(rotate, 4500);
});



/* ========= Active Nav on Scroll ========= */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

function updateActiveNav() {
  let scrollPos = window.scrollY + 100; // offset for navbar height
  let currentId = "";

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      currentId = section.id;
    }
  });

  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + currentId) {
      a.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);


/* ========= Smooth Scroll (for internal links) ========= */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // close mobile menu after click
    navLinks.classList.remove('active');
  });
});

/* ========= Services Tabs ========= */
const tabs = document.querySelectorAll('.tab-item');
const panels = document.querySelectorAll('.content-panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const id = tab.getAttribute('data-tab');
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById(id);
    if (panel) panel.classList.add('active');
  });
});

/* ========= Skills: Animated Fill + % Counter ========= */
const skillBars = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const bar = entry.target;
    const targetPercent = parseInt(bar.getAttribute('data-percent'), 10);
    const label = bar.querySelector('.skill-percent');

    if (entry.isIntersecting) {
      let cur = 0;
      bar.dataset.animating = "1";
      const timer = setInterval(() => {
        if (!bar.dataset.animating) { clearInterval(timer); return; }
        if (cur > targetPercent) { clearInterval(timer); return; }
        bar.style.width = cur + '%';
        label.textContent = cur + '%';
        cur++;
      }, 18);
    } else {
      bar.style.width = "0%";
      label.textContent = "0%";
      delete bar.dataset.animating;
    }
  });
}, { threshold: 0.5 });
skillBars.forEach(bar => skillObserver.observe(bar));

/* ========= Tools: Slide-in Cards ========= */
const toolCards = document.querySelectorAll('.tool-card');
const toolObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      toolCards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, i * 200);
      });
    } else {
      toolCards.forEach(card => card.classList.remove('visible'));
    }
  });
}, { threshold: 0.4 });

toolCards.forEach(card => toolObserver.observe(card));

/* ========= Projects: Flip on Click (and Enter key) ========= */
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
  });
});

/* ========= Contact Form (demo) ========= */
const scriptURL = 'https://script.google.com/macros/s/AKfycbyZxvqhEBmLYVXWYrkE7s5znfvabteuP8-vfzBl0YQ8JEoUrYWsBc2g73TFUBPexLu0gQ/exec'
  const form = document.forms['contactForm']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.style.display = "block"
        setTimeout(function(){
          msg.style.display = "none"
        }, 5000)
        form.reset()
        console.log('Success!', response)
      })
      .catch(error => console.error('Error!', error.message))
  })


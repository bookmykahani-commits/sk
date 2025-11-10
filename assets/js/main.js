
$(document).ready(function(){
$(".owl-carousel").owlCarousel({
    items:3,
//      autoplay:false,
    margin:30,
    loop:true,
    dots:true
});
});
    let question = document.querySelectorAll(".question");

    question.forEach(question => {
    question.addEventListener("click", event => {
        const active = document.querySelector(".question.active");
        if(active && active !== question ) {
            active.classList.toggle("active");
            active.nextElementSibling.style.maxHeight = 0;
        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if(question.classList.contains("active")){
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    })
})
    document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.navbar') || document.querySelector('header');
    const nav = document.getElementById('site-menu');
    const navLinks = document.querySelectorAll('#site-menu a[data-scroll]');
    const menuToggle = document.querySelector('.site-menu-toggle a') || null;

    // helper: current header height
    function headerHeight() {
    return header ? header.getBoundingClientRect().height : 0;
}

    // Smooth scroll with offset
    function scrollToHash(hash) {
    const target = document.querySelector(hash);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - headerHeight() - 12; // 12px padding
    window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' });
}

    // click handlers for menu items
    navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
    e.preventDefault();
    // close mobile menu if open (basic)
    if (nav.classList.contains('expanded')) {
    nav.classList.remove('expanded');
    nav.classList.add('collapsed');
}
    // scroll
    scrollToHash(href);
    // update URL hash without jumping
    history.replaceState(null, '', href);
}
});
});

    // Mobile toggle: basic show/hide nav (tweak for your CSS)
    if (menuToggle) {
    menuToggle.addEventListener('click', function (e) {
    e.preventDefault();
    // toggle a class on nav to control visibility
    if (nav.classList.contains('expanded')) {
    nav.classList.remove('expanded');
    nav.classList.add('collapsed');
} else {
    nav.classList.add('expanded');
    nav.classList.remove('collapsed');
}
});
}

    // IntersectionObserver to set active nav link
    // Observe each major section that has an id referenced by nav links
    const sections = Array.from(navLinks)
    .map(l => l.getAttribute('href'))
    .filter(Boolean)
    .map(id => document.querySelector(id))
    .filter(Boolean);

    if ('IntersectionObserver' in window && sections.length) {
    let headerH = headerHeight();
    const ioOptions = {
    root: null,
    rootMargin: `-${headerH + 20}px 0px -40% 0px`, // top offset to account for header
    threshold: [0, 0.25, 0.6]
};

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    const id = '#' + (entry.target.id || '');
    const matchingLink = document.querySelector('#site-menu a[href="' + id + '"]');
    if (entry.isIntersecting) {
    navLinks.forEach(a => a.classList.remove('active'));
    if (matchingLink) matchingLink.classList.add('active');
}
});
}, ioOptions);

    sections.forEach(s => observer.observe(s));

    // update observer if header size changes (e.g. on resize)
    window.addEventListener('resize', () => {
    headerH = headerHeight();
    observer.disconnect();
    const newOptions = {
    root: null,
    rootMargin: `-${headerH + 20}px 0px -40% 0px`,
    threshold: [0, 0.25, 0.6]
};
    // recreate
    const newObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    const id = '#' + (entry.target.id || '');
    const matchingLink = document.querySelector('#site-menu a[href="' + id + '"]');
    if (entry.isIntersecting) {
    navLinks.forEach(a => a.classList.remove('active'));
    if (matchingLink) matchingLink.classList.add('active');
}
});
}, newOptions);
    sections.forEach(s => newObserver.observe(s));
});
} else {
    // fallback: on scroll, find nearest section
    window.addEventListener('scroll', function () {
    const fromTop = window.scrollY + headerHeight() + 15;
    let current = null;
    sections.forEach(section => {
    if (section.offsetTop <= fromTop) current = section;
});
    if (current) {
    const id = '#' + current.id;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
}
});
}

    // If user lands with a hash, smoothly scroll to it on load
    if (location.hash) {
    // small timeout ensures layout & header height calculated
    setTimeout(() => scrollToHash(location.hash), 50);
}
});
// widget
$(document).on("click", "#send-it", function() {
    const defaultMsg = "Hello! I want to book my Kahani 🎙️";        // your default
    var b = $("#get-number").text(),
            c = document.getElementById("chat-input").value,
            d = "https://wa.me/",
            e = b,
            f = "?text=" + (c == '' ? defaultMsg : c);
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        )
            var d = "whatsapp://send";
        var g = d + "+918758141053" + e + f;
        window.open(g, "_blank");
}),
    $(document).on("click", ".informasi", function() {
        (document.getElementById("get-number").innerHTML = $(this)
            .children(".my-number")
            .text()),
            $(".start-chat,.get-new")
                .addClass("show")
                .removeClass("hide"),
            $(".home-chat,.head-home")
                .addClass("hide")
                .removeClass("show"),
            (document.getElementById("get-nama").innerHTML = $(this)
                .children(".info-chat")
                .children(".chat-nama")
                .text()),
            (document.getElementById("get-label").innerHTML = $(this)
                .children(".info-chat")
                .children(".chat-label")
                .text());
    }),
    $(document).on("click", ".close-chat", function() {
        $("#whatsapp-chat")
            .addClass("hide")
            .removeClass("show");
    }),
    $(document).on("click", ".blantershow-chat", function() {
        $("#whatsapp-chat")
            .addClass("show")
            .removeClass("hide");
    });

// FAQS
(function () {
    // Setup accordion behavior
    const faqButtons = document.querySelectorAll('.faq-question');

    faqButtons.forEach(button => {
        const answerId = button.getAttribute('aria-controls');
        const answerEl = document.getElementById(answerId);

        // ensure the answer has aria-hidden initially
        answerEl.setAttribute('aria-hidden', 'true');

        // click handler
        button.addEventListener('click', () => toggleFaq(button, answerEl));

        // keyboard support: Enter and Space toggle
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFaq(button, answerEl);
            }
        });
    });

    function toggleFaq(button, panel) {
        const isOpen = button.getAttribute('aria-expanded') === 'true';

        if (isOpen) {
            // close
            button.setAttribute('aria-expanded', 'false');
            panel.setAttribute('aria-hidden', 'true');
            panel.classList.remove('open');

            // collapse with smooth animation: set max-height to current then to 0
            panel.style.maxHeight = panel.scrollHeight + 'px';
            // allow repaint before collapsing
            requestAnimationFrame(() => {
                panel.style.maxHeight = '0px';
            });
        } else {
            // open
            button.setAttribute('aria-expanded', 'true');
            panel.setAttribute('aria-hidden', 'false');
            panel.classList.add('open');

            // expand: set max-height to scrollHeight
            panel.style.maxHeight = panel.scrollHeight + 'px';

            // optional: if you want only one open at a time, uncomment the following:
            // closeOthers(button);
        }
    }

    // Optional helper to close other open panels (uncomment if single-open desired)
    function closeOthers(openButton) {
        faqButtons.forEach(btn => {
            if (btn !== openButton && btn.getAttribute('aria-expanded') === 'true') {
                const aid = btn.getAttribute('aria-controls');
                const pan = document.getElementById(aid);
                btn.setAttribute('aria-expanded', 'false');
                pan.setAttribute('aria-hidden', 'true');
                pan.classList.remove('open');
                pan.style.maxHeight = '0px';
            }
        });
    }

    // On window resize, recompute open panel max-heights so they stay correct
    window.addEventListener('resize', () => {
        document.querySelectorAll('.faq-answer.open').forEach(panel => {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        });
    });
})();
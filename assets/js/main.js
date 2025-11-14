
$(document).ready(function(){
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 12,
    autoplay: true,
    autoplayTimeout: 5200,
    autoplayHoverPause: true,
    smartSpeed: 700,
    nav: false,
    dots: true,
    center: false,
    // important: default stagePadding removed, we set per-breakpoint below
    responsive:{
        0:{
            items:1,
            stagePadding: 0     // <--- no side padding on mobile
        },
        576:{
            items:1,
            stagePadding: 0
        },
        768:{
            items:2,
            stagePadding: 10
        },
        992:{
            items:3,
            stagePadding: 20
        }
    }
});

$('.client-testimonial-carousel').on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function(e){
    var $dots = $(this).closest('.client-testimonial-carousel').find('.owl-dots button.owl-dot');
    $dots.each(function(i){
        $(this).attr('aria-label', 'View testimonials page ' + (i+1));
    });
    $('.owl-dots button.owl-dot').removeAttr('aria-current');
    $('.owl-dots button.owl-dot.active').attr('aria-current', 'true');
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

// how work
(function(){
    // Small enhancement: allow clicking step to expand/collapse details (mobile-friendly)
    // Each .step-card toggles the 'expanded' class (purely presentational)
    const steps = document.querySelectorAll('#how-it-works .step-card');
    steps.forEach(card => {
        // add toggle area on small screens
        card.addEventListener('click', (e) => {
            // don't toggle when a link inside was clicked
            if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) return;
            card.classList.toggle('expanded');
        });
    });
})();



// collabs
(function(){
    // Configuration: lines to show collapsed on small and large screens
    var COLLAPSED_LINES_MOBILE = 2;
    var COLLAPSED_LINES_DESKTOP = 3;
    var MOBILE_BREAKPOINT = 576; // px

    function getCollapsedLines() {
        return (window.innerWidth < MOBILE_BREAKPOINT) ? COLLAPSED_LINES_MOBILE : COLLAPSED_LINES_DESKTOP;
    }

    function px(value){ return Math.round(value) + 'px'; }

    // core: create or update read-more UI for one card element
    function setupCard(card) {
        var content = card.querySelector('.entry-content');
        if(!content) return;

        var summary = content.querySelector('.entry-content__summary');
        if(!summary) {
            summary = document.createElement('div');
            summary.className = 'entry-content__summary';
            while (content.firstChild) {
                if (content.firstChild.classList && content.firstChild.classList.contains('readmore-btn')) break;
                summary.appendChild(content.firstChild);
            }
            content.insertBefore(summary, content.firstChild);
        }

        var btn = content.querySelector('.readmore-btn');
        if(!btn) {
            btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'readmore-btn button button-small button-color button-filled';
            btn.setAttribute('aria-expanded', 'false');
            btn.innerHTML = 'Read more <span class="chev">▾</span>';
            content.appendChild(btn);
        }

        // ensure idempotent: remove previous listener by cloning
        var newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        btn = newBtn;

        function measureAndApply() {
            // remove forced styles
            summary.classList.remove('expanded');
            summary.style.maxHeight = null;

            // get line-height of first paragraph or fallback
            var firstChild = summary.querySelector('p') || summary.firstElementChild || summary;
            var cs = window.getComputedStyle(firstChild);
            var lineHeight = parseFloat(cs.lineHeight);
            if (isNaN(lineHeight)) {
                var fs = parseFloat(cs.fontSize) || 15;
                lineHeight = fs * 1.6;
            }

            var collapsedLines = getCollapsedLines();
            summary.setAttribute('data-collapsed-lines', collapsedLines);

            var collapsedHeight = Math.round(lineHeight * collapsedLines);
            var fullHeight = summary.scrollHeight;

            if (fullHeight > collapsedHeight + 4) {
                summary.style.maxHeight = px(collapsedHeight);
                btn.style.display = 'inline-block';
                btn.setAttribute('aria-hidden', 'false');
                btn.setAttribute('data-collapsed-height', collapsedHeight);
                btn.setAttribute('data-full-height', fullHeight);
            } else {
                summary.style.maxHeight = px(fullHeight);
                summary.classList.remove('expanded');
                btn.style.display = 'none';
                btn.setAttribute('aria-hidden', 'true');
            }
        }

        btn.addEventListener('click', function(){
            var isExpanded = summary.classList.toggle('expanded');
            if (isExpanded) {
                var fullH = btn.getAttribute('data-full-height') || summary.scrollHeight;
                summary.style.maxHeight = px(fullH);
                btn.setAttribute('aria-expanded', 'true');
                btn.innerHTML = 'Show less <span class="chev">▾</span>';
            } else {
                var collH = btn.getAttribute('data-collapsed-height') || (getCollapsedLines()*16*1.6);
                summary.style.maxHeight = px(collH);
                btn.setAttribute('aria-expanded', 'false');
                btn.innerHTML = 'Read more <span class="chev">▾</span>';
            }
        });

        // expose a per-card updater
        return measureAndApply;
    }

    // initialize all cards and collect their updater functions
    function initReadMoreForAll() {
        var cards = Array.prototype.slice.call(document.querySelectorAll('.episode-card'));
        var updaters = [];
        cards.forEach(function(card){
            var updater = setupCard(card);
            if (typeof updater === 'function') updaters.push({card: card, fn: updater});
        });
        return updaters;
    }

    // global storage of updaters
    var storedUpdaters = initReadMoreForAll();

    // convenience: update everything (useful on resize)
    function updateAll() {
        // re-run setup for new cards that might be added dynamically
        storedUpdaters = initReadMoreForAll();
        // measure after a frame so styles/layout settle
        requestAnimationFrame(function(){
            storedUpdaters.forEach(function(u){
                try { u.fn(); } catch(e) { /* ignore measurement errors */ }
            });
        });
    }

    // update only cards inside the currently active tab(s)
    function updateReadMoreForActiveTab() {
        // find visible tab-content(s) (heuristic: elements with .tab-content.active or visible)
        var activeContents = document.querySelectorAll('.tab-content.active, .tab-content:visible');
        // fallback: any .tab-content that is not display:none
        if (!activeContents.length) {
            activeContents = Array.prototype.filter.call(document.querySelectorAll('.tab-content'), function(el){
                return (el.offsetParent !== null); // visible check
            });
        }
        // measure their cards
        requestAnimationFrame(function(){
            activeContents.forEach(function(tc){
                var cards = tc.querySelectorAll('.episode-card');
                cards.forEach(function(card){
                    // find stored updater for this card
                    var upd = storedUpdaters.find(function(u){ return u.card === card; });
                    if (upd && typeof upd.fn === 'function') {
                        try { upd.fn(); } catch(e){}
                    } else {
                        // if not found (new card), setup and measure
                        var newUpdater = setupCard(card);
                        if (newUpdater) {
                            storedUpdaters.push({card: card, fn: newUpdater});
                            try { newUpdater(); } catch(e){}
                        }
                    }
                });
            });
        });
    }

    // wire resize with debounce
    var resizeTimeout;
    window.addEventListener('resize', function(){
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateAll, 120);
    });

    // Try to detect tab activation in multiple ways:

    // 1) If using Bootstrap tabs, use shown.bs.tab event
    document.addEventListener('shown.bs.tab', function(){ updateReadMoreForActiveTab(); }, true);

    // 2) If your tabs are simple li/.tb-tab clicks (your original), run after click + slight delay
    document.addEventListener('click', function(e){
        var li = e.target.closest && e.target.closest('.tb-tab');
        if (li) {
            // measure after DOM updates from tab logic — a frame or two later
            requestAnimationFrame(function(){
                // second frame if a JS tab system toggles classes asynchronously
                requestAnimationFrame(updateReadMoreForActiveTab);
            });
        }
    }, true);

    // 3) MutationObserver fallback: watch for class changes on the tab container
    var tabContainer = document.querySelector('.tab-container');
    if (tabContainer && window.MutationObserver) {
        var mo = new MutationObserver(function(mutations){
            mutations.forEach(function(m){
                // if nodes changed or attributes changed, attempt update for active tab
                if (m.type === 'attributes' || m.addedNodes.length || m.removedNodes.length) {
                    // small timeout to allow other code to finish switching
                    setTimeout(updateReadMoreForActiveTab, 50);
                }
            });
        });
        mo.observe(tabContainer, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] });
    }

    // Expose function for manual calls (if needed)
    window.updateReadMoreForActiveTab = updateReadMoreForActiveTab;
    window.updateReadMoreAll = updateAll;

    // Initial measurement on DOM ready (or immediate if already loaded)
    function readyInit(){
        // do an initial measurement after layout is stable
        requestAnimationFrame(function(){
            requestAnimationFrame(updateReadMoreForActiveTab);
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', readyInit);
    } else {
        readyInit();
    }

})();
function clearSummariesInPanel(panel){
    panel.querySelectorAll('.entry-content__summary').forEach(function(s){
        s.style.maxHeight = null;
        s.classList.remove('expanded');
    });
}
document.querySelectorAll('.tb-tab').forEach(function(li){
    li.addEventListener('click', function(){
        var targetSelector = li.querySelector('a').getAttribute('href');
        var panel = document.querySelector(targetSelector);
        requestAnimationFrame(function(){
            clearSummariesInPanel(panel);
            window.updateReadMoreForActiveTab && window.updateReadMoreForActiveTab();
        });
    });
});

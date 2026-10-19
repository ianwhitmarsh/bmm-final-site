var LOGO_URL = "/img/RjYs2ZV5pWaFayY0D1kziPGAlM.webp?width=1080&height=1350";
var SERVICE_LINKS = [
["Web Design", "/web-design"],
["Social Media Management", "/social-media-management"],
["Podcasting", "/podcasting"],
["Content Sessions", "/content-sessions"],
["Real Estate", "/real-estate"]
];
var NAV_ITEMS = [["Home", "/"], ["About", "/about"], ["__services__", null], ["Real Estate", "/real-estate"], ["Works", "/works"], ["Blogs", "/blogs"], ["Careers", "/careers"]];
function renderNavLinks(active) {
var html = "";
NAV_ITEMS.forEach(function (item) {
var label = item[0], href = item[1];
if (label === "__services__") {
var drop = SERVICE_LINKS.map(function (s) { return '<a href="' + s[1] + '">' + s[0] + '</a>'; }).join("");
html += '<div class="has-dropdown"><a href="#">Services</a><div class="dropdown">' + drop + '</div></div>';
} else {
var style = active === href ? ' style="color:var(--accent-dark)"' : '';
html += '<a href="' + href + '"' + style + '>' + label + '</a>';
}
});
html += '<a href="/contact" class="btn btn-accent nav-mobile-cta">Get Started</a>';
return html;
}
function renderHeader(active) {
return '' +
'<div class="container nav-row">' +
'<a class="brand" href="/" aria-label="Big Mammoth Media home"><img src="' + LOGO_URL + '" alt="Big Mammoth Media"></a>' +
'<nav class="nav-links">' + renderNavLinks(active) + '</nav>' +
'<div class="nav-cta">' +
'<a href="/contact" class="btn btn-accent btn-sm btn-sm-desktop">Get Started</a>' +
'<button class="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>' +
'</div></div>';
}
var SOCIALS = [["LinkedIn", "https://www.linkedin.com/company/big-mammoth-media/"], ["Instagram", "https://www.instagram.com/bigmammothmedia/"], ["Facebook", "https://www.facebook.com/bigmammothmedia"], ["TikTok", "https://www.tiktok.com/@bigmammothmedia"]];
function renderFooter() {
var social = SOCIALS.map(function (s) { return '<a href="' + s[1] + '" target="_blank" rel="noopener" aria-label="' + s[0] + '">' + s[0][0] + '</a>'; }).join("");
return '' +
'<div class="container">' +
'<div class="footer-top">' +
'<div><div class="footer-brand"><img src="' + LOGO_URL + '" alt="Big Mammoth Media logo">Big Mammoth Media</div>' +
'<p style="max-width:280px;font-size:14px;">Experienced team delivering exceptional digital solutions tailored to your brand &mdash; built and based in Tulsa, Oklahoma.</p>' +
'<div class="footer-social">' + social + '</div></div>' +
'<div><h4>Quick Links</h4><ul>' +
'<li><a href="/about">About</a></li><li><a href="/works">Works</a></li><li><a href="/blogs">Blogs</a></li><li><a href="/careers">Careers</a></li><li><a href="/privacy-policy">Privacy Policy</a></li>' +
'</ul></div>' +
'<div><h4>Services</h4><ul>' +
'<li><a href="/web-design">Web Design</a></li><li><a href="/social-media-management">Social Media Management</a></li><li><a href="/podcasting">Podcasting</a></li><li><a href="/content-sessions">Content Sessions</a></li><li><a href="/real-estate">Real Estate</a></li>' +
'</ul></div>' +
'<div><h4>Get In Touch</h4><ul>' +
'<li><a href="tel:+19182059830">(918) 205-9830</a></li><li><a href="mailto:info@bigmammothmedia.com">info@bigmammothmedia.com</a></li><li>Mon&ndash;Fri: 8 AM&ndash;5 PM</li><li>Walk-in: Tue &amp; Thu, 9 AM&ndash;2 PM</li>' +
'</ul><a href="/contact" class="btn btn-accent btn-sm" style="margin-top:16px;">Book a Free Consultation</a></div>' +
'</div>' +
'<div class="footer-bottom"><span>&copy; 2026 Big Mammoth Media, LLC. All rights reserved.</span><span>Built &amp; powered by Big Mammoth Media</span></div>' +
'</div>';
}
(function injectChrome() {
var hdr = document.getElementById('__hdr');
var ftr = document.getElementById('__ftr');
if (hdr) hdr.innerHTML = renderHeader(hdr.getAttribute('data-active') || '');
if (ftr) ftr.innerHTML = renderFooter();
})();
document.addEventListener('DOMContentLoaded', function () {
var toggle = document.querySelector('.nav-toggle');
var links = document.querySelector('.nav-links');
if (toggle && links) {
toggle.addEventListener('click', function () {
links.classList.toggle('open');
});
}
document.querySelectorAll('.has-dropdown > a').forEach(function (a) {
a.addEventListener('click', function (e) {
if (a.getAttribute('href') === '#') {
e.preventDefault();
if (window.innerWidth <= 880) a.parentElement.classList.toggle('open');
}
});
});
document.querySelectorAll('.faq-item').forEach(function (item) {
var q = item.querySelector('.faq-q');
if (!q) return;
q.addEventListener('click', function () {
var wasOpen = item.classList.contains('open');
item.parentElement.querySelectorAll('.faq-item.open').forEach(function (i) {
if (i !== item) i.classList.remove('open');
});
item.classList.toggle('open', !wasOpen);
});
});
var pills = document.querySelectorAll('.filter-pill');
if (pills.length) {
pills.forEach(function (pill) {
pill.addEventListener('click', function () {
pills.forEach(function (p) { p.classList.remove('active'); });
pill.classList.add('active');
var filter = pill.getAttribute('data-filter');
document.querySelectorAll('.blog-card-wrap').forEach(function (card) {
var match = filter === 'all' || card.getAttribute('data-category') === filter;
if (match) card.removeAttribute('hidden'); else card.setAttribute('hidden', '');
});
});
});
}
var form = document.querySelector('.js-contact-form');
if (form) {
form.addEventListener('submit', function (e) {
e.preventDefault();
var btn = form.querySelector('button[type="submit"]');
if (btn) btn.textContent = 'Thanks — we\'ll be in touch!';
form.querySelectorAll('input, textarea').forEach(function (el) { el.disabled = true; });
});
}
});
var SHOWCASE = [
['Butler Homes','butler-homes','Web Development','butlerhomesllc.com','/showcase/butler-homes.webp?v=2'],
['Meadow Lake Ranch','meadow-lake-ranch','Website Design + Development','www.meadowlakeranch.com','/img/gazmRMREBLeeUzYs7vnxEAjW5sQ.webp?width=1080&height=1350'],
['Pelvic Health Specialists','pelvic-health-specialists','Website Design + Development','pelvichealthspecialists.com','/showcase/pelvic-health.webp?v=2'],
['Master Kraft Tooling','master-kraft-tooling---website-development','Website Design','mktooling.com','/showcase/master-kraft.webp?v=2'],
['Restoration Chiropractic','restoration-chiropractic-website-social','Website Design + Social Media Management','restorationowasso.com','/showcase/restoration-chiro.webp?v=2'],
['Owasso Association (ASBO)','asbo-website-development','Website Design + Development','owassoassociation.com','/showcase/asbo.webp?v=2'],
['Verve Fitness','verve-fitness-website','Website Design + Development','vervefitnessok.com','/showcase/verve.webp?v=2'],
['Land + Legacy Custom Homes','land-and-legacy-website-social','Website Design + Social Media Management','landandlegacyok.com','/showcase/land-and-legacy.webp?v=2'],
['Rhiannon Thoreson','rhiannon-thoreson-website-social','Website Design + Social Media Management','rhiannonthoreson.com','/showcase/rhiannon.webp?v=2'],
['Jacob & Associates Realty (JA Realtors)','jacob-associates-realty','Website Design + Development','','/img/axjat4wDwYhCThLePumKLE5pqg.webp?width=1080&height=1350'],
['Kuykendall Construction','kuykendall-construction','Website Design + Development','kuykendallconstructionok.com','/showcase/kuykendall.webp?v=2'],
['Luedke Lights & Lawn Care','luedke-lights-lawn-care-website-social','Website Design + Social Media Management','luedkelightsandlawn.com','/showcase/luedke.webp?v=2'],
['Long Tail Farm','long-tail-farm-website','Website Design + Development','ltfarm.com','/showcase/long-tail-farm.webp?v=2'],
['A Touch Above Holistic Health','a-touch-above-holistic-health-website-design','Website Design + Development','atouchabovehhc.com','/showcase/a-touch-above.webp?v=2'],
['Luxury Finishes Construction','luxury-finishes-construction','Website Design + Development','luxuryfinishesllc.com/home','/showcase/luxury-finishes.webp?v=2'],
];
SHOWCASE.sort(function(a,b){ return (b[3]?1:0)-(a[3]?1:0); });
var SITE_CROPS = {
'1080x1350': [17.5, 28.0, 70.0, 36.0],
'1030x786':  [8.5, 31.5, 49.0, 45.0],
'2174x1535': [5.6, 11.0, 92.8, 67.0],
'3384x1620': [0, 0, 100, 100]
};
function cropStyle(url, ka) {
var m = /width=(\d+)&height=(\d+)/.exec(url || '');
if (!m) return '';
var W = +m[1], H = +m[2], c = SITE_CROPS[W + 'x' + H];
if (!c) return '';
var cx = c[0] / 100, cy = c[1] / 100, cw = c[2] / 100, ch = c[3] / 100;
var cropA = (cw * W) / (ch * H);
if (cropA > ka) {
var nw = ch * H * ka / W;
cx += (cw - nw) / 2;
cw = nw;
} else {
ch = cw * W / (ka * H);
}
return 'position:absolute;max-width:none;object-fit:fill;inset:auto;' +
'width:' + (100 / cw).toFixed(3) + '%;height:' + (100 / ch).toFixed(3) + '%;' +
'left:' + (-cx / cw * 100).toFixed(3) + '%;top:' + (-cy / ch * 100).toFixed(3) + '%;';
}
var SOCIAL_WORK = [
['Gravity Bear','gravity-bear','Advertisements — Meta Ads','','/img/dvBaBD8aXWIn8Y5eDQMhjJhiQ7g.webp?width=2304&height=1728'],
['Inject Tulsa','inject-tulsa','Social Media Management','www.instagram.com/injectaesthetics','/img/MPYS4EUU8qjWPVBnqJ63hni2fcU.webp?width=2304&height=1728'],
['BeLocal','be-local-social-media','Social Media Management','www.instagram.com/belocaltulsa','/img/zpDoMFKmubZiD7tMp0AWxEQ.webp?width=1030&height=786'],
['Red Brick Pizza','red-brick-portfolio','Social Media Management','www.facebook.com/RedBrickPizzaOK','/img/QLhZe4qzD0NTlbncMLrDplrE0.webp?width=2304&height=1728'],
['FireHouse Roofing','firehouse-roofing-social-media','Social Media Management','www.instagram.com/firehouseroofingco','/img/ArcPbI3wZy7bcLsm2EahTqxg4uQ.webp?width=1030&height=786'],
['Madsen Massage','madsen-massage-portfolio','Social Media Management','www.instagram.com/madsenmassagellc/?hl=en','/img/KNsxFPrNtub8c71i404gI1tB8g8.webp?width=1030&height=786'],
];
var TESTIMONIALS = [
["In over 30 years of business, Ian and Big Mammoth Media has been one of the best investments we've made. For over two years, their innovative, results-driven strategies delivered exceptional ROI and directly boosted our growth.", "Joel Wiland", "Owner — J. David Jewelry"],
["This team is an A++ for me and my business. GREAT CRM, GREAT MEDIA, GREAT TEACHERS. All in one service to build it to the next level!!", "Dalton Luedke", "Owner — Luedke Lights & Lawn Care"],
["Big Mammoth Media has been a huge help in growing my business. Ian and his team has been nothing short of amazing! I especially love my new CRM to help navigate my day-to-day business.", "Michelle Danielles", "Owner — Health Clinic"]
];
function bmmInit() {
var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
(function () {
var bar = document.createElement('div');
bar.className = 'scroll-progress';
document.body.appendChild(bar);
var top = document.createElement('button');
top.className = 'to-top';
top.setAttribute('aria-label', 'Back to top');
top.innerHTML = '&#8593;';
top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
document.body.appendChild(top);
var hdr = document.querySelector('.site-header');
var ticking = false;
function onScroll() {
if (ticking) return;
ticking = true;
requestAnimationFrame(function () {
var y = window.scrollY || document.documentElement.scrollTop;
var h = document.documentElement.scrollHeight - window.innerHeight;
bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
if (hdr) hdr.classList.toggle('shrink', y > 40);
top.classList.toggle('show', y > 700);
ticking = false;
});
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
/* hide the floating buttons while the footer is on screen so they never cover its links */
var ftrEl = document.getElementById('__ftr');
if (ftrEl && 'IntersectionObserver' in window) {
new IntersectionObserver(function (es) { document.body.classList.toggle('at-footer', es[0].isIntersecting); }, { rootMargin: '0px 0px -60px 0px' }).observe(ftrEl);
}
})();
(function () {
var sel = '.feature-card,.work-card,.blog-card,.testi-card,.stat,.price-card,.team-card,' +
'.step,.compare,.faq-list,.cta-band,.section-head,.hero-art,.detail-hero-img,' +
'.article-gallery,.form-card,.mq-wrap,.showcase-grid,.tabs';
document.querySelectorAll(sel).forEach(function (el) {
if (!el.classList.contains('thaw')) el.classList.add('thaw');
});
var els = document.querySelectorAll('.reveal,.reveal-l,.reveal-r,.thaw');
if (!('IntersectionObserver' in window) || reduce) {
els.forEach(function (e) { e.classList.add('in'); });
return;
}
var io = new IntersectionObserver(function (entries) {
entries.forEach(function (en) {
if (!en.isIntersecting) return;
var el = en.target;
var parent = el.parentElement;
var idx = parent ? Array.prototype.indexOf.call(parent.children, el) : 0;
el.style.transitionDelay = Math.min(idx, 6) * 70 + 'ms';
el.classList.add('in');
io.unobserve(el);
});
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
els.forEach(function (e) { io.observe(e); });
})();
(function () {
var vals = document.querySelectorAll('.stat .value');
if (!vals.length) return;
function run(el) {
var raw = el.textContent.trim();
var m = raw.match(/^([^\d]*)([\d,.]+)(.*)$/);
if (!m) return;
var pre = m[1], num = parseFloat(m[2].replace(/,/g, '')), post = m[3];
if (isNaN(num) || reduce) return;
var dur = 1300, t0 = null;
function step(t) {
if (!t0) t0 = t;
var p = Math.min((t - t0) / dur, 1);
var eased = 1 - Math.pow(1 - p, 3);
var cur = num * eased;
var shown = num % 1 === 0 ? Math.round(cur).toLocaleString() : cur.toFixed(1);
el.textContent = pre + shown + post;
if (p < 1) requestAnimationFrame(step);
}
requestAnimationFrame(step);
}
if (!('IntersectionObserver' in window)) return;
var io = new IntersectionObserver(function (es) {
es.forEach(function (en) { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
}, { threshold: 0.5 });
vals.forEach(function (v) { io.observe(v); });
})();
(function () {
if (reduce || window.matchMedia('(hover: none)').matches) return;
document.querySelectorAll('.feature-card,.price-card,.testi-card,.step,.stat').forEach(function (c) {
c.classList.add('spot');
c.addEventListener('pointermove', function (e) {
var r = c.getBoundingClientRect();
c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
c.style.setProperty('--my', (e.clientY - r.top) + 'px');
});
});
})();
(function () {
var rot = document.querySelector('.rot');
if (!rot) return;
var words = rot.querySelectorAll('span');
if (words.length < 2) return;
var i = 0;
words[0].classList.add('on');
if (reduce) return;
setInterval(function () {
words[i].classList.remove('on');
i = (i + 1) % words.length;
words[i].classList.add('on');
}, 2400);
})();
(function () {
var t = document.querySelector('.ticker-track');
if (!t) return;
var words = (t.getAttribute('data-words') || '').split('|').filter(Boolean);
if (!words.length) return;
var html = words.map(function (w) { return '<b>' + w + '</b>'; }).join('');
t.innerHTML = html + html;
})();
(function () {
var wrap = document.getElementById('work-marquee');
if (!wrap) return;
var all = (typeof SHOWCASE !== 'undefined' ? SHOWCASE : [])
.map(function (w) { return [w, true]; })
.concat((typeof SOCIAL_WORK !== 'undefined' ? SOCIAL_WORK : [])
.map(function (w) { return [w, false]; }));
if (!all.length) return;
var CARD_ASPECT = 16 / 11;
function card(item) {
var w = item[0];
var st = item[1] ? cropStyle(w[4], CARD_ASPECT) : '';
return '<a class="mq-card" href="/works/' + encodeURI(w[1]) + '">' +
'<img src="' + w[4] + '&scale-down-to=1024" alt="' + w[0] + '" loading="lazy"' +
(st ? ' style="' + st + '"' : '') + '>' +
'<figcaption>' + w[0] + '</figcaption></a>';
}
var half = Math.ceil(all.length / 2);
var rowA = all.slice(0, half), rowB = all.slice(half).concat(all.slice(0, 3));
function row(items, rev) {
var inner = items.map(card).join('');
return '<div class="marquee"><div class="marquee-track' + (rev ? ' rev' : '') + '">' +
inner + inner + '</div></div>';
}
wrap.innerHTML = row(rowA, false) + row(rowB, true);
})();
(function () {
var root = document.getElementById('site-showcase');
if (!root || typeof SHOWCASE === 'undefined' || !SHOWCASE.length) return;
/* A slideshow that plays on its own. Hovering no longer pauses it (that
   is what made it look like you had to click), the bars across the top
   of the screen show where you are, and the side panel previews the
   next site. It only pauses while scrolled off screen or the tab is
   hidden, and never auto-plays for reduced-motion visitors. */
var items = SHOWCASE;
var DWELL = 5200;
var SCREEN_ASPECT = 16 / 10;
var SMALL = '&scale-down-to=1024';
/* Framer images get resized on the fly; our own screenshots are already web-sized. */
function sized(u) { return u.indexOf('framerusercontent') > -1 ? u + SMALL : u; }
var i = 0, raf = 0, last = 0, elapsed = 0, visible = false;
function esc(t) { return String(t).replace(/[&<>"]/g, function (c) {
  return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
root.innerHTML =
'<div class="showcase-grid">' +
'<div class="browser">' +
'<div class="browser-bar">' +
'<div class="browser-dots"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i></div>' +
'<div class="browser-url" id="sc-url"></div>' +
'</div>' +
'<div class="browser-screen" id="sc-screen">' +
'<div class="sc-progress" id="sc-prog" aria-label="Choose a project"></div>' +
'<a class="shot-link" id="sc-link" href="#" aria-label="View case study"></a>' +
'<span class="shot-tag" id="sc-tag"></span>' +
'</div>' +
'</div>' +
'<div class="showcase-side">' +
'<div class="spec-head"><span class="spec-no" id="sc-no">01</span><span class="spec-of" id="sc-of"></span></div>' +
'<h3 id="sc-title"></h3>' +
'<dl class="spec-meta"><dt>Service</dt><dd id="sc-cat"></dd><dt>Live at</dt><dd id="sc-live"></dd></dl>' +
'<a class="sc-next-card" id="sc-upnext" href="#"><span class="sc-next-thumb" id="sc-next-thumb"></span>' +
'<span><span class="sc-next-k">Up next</span><span class="sc-next-name" id="sc-next-name"></span>' +
'<span class="sc-next-go">Skip ahead &rarr;</span></span></a>' +
'<div class="sc-nav">' +
'<button id="sc-prev" aria-label="Previous project">&#8592;</button>' +
'<button id="sc-next" aria-label="Next project">&#8594;</button>' +
'<a class="btn btn-accent btn-sm" href="/works">All Work</a>' +
'<span class="sc-count" id="sc-count"></span>' +
'</div>' +
'</div>' +
'</div>';
var screen = root.querySelector('#sc-screen');
var prog = root.querySelector('#sc-prog');
var nextThumb = root.querySelector('#sc-next-thumb');
items.forEach(function (w, n) {
var img = document.createElement('img');
img.src = sized(w[4]);
img.alt = w[0] + ' website built by Big Mammoth Media';
img.loading = n < 2 ? 'eager' : 'lazy';
var st = cropStyle(w[4], SCREEN_ASPECT);
if (st) img.style.cssText = st;
screen.appendChild(img);
});
var layers = screen.querySelectorAll('img');
prog.innerHTML = items.map(function (w, n) {
return '<button type="button" data-i="' + n + '" title="' + esc(w[0]) + '" aria-label="' + esc(w[0]) + '"><i><b></b></i></button>';
}).join('');
var segs = prog.querySelectorAll('button');
var fills = prog.querySelectorAll('b');
function show(n) {
i = (n + items.length) % items.length;
elapsed = 0;
var w = items[i], nx = items[(i + 1) % items.length];
layers.forEach(function (l, k) { l.classList.toggle('on', k === i); });
segs.forEach(function (s, k) {
s.classList.toggle('done', k < i);
s.setAttribute('aria-current', k === i ? 'true' : 'false');
fills[k].style.width = k < i ? '' : '0';
});
root.querySelector('#sc-title').textContent = w[0];
root.querySelector('#sc-cat').textContent = w[2];
root.querySelector('#sc-tag').textContent = w[2].indexOf('Social') > -1 && w[2].indexOf('Website') === -1 ? 'Social Media' : 'Website';
root.querySelector('#sc-url').innerHTML = '<s>https://</s>' + esc(w[3] || 'bigmammothmedia.com/works');
root.querySelector('#sc-link').setAttribute('href', '/works/' + encodeURI(w[1]));
root.querySelector('#sc-count').textContent = (i + 1) + ' / ' + items.length;
root.querySelector('#sc-no').textContent = String(i + 1).padStart(2, '0');
root.querySelector('#sc-of').textContent = '/ ' + items.length + ' websites';
root.querySelector('#sc-live').innerHTML = w[3]
? '<a href="https://' + esc(w[3]) + '" target="_blank" rel="noopener">' + esc(w[3]) + '</a>'
: '<span style="color:var(--dim)">case study only</span>';
root.querySelector('#sc-next-name').textContent = nx[0];
var st = cropStyle(nx[4], 16 / 10);
nextThumb.innerHTML = '<img src="' + sized(nx[4]) + '" alt="" loading="lazy"' + (st ? ' style="' + st + '"' : '') + '>';
}
function tick(t) {
raf = 0;
if (!running()) return;
if (last) elapsed += t - last;
last = t;
var f = fills[i];
if (f) f.style.width = Math.min(100, elapsed / DWELL * 100) + '%';
if (elapsed >= DWELL) show(i + 1);
raf = requestAnimationFrame(tick);
}
var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function running() { return visible && !reduce && !document.hidden; }
function play() { if (!raf && running()) { last = 0; raf = requestAnimationFrame(tick); } }
segs.forEach(function (s) {
s.addEventListener('click', function (e) { e.preventDefault(); show(+s.getAttribute('data-i')); play(); });
});
root.querySelector('#sc-upnext').addEventListener('click', function (e) { e.preventDefault(); show(i + 1); play(); });
root.querySelector('#sc-next').addEventListener('click', function () { show(i + 1); play(); });
root.querySelector('#sc-prev').addEventListener('click', function () { show(i - 1); play(); });
document.addEventListener('visibilitychange', play);
show(0);
if ('IntersectionObserver' in window) {
new IntersectionObserver(function (es) {
es.forEach(function (en) { visible = en.isIntersecting; play(); });
}, { threshold: 0.2 }).observe(root);
} else { visible = true; play(); }
})();
(function () {
var tabs = document.querySelectorAll('.tab-btn');
if (!tabs.length) return;
tabs.forEach(function (b) {
b.addEventListener('click', function () {
var id = b.getAttribute('data-tab');
tabs.forEach(function (x) { x.classList.toggle('active', x === b); });
document.querySelectorAll('.tab-panel').forEach(function (p) {
var on = p.getAttribute('data-panel') === id;
p.classList.toggle('active', on);
if (on) p.querySelectorAll('.reveal,.reveal-l,.reveal-r,.thaw').forEach(function (r) { r.classList.add('in'); });
});
});
});
})();
(function () {
var root = document.getElementById('testi-slider');
if (!root || typeof TESTIMONIALS === 'undefined') return;
root.innerHTML =
'<div class="tslider">' +
TESTIMONIALS.map(function (t, n) {
return '<div class="tslide' + (n === 0 ? ' on' : '') + '">' +
'<div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>' +
'<p>&ldquo;' + t[0] + '&rdquo;</p>' +
'<div class="testi-name">' + t[1] + '</div>' +
'<div class="small-note">' + t[2] + '</div></div>';
}).join('') +
'</div><div class="tdots">' +
TESTIMONIALS.map(function (t, n) {
return '<button class="' + (n === 0 ? 'on' : '') + '" data-i="' + n + '" aria-label="Testimonial ' + (n + 1) + '"></button>';
}).join('') +
'</div>';
var slides = root.querySelectorAll('.tslide');
var dots = root.querySelectorAll('.tdots button');
var i = 0, timer;
function show(n) {
i = (n + slides.length) % slides.length;
slides.forEach(function (s, k) { s.classList.toggle('on', k === i); });
dots.forEach(function (d, k) { d.classList.toggle('on', k === i); });
}
function start() { if (reduce) return; clearInterval(timer); timer = setInterval(function () { show(i + 1); }, 6000); }
dots.forEach(function (d) { d.addEventListener('click', function () { show(+d.getAttribute('data-i')); start(); }); });
root.addEventListener('mouseenter', function () { clearInterval(timer); });
root.addEventListener('mouseleave', start);
start();
})();
}
function bmmSafety() {
setTimeout(function () {
document.querySelectorAll('.reveal,.reveal-l,.reveal-r,.thaw').forEach(function (el) {
var r = el.getBoundingClientRect();
if (r.top < window.innerHeight && !el.classList.contains('in')) el.classList.add('in');
});
}, 2500);
}
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', function () { bmmInit(); bmmSafety(); });
} else {
bmmInit(); bmmSafety();
}
function bmmTrail() {
var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var secs = Array.prototype.slice.call(document.querySelectorAll('[data-sec]'));
if (secs.length < 3) return;
var nav = document.createElement('nav');
nav.className = 'trail';
nav.setAttribute('aria-label', 'Page sections');
nav.innerHTML = secs.map(function (s, n) {
var label = String(s.getAttribute('data-sec') || '').replace(/"/g, '&quot;');
return '<button type="button" data-i="' + n + '" data-label="' + label +
'" aria-label="' + label + '"></button>';
}).join('');
document.body.appendChild(nav);
var btns = nav.querySelectorAll('button');
btns.forEach(function (b, n) {
b.addEventListener('click', function () {
secs[n].scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
});
});
var tick = false;
function sync() {
if (tick) return;
tick = true;
requestAnimationFrame(function () {
var mid = window.scrollY + window.innerHeight * 0.35, best = 0;
secs.forEach(function (s, n) { if (s.offsetTop <= mid) best = n; });
btns.forEach(function (b, n) { b.classList.toggle('on', n === best); });
tick = false;
});
}
window.addEventListener('scroll', sync, { passive: true });
sync();
}
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', bmmTrail);
} else {
bmmTrail();
}

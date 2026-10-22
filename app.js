/* ============================================================
   Стек — тест по когнитивным функциям
   Вопросы, описания и типы лежат в константах ниже — их легко менять.
   ============================================================ */

// ---------- Яндекс Метрика ----------
const COUNTER_ID = 0; // замени на номер своего счётчика
function goal(name) {
  if (COUNTER_ID && typeof window.ym === 'function') window.ym(COUNTER_ID, 'reachGoal', name);
}

// ---------- Данные ----------
const FUNCS = {
  Ni: { name: 'Интровертная интуиция', tag: 'восприятие', group: 'perceive', desc: 'Видит, к чему всё идёт. Сводит множество сигналов в одно ясное понимание.' },
  Ne: { name: 'Экстравертная интуиция', tag: 'восприятие', group: 'perceive', desc: 'Видит возможности и связи. Из одной идеи рождает десять новых.' },
  Si: { name: 'Интровертное ощущение', tag: 'восприятие', group: 'perceive', desc: 'Опирается на опыт и внутренние ощущения. Ценит проверенное и стабильное.' },
  Se: { name: 'Экстравертное ощущение', tag: 'восприятие', group: 'perceive', desc: 'Живёт в моменте. Замечает детали и мгновенно реагирует на реальность.' },
  Ti: { name: 'Интровертное мышление', tag: 'решения', group: 'judge', desc: 'Строит внутреннюю логическую модель. Важно, чтобы всё сходилось.' },
  Te: { name: 'Экстравертное мышление', tag: 'решения', group: 'judge', desc: 'Организует мир под результат. Планы, метрики, эффективность.' },
  Fi: { name: 'Интровертное чувство', tag: 'решения', group: 'judge', desc: 'Сверяется с внутренними ценностями. Важно оставаться собой.' },
  Fe: { name: 'Экстравертное чувство', tag: 'решения', group: 'judge', desc: 'Чувствует людей и атмосферу. Создаёт гармонию в отношениях.' },
};
const FUNC_ORDER = ['Ni', 'Te', 'Se', 'Fi', 'Ne', 'Ti', 'Si', 'Fe'];

// Черновые вопросы — потом заменишь на свои. Каждый вопрос усиливает одну функцию.
const QUESTIONS = [
  { f: 'Ni', t: 'Я часто заранее чувствую, к чему всё придёт, хотя не могу объяснить, как к этому пришла.' },
  { f: 'Te', t: 'Сначала думаю, как сделать эффективно, а уже потом — как это красиво объяснить.' },
  { f: 'Fi', t: 'Принимаю решения, сверяясь с внутренними ценностями, даже если окружение против.' },
  { f: 'Se', t: 'Быстро реагирую на то, что происходит прямо сейчас, и легко действую по ситуации.' },
  { f: 'Ne', t: 'Мне легко из одной идеи выдать десяток вариантов развития.' },
  { f: 'Ti', t: 'Мне важно, чтобы внутри системы всё сходилось логически, даже если на практике это не нужно.' },
  { f: 'Si', t: 'Если что-то работало раньше, я буду опираться на этот опыт, а не изобретать заново.' },
  { f: 'Fe', t: 'Я чувствую настроение группы и подстраиваюсь, чтобы всем было комфортно.' },
  { f: 'Ni', t: 'Мне важнее одно глубокое видение, чем много поверхностных вариантов.' },
  { f: 'Te', t: 'Люблю планы, сроки и измеримый результат — без них чувствую хаос.' },
  { f: 'Fi', t: 'Мне важно оставаться собой, а не соответствовать чужим ожиданиям.' },
  { f: 'Se', t: 'Замечаю детали обстановки: звуки, цвета, фактуры, вкус — то, что другие пропускают.' },
  { f: 'Ne', t: 'Скучаю, когда приходится долго делать одно и то же без новых возможностей.' },
  { f: 'Ti', t: 'Разбираю идеи на составные части, пока не пойму сам принцип.' },
  { f: 'Si', t: 'Хорошо помню, как именно ощущались события из прошлого, и часто к ним возвращаюсь.' },
  { f: 'Fe', t: 'Перед решением думаю, как оно отразится на отношениях с людьми.' },
];

const TYPES = {
  INTJ: { s: ['Ni', 'Te', 'Fi', 'Se'], d: 'Стратег. Видит конечную точку и выстраивает к ней систему.' },
  INFJ: { s: ['Ni', 'Fe', 'Ti', 'Se'], d: 'Провидец. Понимает людей глубже, чем они сами себя.' },
  ENTJ: { s: ['Te', 'Ni', 'Se', 'Fi'], d: 'Командир. Превращает видение в работающую структуру.' },
  ENFJ: { s: ['Fe', 'Ni', 'Se', 'Ti'], d: 'Наставник. Ведёт людей к их лучшей версии.' },
  INTP: { s: ['Ti', 'Ne', 'Si', 'Fe'], d: 'Архитектор идей. Ищет принцип, на котором всё держится.' },
  INFP: { s: ['Fi', 'Ne', 'Si', 'Te'], d: 'Идеалист. Живёт по внутреннему компасу ценностей.' },
  ENTP: { s: ['Ne', 'Ti', 'Fe', 'Si'], d: 'Изобретатель. Проверяет идеи на прочность спором и экспериментом.' },
  ENFP: { s: ['Ne', 'Fi', 'Te', 'Si'], d: 'Вдохновитель. Видит потенциал в людях и идеях.' },
  ISTJ: { s: ['Si', 'Te', 'Fi', 'Ne'], d: 'Опора. Надёжность, порядок и проверенные решения.' },
  ISFJ: { s: ['Si', 'Fe', 'Ti', 'Ne'], d: 'Хранитель. Заботится тихо, но основательно.' },
  ESTJ: { s: ['Te', 'Si', 'Ne', 'Fi'], d: 'Организатор. Наводит порядок и доводит дела до конца.' },
  ESFJ: { s: ['Fe', 'Si', 'Ne', 'Ti'], d: 'Связующий. Держит сообщество вместе.' },
  ISTP: { s: ['Ti', 'Se', 'Ni', 'Fe'], d: 'Мастер. Понимает, как устроены вещи, через руки и логику.' },
  ISFP: { s: ['Fi', 'Se', 'Ni', 'Te'], d: 'Художник. Выражает себя через ощущения и эстетику.' },
  ESTP: { s: ['Se', 'Ti', 'Fe', 'Ni'], d: 'Игрок. Действует быстро и точно в моменте.' },
  ESFP: { s: ['Se', 'Fi', 'Te', 'Ni'], d: 'Артист. Делает момент живым для себя и других.' },
};
const WEIGHTS = [0.4, 0.3, 0.2, 0.1];

// ---------- Утилиты ----------
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const NS = 'http://www.w3.org/2000/svg';
function svgEl(tag, attrs = {}, parent) {
  const el = document.createElementNS(NS, tag);
  for (const k in attrs) el.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(el);
  return el;
}
const pad = (n) => String(n).padStart(2, '0');

// ---------- Header ----------
(function header() {
  const h = $('#header');
  const test = $('#test');
  let last = 0;
  const onScroll = () => {
    const y = window.scrollY;
    h.classList.toggle('is-scrolled', y > 20);
    h.classList.toggle('is-hidden', y > 400 && y > last);
    const r = test.getBoundingClientRect();
    h.classList.toggle('is-dark', r.top < 72 && r.bottom > 72);
    last = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ---------- Reveal ----------
(function reveal() {
  const els = $$('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion) { els.forEach((e) => e.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const siblings = [...e.target.parentElement.children].filter((c) => c.classList.contains('reveal'));
        e.target.style.transitionDelay = `${Math.max(0, siblings.indexOf(e.target)) * 90}ms`;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach((e) => io.observe(e));
})();

// ---------- Hero wheel ----------
(function wheel() {
  const svg = $('#wheel');
  const C = 300, R = 220;
  const pos = {};
  FUNC_ORDER.forEach((f, i) => {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
    pos[f] = [C + Math.cos(a) * R, C + Math.sin(a) * R];
  });

  const spin = svgEl('g', { class: 'spin' }, svg);
  svgEl('circle', { class: 'ring ring--dash', cx: C, cy: C, r: 280 }, spin);
  for (let i = 0; i < 48; i++) {
    const a = (i / 48) * Math.PI * 2;
    const r1 = 272, r2 = i % 6 === 0 ? 258 : 266;
    svgEl('line', { class: 'spoke', x1: C + Math.cos(a) * r1, y1: C + Math.sin(a) * r1, x2: C + Math.cos(a) * r2, y2: C + Math.sin(a) * r2 }, spin);
  }

  const move = svgEl('g', {}, svg);
  svgEl('circle', { class: 'ring', cx: C, cy: C, r: R }, move);
  svgEl('circle', { class: 'ring ring--dash', cx: C, cy: C, r: 120 }, move);
  FUNC_ORDER.forEach((f) => svgEl('line', { class: 'spoke', x1: C, y1: C, x2: pos[f][0], y2: pos[f][1] }, move));

  const path = svgEl('path', { class: 'path' }, move);
  const centerType = svgEl('text', { class: 'center-type', x: C, y: C - 8 }, move);
  const centerSub = svgEl('text', { class: 'center-sub', x: C, y: C + 66 }, move);
  centerSub.textContent = 'ПОРЯДОК ФУНКЦИЙ';

  const nodes = {};
  FUNC_ORDER.forEach((f) => {
    const g = svgEl('g', { class: 'node' }, move);
    svgEl('circle', { cx: pos[f][0], cy: pos[f][1], r: 34 }, g);
    const t = svgEl('text', { class: 'lbl', x: pos[f][0], y: pos[f][1] }, g);
    t.textContent = f;
    const dx = (pos[f][0] - C) / R, dy = (pos[f][1] - C) / R;
    const o = svgEl('text', { class: 'order', x: pos[f][0] + dx * 54, y: pos[f][1] + dy * 54 }, g);
    nodes[f] = { g, o };
  });

  const stackLabel = $('#wheelStack');
  const order = ['INTJ', 'ENFP', 'ISTP', 'INFJ', 'ESTJ', 'INFP', 'ENTP', 'ISFJ', 'ESFP', 'INTP', 'ENFJ', 'ISTJ', 'ESTP', 'ISFP', 'ENTJ', 'ESFJ'];
  let idx = 0;

  function show(type) {
    const s = TYPES[type].s;
    FUNC_ORDER.forEach((f) => {
      const n = nodes[f];
      const k = s.indexOf(f);
      n.g.classList.toggle('is-on', k > -1);
      n.g.classList.toggle('is-dom', k === 0);
      n.o.textContent = k > -1 ? pad(k + 1) : '';
    });
    const d = s.map((f, i) => `${i ? 'L' : 'M'}${pos[f][0]} ${pos[f][1]}`).join(' ');
    path.setAttribute('d', d);
    if (!reduceMotion) {
      const len = path.getTotalLength();
      path.style.transition = 'none';
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.getBoundingClientRect();
      path.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)';
      path.style.strokeDashoffset = 0;
    }
    centerType.style.opacity = 0;
    stackLabel.style.opacity = 0;
    setTimeout(() => {
      centerType.textContent = type;
      stackLabel.textContent = s.join(' → ');
      centerType.style.opacity = 1;
      stackLabel.style.opacity = 1;
    }, 200);
  }
  show(order[0]);
  if (!reduceMotion) setInterval(() => { idx = (idx + 1) % order.length; show(order[idx]); }, 3200);

  // Параллакс за курсором
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    let tx = 0, ty = 0, cx = 0, cy = 0;
    window.addEventListener('pointermove', (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 22;
      ty = (e.clientY / window.innerHeight - 0.5) * 22;
    });
    (function loop() {
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      move.setAttribute('transform', `translate(${cx.toFixed(2)} ${cy.toFixed(2)})`);
      requestAnimationFrame(loop);
    })();
  }
})();

// ---------- Карточки функций ----------
(function functions() {
  const grid = $('#fgrid');
  const order = ['Ni', 'Ne', 'Si', 'Se', 'Ti', 'Te', 'Fi', 'Fe'];
  grid.innerHTML = order.map((f) => `
    <article class="fcard" data-group="${FUNCS[f].group}" tabindex="0">
      <div class="fcard__top"><span class="fcard__tag">${FUNCS[f].tag}</span><span class="fcard__tag">${f[1] === 'i' ? 'интроверт.' : 'экстраверт.'}</span></div>
      <div class="fcard__code">${f}</div>
      <h3 class="fcard__name">${FUNCS[f].name}</h3>
      <p class="fcard__desc">${FUNCS[f].desc}</p>
    </article>`).join('');

  $$('.tab').forEach((tab) => tab.addEventListener('click', () => {
    $$('.tab').forEach((t) => { t.classList.toggle('is-active', t === tab); t.setAttribute('aria-selected', t === tab); });
    const f = tab.dataset.filter;
    $$('.fcard').forEach((c) => c.classList.toggle('is-dim', f !== 'all' && c.dataset.group !== f));
  }));
})();

// ---------- Радар ----------
const radar = (function () {
  const svg = $('#radar');
  const C = 160, R = 118;
  const pt = (i, v) => {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
    return [C + Math.cos(a) * R * v, C + Math.sin(a) * R * v];
  };
  [0.25, 0.5, 0.75, 1].forEach((k) => {
    svgEl('polygon', { class: 'grid', points: FUNC_ORDER.map((_, i) => pt(i, k).join(',')).join(' ') }, svg);
  });
  FUNC_ORDER.forEach((f, i) => {
    const [x, y] = pt(i, 1);
    svgEl('line', { class: 'axis', x1: C, y1: C, x2: x, y2: y }, svg);
    const [lx, ly] = pt(i, 1.2);
    svgEl('text', { x: lx, y: ly }, svg).textContent = f;
  });
  const shape = svgEl('polygon', { class: 'shape' }, svg);
  function update(scores) {
    const pts = FUNC_ORDER.map((f, i) => pt(i, 0.08 + (scores[f] / 100) * 0.92).join(',')).join(' ');
    shape.setAttribute('points', pts);
  }
  return { update };
})();

// ---------- Тест ----------
(function quiz() {
  const quiz = $('#quiz');
  const qText = $('#qText');
  const qCounter = $('#qCounter');
  const bar = $('#progressBar');
  const prog = $('#progress');
  const back = $('#backBtn');
  const opts = $$('.scale__opt');
  const N = QUESTIONS.length;
  let i = 0;
  let answers = new Array(N).fill(null);
  let locked = false;

  function scores() {
    const sum = {}, cnt = {};
    FUNC_ORDER.forEach((f) => { sum[f] = 0; cnt[f] = 0; });
    QUESTIONS.forEach((q, k) => { cnt[q.f]++; if (answers[k] !== null) sum[q.f] += answers[k]; });
    const out = {};
    FUNC_ORDER.forEach((f) => { out[f] = Math.round(((sum[f] + 2 * cnt[f]) / (4 * cnt[f])) * 100); });
    return out;
  }

  function setState(s) {
    quiz.dataset.state = s;
    if (s !== 'intro') $('#test').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }

  function render(direction = 1) {
    qCounter.textContent = `${pad(i + 1)} / ${N}`;
    const done = answers.filter((a) => a !== null).length;
    bar.style.width = `${(done / N) * 100}%`;
    prog.setAttribute('aria-valuenow', done);
    back.disabled = i === 0;
    opts.forEach((o) => o.classList.toggle('is-picked', Number(o.dataset.v) === answers[i]));
    if (reduceMotion) { qText.textContent = QUESTIONS[i].t; return; }
    qText.classList.add('is-leaving');
    setTimeout(() => {
      qText.textContent = QUESTIONS[i].t;
      qText.classList.remove('is-leaving');
      qText.classList.add('is-entering');
      qText.style.transform = `translateX(${30 * direction}px)`;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        qText.classList.remove('is-entering');
        qText.style.transform = '';
      }));
    }, 220);
  }

  function start() {
    i = 0; answers = new Array(N).fill(null); locked = false;
    radar.update(scores());
    qText.textContent = QUESTIONS[0].t;
    setState('question');
    render();
    goal('test_start');
  }

  function answer(v) {
    if (locked) return;
    answers[i] = v;
    opts.forEach((o) => o.classList.toggle('is-picked', Number(o.dataset.v) === v));
    radar.update(scores());
    locked = true;
    setTimeout(() => {
      locked = false;
      if (i < N - 1) { i++; render(1); }
      else finish();
    }, 320);
  }

  function finish() {
    const sc = scores();
    const ranked = Object.entries(TYPES).map(([t, o]) => {
      const raw = o.s.reduce((acc, f, k) => acc + sc[f] * WEIGHTS[k], 0);
      // штраф, если подчинённая функция выше ведущей — стек «перевёрнут»
      const penalty = Math.max(0, sc[o.s[3]] - sc[o.s[0]]) * 0.25;
      return { t, s: o.s, d: o.d, v: Math.max(0, Math.round(raw - penalty)) };
    }).sort((a, b) => b.v - a.v);

    const top = ranked[0];
    $('#rType').innerHTML = top.t.split('').map((c) => `<span>${c}</span>`).join('');
    $('#rName').textContent = top.d;
    $('#rStack').textContent = `Вероятный стек: ${top.s.join(' → ')}`;

    const sortedF = [...FUNC_ORDER].sort((a, b) => sc[b] - sc[a]);
    $('#rBars').innerHTML = sortedF.map((f, k) => `
      <div class="bar ${k < 2 ? 'is-top' : ''}">
        <span class="bar__code">${f}</span>
        <div class="bar__track"><div class="bar__fill" data-w="${sc[f]}"></div></div>
        <span class="bar__val">${sc[f]}</span>
      </div>`).join('');

    $('#rAlts').innerHTML = ranked.slice(0, 3).map((r) => `
      <li><span class="alts__type">${r.t}</span><span class="alts__stack">${r.s.join(' · ')}</span><span class="alts__pct">${r.v}%</span></li>`).join('');

    setState('result');
    setTimeout(() => $$('.bar__fill').forEach((b) => { b.style.width = `${b.dataset.w}%`; }), 250);
    window.__lastType = top.t;
    goal('test_complete');
  }

  $('#startBtn').addEventListener('click', start);
  opts.forEach((o) => o.addEventListener('click', () => answer(Number(o.dataset.v))));
  back.addEventListener('click', () => { if (i > 0) { i--; render(-1); } });
  $('#restartBtn').addEventListener('click', () => { goal('test_restart'); start(); });

  document.addEventListener('keydown', (e) => {
    if (quiz.dataset.state !== 'question') return;
    const n = Number(e.key);
    if (n >= 1 && n <= 5) answer(n - 3);
    if (e.key === 'Backspace' && i > 0) { e.preventDefault(); i--; render(-1); }
  });

  // Поделиться
  $('#shareBtn').addEventListener('click', async () => {
    goal('click_share');
    const url = location.href.split('#')[0];
    const text = `Мой вероятный тип по когнитивным функциям — ${window.__lastType}. Проверь свой:`;
    const status = $('#shareStatus');
    try {
      if (navigator.share) { await navigator.share({ title: 'Стек', text, url }); return; }
      await navigator.clipboard.writeText(`${text} ${url}`);
      status.textContent = 'Ссылка скопирована — отправь её друзьям.';
    } catch (err) {
      status.textContent = 'Не получилось поделиться. Скопируй адрес страницы вручную.';
    }
  });
})();

// Цели на ссылки Telegram
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-goal]');
  if (a) goal(a.dataset.goal);
});

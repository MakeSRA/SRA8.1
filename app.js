let rules = [];

fetch('rules.json')
  .then(res => res.json())
  .then(data => {
    rules = data;
    render(rules);
  });

document.getElementById('search').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  const filtered = rules.filter(r =>
    r.text.toLowerCase().includes(q) ||
    r.title.toLowerCase().includes(q) ||
    r.id.includes(q)
  );
  render(filtered);
});

function render(items) {
  const el = document.getElementById('results');
  el.innerHTML = items.map(r => `
    <section>
      <h2>${r.id} ${r.title}</h2>
      <p>${r.text}</p>
    </section>
  `).join('');
}

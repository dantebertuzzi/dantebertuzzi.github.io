/* Typed REPL session. Commands type character by character; outputs land
   at once, the way a real REPL answers. Tags are emitted whole so the
   markup never breaks mid-typing. */
(function () {
  const term = document.getElementById("term");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const steps = [
    { type: "cmd", html: '<span class="p-julia">julia&gt;</span> <span class="tk-kw">using</span> Perth' },
    { type: "cmd", html: '<span class="p-julia">julia&gt;</span> p = <span class="tk-fn">create_project</span>(<span class="tk-str">"Registry office renovation"</span>)' },
    { type: "cmd", html: '<span class="p-julia">julia&gt;</span> <span class="tk-fn">add_task!</span>(p, <span class="tk-str">"Digitize archive"</span>; start = <span class="tk-fn">Date</span>(<span class="tk-num">2026</span>, <span class="tk-num">8</span>, <span class="tk-num">1</span>), duration = <span class="tk-num">15</span>)' },
    { type: "cmd", html: '<span class="p-julia">julia&gt;</span> <span class="tk-fn">add_task!</span>(p, <span class="tk-str">"Indexing"</span>; duration = <span class="tk-num">10</span>, dependencies = [p.tasks[<span class="tk-num">1</span>].id])' },
    { type: "cmd", html: '<span class="p-julia">julia&gt;</span> <span class="tk-fn">schedule!</span>(p); p' },
    { type: "out", html:
        '<span class="out">Project: Registry office renovation           Aug 2026</span>\n' +
        '<span class="out">----------------------+----------------------------------</span>\n' +
        '<span class="out">Digitize archive      |</span> <span class="crit">################</span><span class="out">.............  *</span>\n' +
        '<span class="out">Indexing              |</span> <span class="out">................</span><span class="crit">###########</span><span class="out">...  *</span>\n' +
        '<span class="out">----------------------+----------------------------------</span>\n' +
        '<span class="out">finish: 2026-08-25    </span><span class="crit">* critical path</span><span class="out"> — slack = 0</span>' },
    { type: "cmd", html: '<span class="p-julia">julia&gt;</span> Perth.<span class="tk-fn">kanban</span>(share = <span class="tk-kw">true</span>)' },
    { type: "out", html:
        '<span class="out">  </span><span class="tk-sym">Perth</span><span class="out"> kanban board "board" running at </span><span class="tk-fn">http://localhost:8150</span>\n' +
        '<span class="out">  on your network:  </span><span class="tk-fn">http://192.168.0.42:8150</span><span class="out">  ← share this link</span>' },
    { type: "cmd", html: '<span class="p-julia">julia&gt;</span> ' },
  ];

  const CARET = '<span class="caret"></span>';
  let done = "";
  const render = (partial) => { term.innerHTML = done + partial + CARET; };

  function typeStep(i) {
    if (i >= steps.length) return;
    const step = steps[i];

    if (step.type === "out") {                     // saída do REPL cai inteira
      done += step.html + "\n";
      render("");
      setTimeout(() => typeStep(i + 1), 520);
      return;
    }
    // tags saem inteiras: a marcação nunca quebra no meio da digitação
    const units = step.html.match(/<[^>]+>|[\s\S]/g) || [];
    let k = 0;
    (function tick() {
      if (k >= units.length) {
        done += step.html + "\n";
        render("");
        setTimeout(() => typeStep(i + 1), 380);
        return;
      }
      k++;
      render(units.slice(0, k).join(""));
      setTimeout(tick, units[k - 1].startsWith("<") ? 0 : 22);
    })();
  }

  if (reduced) {
    term.innerHTML = steps.map((s) => s.html).join("\n") + CARET;
  } else {
    setTimeout(() => typeStep(0), 400);
  }
})();

/* Install-Julia tabs (macOS/Linux, Windows) */
(function () {
  const tabs = document.querySelectorAll(".tab");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-target");

      tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));

      document.querySelectorAll(".tab-panel").forEach((panel) => {
        if (panel.id === target) {
          panel.setAttribute("data-active", "");
        } else {
          panel.removeAttribute("data-active");
        }
      });
    });
  });
})();

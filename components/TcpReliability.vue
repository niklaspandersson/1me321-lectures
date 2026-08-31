<script setup lang="ts">
withDefaults(defineProps<{
  /** 1 = segment skickas och ett försvinner, 2 = bekräftelsen, 3 = omsändningen. */
  step?: number
}>(), {
  step: 3,
})
</script>

<template>
  <figure class="rel" aria-label="Servern bekräftar det som kommit fram och webbläsaren skickar om det som saknas">
    <svg viewBox="0 0 760 262" role="img">
      <defs>
        <marker id="rel-send" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0891b2" />
        </marker>
        <marker id="rel-ack" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669" />
        </marker>
      </defs>

      <g class="lane">
        <text x="120" y="26" text-anchor="middle">webbläsaren</text>
        <line x1="120" y1="42" x2="120" y2="250" />
        <text x="640" y="26" text-anchor="middle">servern</text>
        <line x1="640" y1="42" x2="640" y2="250" />
      </g>

      <g class="msg send" :class="{ pending: step < 1 }">
        <text x="380" y="70" text-anchor="middle">segment 1</text>
        <line x1="120" y1="80" x2="632" y2="80" marker-end="url(#rel-send)" />
        <text x="380" y="105" text-anchor="middle">segment 2</text>
        <line x1="120" y1="115" x2="632" y2="115" marker-end="url(#rel-send)" />
      </g>

      <g class="msg lost" :class="{ pending: step < 1 }">
        <text x="270" y="140" text-anchor="middle">segment 3</text>
        <line x1="120" y1="150" x2="400" y2="150" />
        <g class="cross">
          <line x1="408" y1="142" x2="424" y2="158" />
          <line x1="424" y1="142" x2="408" y2="158" />
        </g>
        <text x="500" y="155" class="note">försvinner på vägen</text>
      </g>

      <g class="msg ack" :class="{ pending: step < 2 }">
        <text x="380" y="182" text-anchor="middle">bekräftelse: har 1 och 2</text>
        <line x1="640" y1="192" x2="128" y2="192" marker-end="url(#rel-ack)" />
      </g>

      <g class="msg send" :class="{ pending: step < 3 }">
        <text x="380" y="222" text-anchor="middle">segment 3 igen</text>
        <line x1="120" y1="232" x2="632" y2="232" marker-end="url(#rel-send)" />
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.rel {
  width: 44rem;
  max-width: 100%;
  margin: 1.2rem auto 0.8rem;
}

svg {
  width: 100%;
  height: auto;
}

text {
  font-size: 12px;
  fill: #475569;
}

.lane text {
  font-size: 13px;
  font-weight: 700;
  fill: #0f172a;
}

.lane line {
  stroke: #cbd5e1;
  stroke-width: 2;
}

.msg {
  transition: opacity 0.25s ease;
}

.msg.pending {
  opacity: 0;
}

.send line {
  stroke: #0891b2;
  stroke-width: 2.5;
}

.send text {
  fill: #0e7490;
}

.ack line {
  stroke: #059669;
  stroke-width: 2.5;
}

.ack text {
  fill: #047857;
}

.lost line {
  stroke: #dc2626;
  stroke-width: 2.5;
  stroke-dasharray: 7 5;
}

.lost text {
  fill: #b91c1c;
}

.lost .cross line {
  stroke-dasharray: none;
  stroke-width: 3;
  stroke-linecap: round;
}

.note {
  font-size: 11px;
  fill: #94a3b8;
  text-anchor: start;
}
</style>

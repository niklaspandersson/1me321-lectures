<script setup lang="ts">
import { useId } from 'vue'

withDefaults(defineProps<{
  /**
   * 0 = bara din dator, 1 = lådan, 2 = datorn på andra sidan,
   * 3 = rollerna får namn, 4 = begäran, 5 = svar.
   */
  step?: number
}>(), {
  step: 5,
})

// Komponenten används på flera slides samtidigt; markörernas id måste vara
// unika per instans, annars pekar alla marker-end på samma (kanske avmonterade)
// definition och pilspetsarna försvinner.
const uid = useId()
const reqMarker = `ib-req-${uid}`
const resMarker = `ib-res-${uid}`
</script>

<template>
  <figure class="ibox" aria-label="Din dator är kopplad till Internet, och på andra sidan finns en bestämd dator">
    <svg viewBox="0 0 760 285" role="img">
      <defs>
        <marker :id="reqMarker" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
        </marker>
        <marker :id="resMarker" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669" />
        </marker>
      </defs>

      <g class="machine you" :class="{ named: step >= 3 }">
        <rect x="40" y="105" width="160" height="70" rx="10" />
        <text x="120" y="147" text-anchor="middle">din dator</text>
      </g>

      <!-- Lådan är medvetet ogenomskinlig: vi vet att den finns och att
           trafiken går igenom den, men inte vad den innehåller. Först står
           datorn ensam – lådan kopplas på i nästa steg. -->
      <g class="net" :class="{ pending: step < 1 }">
        <line class="wire" x1="200" y1="140" x2="300" y2="140" />

        <g class="box">
          <rect x="300" y="95" width="180" height="90" rx="14" />
          <text x="390" y="147" text-anchor="middle">internet</text>
        </g>
      </g>

      <g class="far" :class="{ pending: step < 2 }">
        <line class="wire" x1="480" y1="140" x2="580" y2="140" />
        <g class="machine host" :class="{ named: step >= 3 }">
          <rect x="580" y="105" width="160" height="70" rx="10" />
          <text x="660" y="133" text-anchor="middle">en dator</text>
          <text x="660" y="157" text-anchor="middle">någonstans</text>
        </g>
      </g>

      <g class="roles" :class="{ pending: step < 3 }">
        <text x="120" y="200" text-anchor="middle" class="role client">klient</text>
        <text x="660" y="200" text-anchor="middle" class="role server">server</text>
      </g>

      <g class="flow req" :class="{ pending: step < 4 }">
        <text x="385" y="38" text-anchor="middle">begäran</text>
        <line x1="120" y1="52" x2="648" y2="52" :marker-end="`url(#${reqMarker})`" />
      </g>

      <g class="flow res" :class="{ pending: step < 5 }">
        <text x="385" y="272" text-anchor="middle">svar</text>
        <line x1="660" y1="243" x2="132" y2="243" :marker-end="`url(#${resMarker})`" />
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.ibox {
  width: 44rem;
  max-width: 100%;
  margin: 1.4rem auto 1rem;
}

svg {
  width: 100%;
  height: auto;
}

.pending {
  opacity: 0;
}

.net,
.far,
.roles,
.flow,
.machine rect {
  transition: opacity 0.25s ease, stroke 0.25s ease;
}

.machine rect {
  fill: #fff;
  stroke: #cbd5e1;
  stroke-width: 2;
}

.machine text {
  font-size: 15px;
  fill: #0f172a;
  font-weight: 600;
}

.you.named rect {
  stroke: #2563eb;
  fill: #eff6ff;
}

.host.named rect {
  stroke: #059669;
  fill: #ecfdf5;
}

.wire {
  stroke: #cbd5e1;
  stroke-width: 2.5;
}

.box rect {
  fill: #334155;
}

.box text {
  font-size: 17px;
  font-weight: 700;
  fill: #fff;
  letter-spacing: 0.02em;
}

.role {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.role.client {
  fill: #2563eb;
}

.role.server {
  fill: #059669;
}

.flow text {
  font-size: 13px;
}

.req text {
  fill: #1d4ed8;
  font-weight: 600;
}

.req line {
  stroke: #2563eb;
  stroke-width: 2.5;
}

.res text {
  fill: #047857;
  font-weight: 600;
}

.res line {
  stroke: #059669;
  stroke-width: 2.5;
}
</style>

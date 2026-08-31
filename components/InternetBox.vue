<script setup lang="ts">
withDefaults(defineProps<{
  /**
   * 1 = din dator och lådan, 2 = datorn på andra sidan,
   * 3 = rollerna får namn, 4 = begäran, 5 = svar.
   */
  step?: number
  /**
   * Visa andra sidan som många uppkopplade datorer i stället för en.
   * Används för att motivera varför en adress behövs – lådan förblir stängd.
   */
  crowd?: boolean
}>(), {
  step: 5,
  crowd: false,
})

/*
 * Datorer utspridda runt hela högersidan av lådan. Positionerna är satta
 * för hand, inte i ett rutnät – poängen är "oerhört många, överallt",
 * och ett regelbundet mönster antyder en struktur vi inte vill visa än.
 */
const hosts = [
  { x: 534, y: 62 },
  { x: 612, y: 26 },
  { x: 690, y: 48 },
  { x: 742, y: 96 },
  { x: 548, y: 134 },
  { x: 650, y: 112, target: true },
  { x: 722, y: 158 },
  { x: 560, y: 208 },
  { x: 640, y: 222 },
  { x: 716, y: 232 },
]
</script>

<template>
  <figure class="ibox" aria-label="Din dator är kopplad till Internet, och på andra sidan finns en bestämd dator">
    <svg viewBox="0 0 760 285" role="img">
      <defs>
        <marker id="ib-req" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
        </marker>
        <marker id="ib-res" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669" />
        </marker>
      </defs>

      <g class="machine you" :class="{ named: step >= 3 }">
        <rect x="40" y="105" width="160" height="70" rx="10" />
        <text x="120" y="147" text-anchor="middle">din dator</text>
      </g>

      <line class="wire" x1="200" y1="140" x2="300" y2="140" />

      <!-- Lådan är medvetet ogenomskinlig: vi vet att den finns och att
           trafiken går igenom den, men inte vad den innehåller. -->
      <g class="box">
        <rect x="300" y="95" width="180" height="90" rx="14" />
        <text x="390" y="147" text-anchor="middle">internet</text>
      </g>

      <g v-if="crowd" class="far crowd" :class="{ pending: step < 1 }">
        <line
          v-for="(h, i) in hosts"
          :key="'ray' + i"
          class="ray"
          :class="{ target: h.target && step >= 2 }"
          x1="480" y1="140" :x2="h.x - 17" :y2="h.y"
        />

        <g
          v-for="(h, i) in hosts"
          :key="'host' + i"
          class="host-icon"
          :class="{ target: h.target && step >= 2 }"
          :transform="`translate(${h.x}, ${h.y})`"
        >
          <rect class="screen" x="-15" y="-11" width="30" height="22" rx="2.5" />
          <rect class="stand" x="-3" y="11" width="6" height="4" />
          <rect class="base" x="-10" y="15" width="20" height="2.5" rx="1.2" />
        </g>

        <!-- Grön text mot den enda gröna datorn: färgen kopplar ihop dem. -->
        <text v-if="step >= 3" x="650" y="152" text-anchor="middle" class="addr">203.0.113.42</text>
      </g>

      <g v-else class="far" :class="{ pending: step < 2 }">
        <line class="wire" x1="480" y1="140" x2="580" y2="140" />
        <g class="machine host" :class="{ named: step >= 3 }">
          <rect x="580" y="105" width="160" height="70" rx="10" />
          <text x="660" y="133" text-anchor="middle">en dator</text>
          <text x="660" y="157" text-anchor="middle">någonstans</text>
        </g>
      </g>

      <g v-if="!crowd" class="roles" :class="{ pending: step < 3 }">
        <text x="120" y="200" text-anchor="middle" class="role client">klient</text>
        <text x="660" y="200" text-anchor="middle" class="role server">server</text>
      </g>

      <g class="flow req" :class="{ pending: step < 4 }">
        <text x="385" y="38" text-anchor="middle">begäran</text>
        <line x1="120" y1="52" x2="648" y2="52" marker-end="url(#ib-req)" />
      </g>

      <g class="flow res" :class="{ pending: step < 5 }">
        <text x="385" y="272" text-anchor="middle">svar</text>
        <line x1="660" y1="243" x2="132" y2="243" marker-end="url(#ib-res)" />
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

/* Enkel skärm med fot. Ikonen ritas kring sin egen mittpunkt så att
   positionerna ovan kan anges som centrum. */
.host-icon rect {
  transition: fill 0.25s ease, stroke 0.25s ease;
}

.host-icon .screen {
  fill: #fff;
  stroke: #94a3b8;
  stroke-width: 2;
}

.host-icon .stand,
.host-icon .base {
  fill: #94a3b8;
}

.host-icon.target .screen {
  fill: #ecfdf5;
  stroke: #059669;
  stroke-width: 2.5;
}

.host-icon.target .stand,
.host-icon.target .base {
  fill: #059669;
}

/* Tunna strålar från lådan ut till varje dator: alla nås genom den. */
.ray {
  stroke: #e2e8f0;
  stroke-width: 1.5;
  transition: stroke 0.25s ease;
}

.ray.target {
  stroke: #059669;
  stroke-width: 2.5;
}

.addr {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 13px;
  font-weight: 700;
  fill: #047857;
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

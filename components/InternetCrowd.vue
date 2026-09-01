<script setup lang="ts">
withDefaults(defineProps<{
  /**
   * 0 = klienten, lådan och servern, 1 = alla andra datorer bakom lådan,
   * 2 = serverns IP-adress.
   */
  step?: number
}>(), {
  step: 2,
})

/*
 * Servern vi redan känner igen från förra bilden. Den ligger utanför listan
 * nedan eftersom den syns från början – mängden runt omkring kommer sedan.
 */
const server = { x: 650, y: 138 }

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
  { x: 722, y: 158 },
  { x: 560, y: 208 },
  { x: 640, y: 222 },
  { x: 716, y: 232 },
]
</script>

<template>
  <figure class="ibox" aria-label="Genom internet når din dator oerhört många datorer – en IP-adress pekar ut exakt en av dem">
    <svg viewBox="0 0 760 285" role="img">
      <g class="machine you">
        <rect x="40" y="105" width="160" height="70" rx="10" />
        <text x="120" y="147" text-anchor="middle">din dator</text>
      </g>
      <text x="120" y="200" text-anchor="middle" class="role client">klient</text>

      <!-- Lådan är fortfarande stängd här: poängen är hur många som finns
           bakom den, inte hur de är sammankopplade. -->
      <line class="wire" x1="200" y1="140" x2="300" y2="140" />

      <g class="box">
        <rect x="300" y="95" width="180" height="90" rx="14" />
        <text x="390" y="147" text-anchor="middle">internet</text>
      </g>

      <!-- Mängden kommer först i steg 1. Innan dess står servern ensam på
           andra sidan, precis som på förra bilden. -->
      <g class="crowd" :class="{ pending: step < 1 }">
        <line
          v-for="(h, i) in hosts"
          :key="'ray' + i"
          class="ray"
          x1="480" y1="140" :x2="h.x - 17" :y2="h.y"
        />

        <g
          v-for="(h, i) in hosts"
          :key="'host' + i"
          class="host-icon"
          :transform="`translate(${h.x}, ${h.y})`"
        >
          <rect class="screen" x="-15" y="-11" width="30" height="22" rx="2.5" />
          <rect class="stand" x="-3" y="11" width="6" height="4" />
          <rect class="base" x="-10" y="15" width="20" height="2.5" rx="1.2" />
        </g>
      </g>

      <line class="ray target" x1="480" y1="140" :x2="server.x - 17" :y2="server.y" />

      <g class="host-icon target" :transform="`translate(${server.x}, ${server.y})`">
        <rect class="screen" x="-15" y="-11" width="30" height="22" rx="2.5" />
        <rect class="stand" x="-3" y="11" width="6" height="4" />
        <rect class="base" x="-10" y="15" width="20" height="2.5" rx="1.2" />
      </g>

      <text :x="server.x" y="170" text-anchor="middle" class="role server">server</text>

      <!-- Grön text mot den enda gröna datorn: färgen kopplar ihop dem. -->
      <text
        :x="server.x" y="117" text-anchor="middle" class="addr"
        :class="{ pending: step < 2 }"
      >203.0.113.42</text>
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

.crowd,
.addr {
  transition: opacity 0.25s ease;
}

.machine rect {
  fill: #fff;
  stroke: #2563eb;
  stroke-width: 2;
}

.you rect {
  fill: #eff6ff;
}

.machine text {
  font-size: 15px;
  fill: #0f172a;
  font-weight: 600;
}

.wire {
  stroke: #cbd5e1;
  stroke-width: 2.5;
}

/* Enkel skärm med fot. Ikonen ritas kring sin egen mittpunkt så att
   positionerna ovan kan anges som centrum. */
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
</style>

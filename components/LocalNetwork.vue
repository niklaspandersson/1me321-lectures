<script setup lang="ts">
withDefaults(defineProps<{
  /** lan = det lokala nätverket, gateway = vägen ut. */
  focus?: 'lan' | 'gateway'
}>(), {
  focus: 'lan',
})
</script>

<template>
  <figure class="local" aria-label="Enheter i ett lokalt nätverk når andra nätverk genom en router">
    <svg viewBox="0 0 760 250" role="img">
      <g :class="['lan', { lit: focus === 'lan' }]">
        <rect x="15" y="35" width="400" height="190" rx="16" />
        <text x="35" y="62" class="zone-label">LAN – ditt lokala nätverk</text>
      </g>

      <g class="device">
        <rect x="45" y="90" width="115" height="45" rx="9" />
        <text x="102" y="118" text-anchor="middle">dator</text>
      </g>
      <g class="device">
        <rect x="45" y="155" width="115" height="45" rx="9" />
        <text x="102" y="183" text-anchor="middle">mobil</text>
      </g>

      <line class="wire" x1="160" y1="112" x2="255" y2="140" />
      <line class="wire" x1="160" y1="178" x2="255" y2="150" />

      <g :class="['router', { lit: focus === 'gateway' }]">
        <rect x="255" y="115" width="130" height="60" rx="10" />
        <text x="320" y="140" text-anchor="middle" class="strong">router</text>
        <text x="320" y="160" text-anchor="middle" class="sub">nätverkets gateway</text>
      </g>

      <g :class="['out', { lit: focus === 'gateway' }]">
        <line x1="385" y1="145" x2="520" y2="145" />
        <polygon points="520,138 538,145 520,152" />
        <text x="452" y="132" text-anchor="middle" class="sub">ut ur nätverket</text>
      </g>

      <g class="cloud">
        <rect x="545" y="100" width="195" height="90" rx="45" />
        <text x="642" y="140" text-anchor="middle" class="strong">Internet</text>
        <text x="642" y="160" text-anchor="middle" class="sub">alla andra nätverk</text>
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.local {
  width: 44rem;
  max-width: 100%;
  margin: 1.3rem auto 0.9rem;
}

svg {
  width: 100%;
  height: auto;
}

text {
  font-size: 14px;
  fill: #475569;
}

.zone-label {
  font-size: 13px;
  fill: #94a3b8;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.strong {
  font-size: 15px;
  fill: #0f172a;
  font-weight: 700;
}

.sub {
  font-size: 12px;
  fill: #64748b;
}

.lan rect {
  fill: #f8fafc;
  stroke: #cbd5e1;
  stroke-width: 2;
  stroke-dasharray: 7 6;
}

.lan.lit rect {
  fill: #eff6ff;
  stroke: #2563eb;
}

.lan.lit .zone-label {
  fill: #2563eb;
}

.device rect {
  fill: #fff;
  stroke: #cbd5e1;
  stroke-width: 2;
}

.wire {
  stroke: #cbd5e1;
  stroke-width: 2;
}

.router rect {
  fill: #fff;
  stroke: #cbd5e1;
  stroke-width: 2;
}

.router.lit rect {
  fill: #eff6ff;
  stroke: #2563eb;
  stroke-width: 3;
}

.out line {
  stroke: #cbd5e1;
  stroke-width: 2.5;
}

.out polygon {
  fill: #cbd5e1;
}

.out.lit line {
  stroke: #2563eb;
  stroke-width: 3;
}

.out.lit polygon {
  fill: #2563eb;
}

.cloud rect {
  fill: #f1f5f9;
  stroke: #cbd5e1;
  stroke-width: 2;
}
</style>

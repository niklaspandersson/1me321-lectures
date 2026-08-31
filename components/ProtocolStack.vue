<script setup lang="ts">
withDefaults(defineProps<{
  /** Lagret som filmen arbetar med just nu. */
  active?: '' | 'app' | 'transport' | 'internet' | 'link'
  /** Hur många lager som visats hittills, uppifrån och ner. */
  reveal?: number
  /** Kompakt rad, för att visa var i stacken vi befinner oss. */
  compact?: boolean
}>(), {
  active: '',
  reveal: 4,
  compact: false,
})

const layers = [
  { key: 'app', name: 'Applikation', proto: 'HTTP', short: 'HTTP', role: 'vad vi ber om' },
  { key: 'transport', name: 'Transport', proto: 'TCP', short: 'TCP', role: 'allt fram, i ordning, till rätt program' },
  { key: 'internet', name: 'Internet', proto: 'IP', short: 'IP', role: 'fram till rätt dator' },
  { key: 'link', name: 'Länk', proto: 'Ethernet · Wi-Fi', short: 'Länk', role: 'ett steg i taget' },
]
</script>

<template>
  <nav v-if="compact" class="stack-row" aria-label="Protokollstacken">
    <template v-for="(l, i) in layers" :key="l.key">
      <span class="chip" :class="[l.key, { on: active === l.key }]">{{ l.short }}</span>
      <span v-if="i < layers.length - 1" class="sep" aria-hidden="true">›</span>
    </template>
  </nav>

  <figure v-else class="stack" aria-label="Protokollstacken, uppifrån och ner">
    <div
      v-for="(l, i) in layers"
      :key="l.key"
      class="layer"
      :class="[l.key, { pending: i >= reveal, dim: active && active !== l.key }]"
    >
      <span class="name">{{ l.name }}</span>
      <span class="proto">{{ l.proto }}</span>
      <span class="role">{{ l.role }}</span>
    </div>
  </figure>
</template>

<style scoped>
.stack {
  width: 44rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin: 1.4rem auto 1rem;
}

/* Lagren avslöjas ett i taget, men höjden är reserverad så att stacken
   inte växer underifrån och flyttar det som redan står på bilden. */
.layer {
  display: grid;
  grid-template-columns: 8rem 10.5rem 1fr;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1rem;
  border: 2px solid;
  border-radius: 0.55rem;
  transition: opacity 0.25s ease;
}

.layer.pending {
  opacity: 0;
}

.layer.dim {
  opacity: 0.3;
}

.name {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.proto {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
}

.role {
  font-size: 0.82rem;
  color: #475569;
}

/* Länklagret namnger två tekniker i stället för ett protokoll, så den
   raden behöver mindre text för att rymmas på en rad. */
.link .proto {
  font-size: 0.85rem;
}

/* En färg per lager. Samma färger används i inkapslingen, så att ett
   block i paketet går att koppla till sitt lager i stacken. */
.app {
  border-color: #7c3aed;
  background: #f5f3ff;
}

.app .name {
  color: #6d28d9;
}

.transport {
  border-color: #0891b2;
  background: #ecfeff;
}

.transport .name {
  color: #0e7490;
}

.internet {
  border-color: #ea580c;
  background: #fff7ed;
}

.internet .name {
  color: #c2410c;
}

.link {
  border-color: #94a3b8;
  background: #f1f5f9;
}

.link .name {
  color: #475569;
}

.stack-row {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 1.3rem;
  font-size: 0.72rem;
  color: #94a3b8;
}

.chip {
  padding: 0.2rem 0.6rem;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-weight: 700;
  white-space: nowrap;
}

.sep {
  color: #cbd5e1;
}

.chip.on.app {
  border-color: #7c3aed;
  background: #f5f3ff;
  color: #6d28d9;
}

.chip.on.transport {
  border-color: #0891b2;
  background: #ecfeff;
  color: #0e7490;
}

.chip.on.internet {
  border-color: #ea580c;
  background: #fff7ed;
  color: #c2410c;
}

.chip.on.link {
  border-color: #64748b;
  background: #f1f5f9;
  color: #334155;
}
</style>

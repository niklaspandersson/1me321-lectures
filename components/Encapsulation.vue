<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /** 1–4 packas ner genom stacken hos webbläsaren, 5–7 packas upp hos servern. */
  step?: number
}>(), {
  step: 7,
})

const headers = [
  { key: 'link', name: 'Länk', detail: 'nästa steg i nätet' },
  { key: 'ip', name: 'IP', detail: 'från 198.51.100.7 → till 203.0.113.42' },
  { key: 'tcp', name: 'TCP', detail: 'port 443 · segment 1' },
]

const payload = { key: 'data', name: 'HTTP-begäran', detail: 'GET /kurser HTTP/1.1 …' }

/* Steg 1–4 lägger på ett huvud i taget, steg 5–7 tar av dem i omvänd
   ordning. Djupet är alltså symmetriskt kring steg 4. */
const depth = computed(() => Math.max(1, Math.min(props.step, 8 - props.step)))

const blocks = computed(() => [
  ...headers.slice(headers.length + 1 - depth.value),
  payload,
])

const caption = computed(() => {
  if (props.step <= 3)
    return 'hos webbläsaren · ner genom stacken'
  if (props.step === 4)
    return 'ut på nätet'
  return 'hos servern · upp genom stacken'
})
</script>

<template>
  <figure class="enc" aria-label="Varje lager lägger till sitt huvud på väg ner och tar av det på väg upp">
    <TransitionGroup tag="div" name="wrap" class="packet">
      <div v-for="b in blocks" :key="b.key" class="block" :class="b.key">
        <span class="name">{{ b.name }}</span>
        <span class="detail">{{ b.detail }}</span>
      </div>
    </TransitionGroup>

    <figcaption :class="{ mid: step === 4 }">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.enc {
  width: 46rem;
  max-width: 100%;
  margin: 2rem auto 1.2rem;
}

.packet {
  position: relative;
  display: flex;
  align-items: stretch;
  gap: 0.3rem;
  min-height: 4.4rem;
}

.block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
  padding: 0.6rem 0.7rem;
  border: 2px solid;
  border-radius: 0.5rem;
  text-align: center;
  flex: none;
}

.name {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0f172a;
}

.detail {
  font-size: 0.66rem;
  line-height: 1.25;
  color: #64748b;
}

/* Samma lagerfärger som i protokollstacken. */
.link {
  width: 7rem;
  border-color: #94a3b8;
  background: #f1f5f9;
}

.ip {
  width: 13.5rem;
  border-color: #ea580c;
  background: #fff7ed;
}

.tcp {
  width: 10rem;
  border-color: #0891b2;
  background: #ecfeff;
}

.data {
  flex: 1;
  border-color: #7c3aed;
  background: #f5f3ff;
}

/* Huvudena glider in från vänster; nyttolasten flyttar sig åt sidan
   i stället för att hoppa, så att det syns att den är oförändrad. */
.wrap-enter-active,
.wrap-leave-active,
.wrap-move {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.wrap-enter-from,
.wrap-leave-to {
  opacity: 0;
  transform: translateX(-1.2rem);
}

.wrap-leave-active {
  position: absolute;
}

figcaption {
  margin-top: 0.9rem;
  font-size: 0.78rem;
  color: #64748b;
  text-align: center;
}

figcaption.mid {
  color: #0f172a;
  font-weight: 700;
}
</style>

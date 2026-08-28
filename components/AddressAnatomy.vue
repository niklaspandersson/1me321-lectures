<script setup lang="ts">
withDefaults(defineProps<{
  /** Vilken del av webbadressen som ska lyftas fram. */
  highlight?: '' | 'protocol' | 'domain' | 'path'
}>(), {
  highlight: '',
})

const parts = [
  { key: 'protocol', text: 'https://', label: 'protokoll', note: 'hur vi frågar' },
  { key: 'domain', text: 'www.lnu.se', label: 'domännamn', note: 'vem vi frågar' },
  { key: 'path', text: '/kurser', label: 'sökväg', note: 'vad vi vill ha' },
]
</script>

<template>
  <figure class="address-anatomy" aria-label="Webbadressens delar">
    <div class="parts">
      <div
        v-for="part in parts"
        :key="part.key"
        class="part"
        :class="{ dim: highlight && highlight !== part.key, lit: highlight === part.key }"
      >
        <span class="text">{{ part.text }}</span>
        <span class="tick" aria-hidden="true" />
        <span class="label">{{ part.label }}</span>
        <span class="note">{{ part.note }}</span>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.address-anatomy {
  width: 42rem;
  max-width: 100%;
  margin: 2.2rem auto 1.4rem;
}

.parts {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.15rem;
}

.part {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0 0.2rem;
  transition: opacity 0.2s ease;
}

.text {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 1.7rem;
  color: #0f172a;
  padding: 0.15rem 0.35rem;
  border-radius: 0.35rem;
}

.tick {
  align-self: stretch;
  height: 0.55rem;
  border-left: 1px solid #cbd5e1;
  border-right: 1px solid #cbd5e1;
  border-bottom: 1px solid #cbd5e1;
  border-radius: 0 0 0.25rem 0.25rem;
}

.label {
  font-size: 0.9rem;
  font-weight: 700;
  color: #334155;
}

.note {
  font-size: 0.75rem;
  color: #64748b;
}

.part.lit .text {
  background: #eff6ff;
  color: #1d4ed8;
}

.part.lit .tick {
  border-color: #2563eb;
}

.part.lit .label {
  color: #1d4ed8;
}

.part.dim {
  opacity: 0.35;
}
</style>

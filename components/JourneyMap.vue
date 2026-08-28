<script setup lang="ts">
defineProps<{
  active?: string
}>()

const steps = ['Webbadress', 'DNS', 'IP', 'TCP', 'HTTP', 'HTML/CSS', 'Färdig sida']
</script>

<template>
  <nav class="journey-map" aria-label="Från webbadress till webbsida">
    <template v-for="(step, index) in steps" :key="step">
      <span
        class="journey-step"
        :class="{ active: step === active }"
        :aria-current="step === active ? 'step' : undefined"
      >{{ step }}</span>
      <span v-if="index < steps.length - 1" class="journey-arrow" aria-hidden="true">→</span>
    </template>
  </nav>
</template>

<style scoped>
.journey-map {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 1.4rem;
  font-size: 0.72rem;
  color: #64748b;
}

.journey-step {
  padding: 0.2rem 0.42rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.35rem;
  white-space: nowrap;
}

.journey-step.active {
  color: #0f172a;
  background: #e2e8f0;
  border-color: #64748b;
  font-weight: 700;
}

.journey-arrow {
  color: #94a3b8;
}
</style>

<script setup lang="ts">
withDefaults(defineProps<{
  /** Visa svaret från DNS. */
  answered?: boolean
}>(), {
  answered: false,
})
</script>

<template>
  <figure class="dns" aria-label="DNS översätter ett domännamn till en IP-adress">
    <div class="box name">
      <span class="cap">det du skrev</span>
      <code>www.lnu.se</code>
      <span class="who">ett namn för människor</span>
    </div>

    <div class="step">
      <span class="q">Vilken IP-adress hör till namnet?</span>
      <span class="chip">DNS</span>
      <span class="flow" aria-hidden="true" />
    </div>

    <div class="box ip" :class="{ lit: answered }">
      <span class="cap">det nätverket behöver</span>
      <code>203.0.113.42</code>
      <span class="who">en adress för datorer</span>
    </div>
  </figure>
</template>

<style scoped>
.dns {
  width: 44rem;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.1fr 1fr;
  align-items: center;
  gap: 0.9rem;
  margin: 2.1rem auto 1.3rem;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 1rem 0.7rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.7rem;
  background: #fff;
  text-align: center;
}

.box code {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 1.15rem;
  color: #0f172a;
}

.cap {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #94a3b8;
}

.who {
  font-size: 0.75rem;
  color: #64748b;
}

.name {
  border-color: #2563eb;
  background: #eff6ff;
}

.ip.lit {
  border-color: #059669;
  background: #ecfdf5;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}

.q {
  font-size: 0.75rem;
  color: #64748b;
  text-align: center;
}

.chip {
  padding: 0.2rem 0.8rem;
  border-radius: 999px;
  background: #0f172a;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

/* Skaftet är en linje och spetsen en CSS-triangel, i stället för ett
   pilglyf som renderas olika i olika typsnitt. */
.flow {
  position: relative;
  align-self: stretch;
  height: 2px;
  background: #cbd5e1;
}

.flow::after {
  content: '';
  position: absolute;
  right: -1px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 10px solid #cbd5e1;
}
</style>

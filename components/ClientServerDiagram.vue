<script setup lang="ts">
withDefaults(defineProps<{
  /** roles = vilka programmen är, request = begäran, response = svar, exchange = båda. */
  focus?: 'roles' | 'request' | 'response' | 'exchange'
}>(), {
  focus: 'roles',
})
</script>

<template>
  <figure class="cs" aria-label="Webbläsaren skickar en begäran och webbservern skickar ett svar">
    <div class="actor client" :class="{ lit: focus === 'roles' || focus === 'request' }">
      <span class="icon" aria-hidden="true">🖥</span>
      <strong>Webbläsaren</strong>
      <span class="role">klient</span>
      <span class="does">frågar efter något</span>
    </div>

    <div class="exchange">
      <div class="arrow request" :class="{ lit: focus === 'request' || focus === 'exchange' }">
        <span class="text">begäran: ge mig /kurser</span>
        <span class="line" aria-hidden="true"><i /><b>▶</b></span>
      </div>
      <div class="arrow response" :class="{ lit: focus === 'response' || focus === 'exchange' }">
        <span class="line back" aria-hidden="true"><b>◀</b><i /></span>
        <span class="text">svar: här är dokumentet</span>
      </div>
    </div>

    <div class="actor server" :class="{ lit: focus === 'roles' || focus === 'response' }">
      <span class="icon" aria-hidden="true">🗄</span>
      <strong>Webbservern</strong>
      <span class="role">server</span>
      <span class="does">väntar och svarar</span>
    </div>
  </figure>
</template>

<style scoped>
.cs {
  width: 46rem;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  align-items: center;
  gap: 1.2rem;
  margin: 2rem auto 1.2rem;
}

.actor {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  padding: 1rem 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.7rem;
  background: #fff;
  text-align: center;
}

.icon {
  font-size: 1.5rem;
  line-height: 1.2;
}

.actor strong {
  font-size: 1.05rem;
  color: #0f172a;
}

.role {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #94a3b8;
}

.does {
  font-size: 0.78rem;
  color: #64748b;
}

.client.lit {
  border-color: #2563eb;
  background: #eff6ff;
}

.client.lit .role {
  color: #2563eb;
}

.server.lit {
  border-color: #059669;
  background: #ecfdf5;
}

.server.lit .role {
  color: #059669;
}

.exchange {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.arrow {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  opacity: 0.35;
}

.arrow.lit {
  opacity: 1;
}

.arrow:not(.lit) .text {
  visibility: hidden;
}

.arrow .text {
  font-size: 0.78rem;
  color: #475569;
  text-align: center;
}

.line {
  display: flex;
  align-items: center;
  gap: 0.15rem;
  color: #cbd5e1;
  font-size: 0.7rem;
}

.line i {
  flex: 1;
  height: 2px;
  background: currentColor;
}

.request.lit .line {
  color: #2563eb;
}

.request.lit .text {
  color: #1d4ed8;
  font-weight: 600;
}

.response.lit .line {
  color: #059669;
}

.response.lit .text {
  color: #047857;
  font-weight: 600;
}
</style>

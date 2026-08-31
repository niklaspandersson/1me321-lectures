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
    <div class="actor client">
      <span class="icon" aria-hidden="true">🖥</span>
      <strong>Webbläsaren</strong>
      <span class="role">klient</span>
      <span class="does">frågar efter något</span>
    </div>

    <div class="exchange">
      <div class="arrow request" :class="{ lit: focus === 'request' || focus === 'exchange' }">
        <span class="text">begäran: ge mig /kurser</span>
        <span class="line to-server" aria-hidden="true" />
      </div>
      <div class="arrow response" :class="{ lit: focus === 'response' || focus === 'exchange' }">
        <span class="line to-client" aria-hidden="true" />
        <span class="text">svar: här är dokumentet</span>
      </div>
    </div>

    <div class="actor server">
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
  grid-template-columns: 1fr 1.6fr 1fr;
  align-items: center;
  gap: 1.2rem;
  margin: 2rem auto 1.2rem;
}

/* Rollerna har alltid sin egen färg – blått frågar, grönt svarar –
   så att pilarnas färger går att läsa av mot dem. */
.actor {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  padding: 1rem 0.8rem;
  border: 2px solid;
  border-radius: 0.7rem;
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
}

.does {
  font-size: 0.78rem;
  color: #64748b;
}

.client {
  border-color: #2563eb;
  background: #eff6ff;
}

.client .role {
  color: #2563eb;
}

.server {
  border-color: #059669;
  background: #ecfdf5;
}

.server .role {
  color: #059669;
}

.exchange {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.arrow {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  opacity: 0.3;
  transition: opacity 0.25s ease;
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

/* Skaftet är en linje och spetsen en CSS-triangel, i stället för ett
   pilglyf som renderas olika i olika typsnitt. */
.line {
  position: relative;
  height: 2px;
  background: #cbd5e1;
}

.line::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}

.line.to-server::after {
  right: -1px;
  transform: translateY(-50%);
  border-left: 10px solid #cbd5e1;
}

.line.to-client::after {
  left: -1px;
  transform: translateY(-50%);
  border-right: 10px solid #cbd5e1;
}

.request.lit .line {
  background: #2563eb;
}

.request.lit .line::after {
  border-left-color: #2563eb;
}

.request.lit .text {
  color: #1d4ed8;
  font-weight: 600;
}

.response.lit .line {
  background: #059669;
}

.response.lit .line::after {
  border-right-color: #059669;
}

.response.lit .text {
  color: #047857;
  font-weight: 600;
}
</style>

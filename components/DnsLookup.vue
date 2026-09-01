<script setup lang="ts">
withDefaults(defineProps<{
  /** 0 = namnet och adressen, 1 = uppslagningen mellan dem. */
  step?: number
}>(), {
  step: 1,
})
</script>

<template>
  <figure class="dns" aria-label="DNS översätter ett domännamn till en IP-adress">
    <div class="box name">
      <span class="cap">det vi skrev</span>
      <code>lnu.se</code>
      <span class="who">ett namn för människor</span>
    </div>

    <!-- Själva uppslagningen kommer först i steg 1: bilden börjar med de två
         formerna, och frågan om hur man tar sig från den ena till den andra. -->
    <div class="step" :class="{ pending: step < 1 }">
      <span class="q">Vilken IP-adress hör till namnet?</span>
      <span class="flow ask" aria-hidden="true" />
      <span class="chip">DNS</span>
      <span class="flow answer" aria-hidden="true" />
    </div>

    <div class="box ip">
      <span class="cap">det nätverket behöver</span>
      <code class="addr">203.0.113.42</code>
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

.pending {
  opacity: 0;
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

/* Samma gröna som servern har i InternetBox: adressen är serverns, inte
   lådans, så det är siffrorna som färgas och inte hela rutan. Selektorn
   måste vara lika specifik som .box code ovan för att vinna över den. */
.box code.addr {
  color: #047857;
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

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.25s ease;
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
   pilglyf som renderas olika i olika typsnitt. Frågan går ut åt höger
   ovanför chippet, svaret tillbaka åt vänster nedanför det. */
.flow {
  position: relative;
  align-self: stretch;
  height: 2px;
  background: #8a8a8a;
}

.flow::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}

.ask::after {
  right: -1px;
  border-left: 10px solid #8a8a8a;
}

.answer::after {
  left: -1px;
  border-right: 10px solid #8a8a8a;
}
</style>

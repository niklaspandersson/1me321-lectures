<script setup lang="ts">
const points = [
  { when: '1960-talet', what: 'Datorer på olika platser börjar kopplas ihop i nätverk.' },
  { when: '1970-talet', what: 'Gemensamma protokoll gör att olika nätverk kan prata med varandra.' },
  { when: '1980-talet', what: 'De sammankopplade näten växer – Internet.' },
  { when: 'kring 1990', what: 'Webben byggs ovanpå det som redan fanns.' },
]
</script>

<template>
  <figure class="timeline" aria-label="Kort historik över Internet och webben">
    <div class="track" aria-hidden="true" />
    <div class="points">
      <div v-for="(p, i) in points" :key="p.when" class="point" :class="{ last: i === points.length - 1 }">
        <span class="dot" aria-hidden="true" />
        <span class="when">{{ p.when }}</span>
        <span class="what">{{ p.what }}</span>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.timeline {
  width: 46rem;
  max-width: 100%;
  position: relative;
  margin: 2.4rem auto 1.2rem;
}

/* Linjen går från mitten av första punkten till mitten av den sista:
   fyra lika breda kolumner ger 12,5 % in från vardera kanten. */
.track {
  position: absolute;
  left: 12.5%;
  right: 12.5%;
  top: 0.42rem;
  height: 2px;
  background: #e2e8f0;
}

.points {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.9rem;
}

.point {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.4rem;
}

.dot {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #cbd5e1;
}

.point.last .dot {
  border-color: #2563eb;
  background: #2563eb;
}

.when {
  font-size: 0.9rem;
  font-weight: 700;
  color: #0f172a;
}

.point.last .when {
  color: #1d4ed8;
}

.what {
  font-size: 0.78rem;
  line-height: 1.35;
  color: #64748b;
}
</style>

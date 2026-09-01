<script setup lang="ts">
import BrowserFrame from "./BrowserFrame.vue";

withDefaults(
  defineProps<{
    /** Vilken av seriens tre filmer vi är i. */
    film?: 1 | 2 | 3;
  }>(),
  {
    film: 1,
  },
);

const films = [
  { no: 1, title: "Webben och nätet" },
  { no: 2, title: "TCP och IP" },
  { no: 3, title: "HTTP, HTML och CSS" },
];
</script>

<template>
  <div class="opening">
    <BrowserFrame url="https://lnu.se/student" mock="./assets/lnu-student.jpeg" height="11rem" />

    <p class="question">Att öppna en webbsida</p>

    <nav class="series" aria-label="Seriens tre filmer">
      <span
        v-for="f in films"
        :key="f.no"
        class="film"
        :class="{ current: f.no === film }"
        :aria-current="f.no === film ? 'step' : undefined"
      >
        <span class="no">{{ f.no }}</span>
        {{ f.title }}
      </span>
    </nav>
  </div>
</template>

<style scoped>
.opening {
  width: 44rem;
  max-width: 100%;
  margin: 0 auto;
}

/* Grundfrågan är seriens fasta punkt och ska se likadan ut i alla tre
   filmerna – den är därför formulerad här och inte i respektive deck. */
.question {
  margin: 1.6rem 0 0;
  font-size: 1.6rem;
  font-weight: 600;
  color: #0f172a;
  text-align: center;
}

.series {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.6rem;
  font-size: 0.75rem;
  color: #94a3b8;
}

.film {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.7rem;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  white-space: nowrap;
}

.no {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.15rem;
  height: 1.15rem;
  border-radius: 50%;
  background: #f1f5f9;
  font-size: 0.66rem;
  font-weight: 700;
}

.film.current {
  color: #0f172a;
  background: #eff6ff;
  border-color: #2563eb;
  font-weight: 700;
}

.film.current .no {
  background: #2563eb;
  color: #fff;
}
</style>

<script setup lang="ts">
withDefaults(defineProps<{
  /** Vilken av filmens två frågor vi arbetar med just nu (1–2). */
  active?: number
  /** Visa som stor punktlista i stället för kompakt rad. */
  list?: boolean
  /** Hur många frågor i punktlistan som visas hittills (0 = ingen, 2 = båda). */
  reveal?: number
  /** Markera alla frågor som besvarade. */
  done?: boolean
}>(), {
  active: 0,
  list: false,
  reveal: 2,
  done: false,
})

const questions = [
  { short: 'Varifrån?', long: 'Varifrån kommer sidan?' },
  { short: 'Hur når den fram?', long: 'Hur tar den sig till min webbläsare?' },
]
</script>

<template>
  <ol v-if="list" class="trail-list">
    <li v-for="(q, i) in questions" :key="q.short" :class="{ pending: i >= reveal }">
      <span class="num">{{ i + 1 }}</span>
      <span class="text">{{ q.long }}</span>
    </li>
  </ol>

  <nav v-else class="trail" aria-label="Filmens två frågor">
    <span
      v-for="(q, i) in questions"
      :key="q.short"
      class="step"
      :class="{ active: !done && active === i + 1, answered: done || active > i + 1 }"
      :aria-current="active === i + 1 ? 'step' : undefined"
    >
      <span class="marker" aria-hidden="true">{{ done || active > i + 1 ? '✓' : i + 1 }}</span>
      {{ q.short }}
    </span>
  </nav>
</template>

<style scoped>
.trail {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.3rem;
  font-size: 0.72rem;
  color: #94a3b8;
}

.step {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.55rem;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  white-space: nowrap;
}

.marker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.05rem;
  height: 1.05rem;
  border-radius: 50%;
  background: #f1f5f9;
  font-size: 0.62rem;
  font-weight: 700;
}

.step.answered {
  color: #64748b;
}

.step.answered .marker {
  background: #dcfce7;
  color: #166534;
}

.step.active {
  color: #0f172a;
  background: #eff6ff;
  border-color: #2563eb;
  font-weight: 700;
}

.step.active .marker {
  background: #2563eb;
  color: #fff;
}

.trail-list {
  width: 34rem;
  max-width: 100%;
  list-style: none;
  padding: 0;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.trail-list li {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-size: 1.25rem;
  color: #0f172a;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

/* Frågorna avslöjas en i taget, men platsen är reserverad så att
   listan inte hoppar när nästa fråga dyker upp. */
.trail-list li.pending {
  opacity: 0;
  transform: translateY(0.35rem);
}

.trail-list .num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #2563eb;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
}
</style>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /** 1 = byte-strömmen, 2 = uppdelningen, 3 = ankomsten, 4 = ordningen återställd. */
  step?: number
}>(), {
  step: 4,
})

/* Delningen går mitt i orden med flit: TCP räknar byte och bryr sig inte
   om var HTTP-begäran har sina gränser. */
const chunks = ['GET /kurse', 'r HTTP/1.1', ' Host: www', '.lnu.se', ' …']

const segments = chunks.map((text, i) => ({ no: i + 1, text }))

const arrivalOrder = [2, 4, 1, 5, 3]

const arriving = computed(() => props.step >= 4
  ? segments
  : arrivalOrder.map(no => segments[no - 1]),
)
</script>

<template>
  <figure class="seg" aria-label="Byte-strömmen delas i numrerade segment som sätts ihop i ordning">
    <div class="row" :class="{ pending: step < 1 }">
      <span class="cap">byte-ström från programmet</span>
      <div class="stream">GET /kurser HTTP/1.1 Host: www.lnu.se …</div>
    </div>

    <div class="row" :class="{ pending: step < 2 }">
      <span class="cap">TCP delar den i numrerade segment</span>
      <div class="segments">
        <div v-for="s in segments" :key="s.no" class="box">
          <span class="no">{{ s.no }}</span>
          <span class="text">{{ s.text }}</span>
        </div>
      </div>
    </div>

    <div class="row" :class="{ pending: step < 3 }">
      <span class="cap">{{ step >= 4 ? 'TCP lägger dem i nummerordning innan programmet får något' : 'så här kan de komma fram hos servern' }}</span>
      <div class="segments">
        <div v-for="s in arriving" :key="s.no" class="box" :class="step >= 4 ? 'ok' : 'jumbled'">
          <span class="no">{{ s.no }}</span>
          <span class="text">{{ s.text }}</span>
        </div>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.seg {
  width: 44rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  margin: 1.4rem auto 0.8rem;
}

.row {
  transition: opacity 0.25s ease;
}

.row.pending {
  opacity: 0;
}

.cap {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 0.72rem;
  color: #64748b;
  text-align: center;
}

.stream {
  padding: 0.55rem 0.9rem;
  border: 2px solid #7c3aed;
  border-radius: 0.5rem;
  background: #f5f3ff;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.9rem;
  color: #0f172a;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Segmentnumren sitter som flikar ovanför lådorna, så raden behöver
   luft uppåt för att inte krocka med bildtexten över sig. */
.segments {
  margin-top: 0.55rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
}

.box {
  position: relative;
  padding: 0.75rem 0.3rem 0.45rem;
  border: 2px solid #0891b2;
  border-radius: 0.5rem;
  background: #ecfeff;
  text-align: center;
  transition: border-color 0.25s ease, background 0.25s ease;
}

/* Numret sitter som en flik på segmentet – det är det TCP håller reda på. */
.no {
  position: absolute;
  top: -0.6rem;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: #0891b2;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
}

.box .text {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.72rem;
  color: #0f172a;
  white-space: nowrap;
}

.box.jumbled {
  border-color: #cbd5e1;
  background: #f8fafc;
}

.box.jumbled .no {
  background: #94a3b8;
}

.box.ok {
  border-color: #059669;
  background: #ecfdf5;
}

.box.ok .no {
  background: #059669;
}
</style>

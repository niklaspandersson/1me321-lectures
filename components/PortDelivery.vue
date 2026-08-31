<script setup lang="ts">
withDefaults(defineProps<{
  /** 1 = serverdatorn, 2 = adressen, 3 = leveransen till rätt program. */
  step?: number
}>(), {
  step: 3,
})

const programs = [
  { name: 'webbserver', port: '443', target: true },
  { name: 'e-postserver', port: '25' },
  { name: 'fjärrinloggning', port: '22' },
]
</script>

<template>
  <figure class="ports" aria-label="IP-adressen pekar ut datorn, portnumret pekar ut programmet">
    <div class="target" :class="{ pending: step < 2 }">
      <span class="cap">paketet är adresserat till</span>
      <div class="addr">
        <span class="part host" :class="{ lit: step === 2 }">
          <span class="text">203.0.113.42</span>
          <span class="tick" aria-hidden="true" />
          <span class="label">vilken dator</span>
        </span>
        <span class="colon">:</span>
        <span class="part port" :class="{ lit: step >= 3 }">
          <span class="text">443</span>
          <span class="tick" aria-hidden="true" />
          <span class="label">vilket program</span>
        </span>
      </div>
    </div>

    <div class="wire" :class="{ pending: step < 2 }" aria-hidden="true" />

    <div class="machine">
      <span class="cap">serverdatorn</span>
      <div
        v-for="p in programs"
        :key="p.port"
        class="program"
        :class="{ lit: step >= 3 && p.target }"
      >
        <span class="name">{{ p.name }}</span>
        <span class="num">:{{ p.port }}</span>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.ports {
  width: 46rem;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 5rem 1fr;
  align-items: center;
  gap: 0.8rem;
  margin: 1.8rem auto 1.2rem;
}

.pending {
  opacity: 0;
}

.target,
.wire,
.program {
  transition: opacity 0.25s ease;
}

.cap {
  display: block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #94a3b8;
  text-align: center;
}

.addr {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 0.6rem;
}

/* Samma bildspråk som webbadressen i film 1: delarna sitter ihop till en
   läsbar adress, med en klammer under den del vi pratar om. */
.part {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

.part .text {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 1.3rem;
  color: #0f172a;
  padding: 0.1rem 0.3rem;
  border-radius: 0.3rem;
}

.colon {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 1.3rem;
  color: #0f172a;
  padding: 0.1rem;
}

.tick {
  align-self: stretch;
  height: 0.45rem;
  border-left: 1px solid #cbd5e1;
  border-right: 1px solid #cbd5e1;
  border-bottom: 1px solid #cbd5e1;
  border-radius: 0 0 0.25rem 0.25rem;
}

.label {
  font-size: 0.72rem;
  color: #64748b;
}

.part.lit .text {
  background: #ecfeff;
  color: #0e7490;
}

.part.lit .tick {
  border-color: #0891b2;
}

.part.lit .label {
  color: #0e7490;
  font-weight: 700;
}

/* Pilen in mot serverdatorn. IP-adressen räcker hit – portnumret
   avgör sedan vilken av raderna i lådan som ska ha paketet. */
.wire {
  position: relative;
  height: 2px;
  background: #94a3b8;
}

.wire::after {
  content: '';
  position: absolute;
  right: -1px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 10px solid #94a3b8;
}

.machine {
  padding: 0.8rem;
  border: 2px solid #cbd5e1;
  border-radius: 0.7rem;
  background: #f8fafc;
}

.program {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.45rem;
  background: #fff;
  font-size: 0.9rem;
  color: #475569;
}

.program .num {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.85rem;
  color: #94a3b8;
}

.program.lit {
  border-color: #0891b2;
  background: #ecfeff;
  color: #0f172a;
  font-weight: 700;
}

.program.lit .num {
  color: #0e7490;
}
</style>

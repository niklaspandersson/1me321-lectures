<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /** Text i adressfältet. Tomt fält om den utelämnas. */
  url?: string
  /** Visa blinkande markör i adressfältet. */
  caret?: boolean
  /**
   * Innehåll i webbläsarens visningsyta: en inbyggd attrapp ('site' | 'simple')
   * eller en relativ sökväg till en bild, t.ex. './assets/lnu-student.jpeg'.
   */
  mock?: string
  /** Höjd på visningsytan. */
  height?: string
  /** Bildtext under webbläsaren. */
  caption?: string
  /** Mindre variant, för att ha med bilden som referens. */
  small?: boolean
}>(), {
  url: '',
  caret: false,
  mock: '',
  height: '13rem',
  caption: '',
  small: false,
})

// Vite kan bara bunta filer den ser vid bygget, så alla bilder under assets/
// slås upp i förväg och matchas mot sökvägen som skickas in via `mock`.
const assets = import.meta.glob('../assets/**/*.{png,jpg,jpeg,gif,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

/** Sökvägen normaliseras mot projektroten: './assets/x.jpg' → '../assets/x.jpg'. */
const image = computed(() => {
  const path = props.mock
  if (!path || path === 'site' || path === 'simple') return ''
  const key = '../' + path.replace(/^\.?\//, '')
  const url = assets[key]
  if (!url) console.warn(`[BrowserFrame] hittar ingen bild för mock="${path}"`)
  return url ?? ''
})
</script>

<template>
  <figure class="browser" :class="{ small }" :style="{ '--viewport-height': height }">
    <div class="chrome">
      <span class="dots" aria-hidden="true"><i /><i /><i /></span>
      <div class="address">
        <span v-if="url" class="url">{{ url }}</span>
        <span v-else class="placeholder">Sök eller ange webbadress</span>
        <span v-if="caret" class="caret" aria-hidden="true" />
      </div>
    </div>

    <div class="viewport">
      <div v-if="mock === 'site'" class="page">
        <div class="topbar">
          <span class="brand" />
          <span class="nav"><i /><i /><i /></span>
        </div>
        <div class="hero" />
        <div class="lines">
          <span style="width: 82%" /><span style="width: 94%" /><span style="width: 61%" />
        </div>
        <div class="cards"><span /><span /><span /></div>
      </div>

      <div v-else-if="mock === 'simple'" class="page simple">
        <h3>Min första webbsida</h3>
        <p>Det här är innehållet som du själv har skrivit.</p>
      </div>

      <img v-else-if="image" class="shot" :src="image" alt="" />

      <slot v-else />
    </div>

    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.browser {
  width: 44rem;
  max-width: 100%;
  margin: 0 auto;
  border: 1px solid #cbd5e1;
  border-radius: 0.7rem;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 12px 30px -18px rgba(15, 23, 42, 0.45);
}

.browser.small {
  width: 26rem;
  max-width: 100%;
}

.chrome {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.55rem 0.8rem;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
}

.dots {
  display: flex;
  gap: 0.3rem;
  flex: none;
}

.dots i {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: #cbd5e1;
}

.address {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  gap: 0.15rem;
  padding: 0.3rem 0.75rem;
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 999px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.8rem;
  color: #0f172a;
}

.placeholder {
  color: #94a3b8;
  font-family: inherit;
}

.caret {
  display: inline-block;
  width: 1px;
  height: 1rem;
  background: #0f172a;
  animation: blink 1.05s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.viewport {
  height: var(--viewport-height);
  overflow: hidden;
  background: #fff;
}

.shot {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.page {
  padding: 0.9rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  height: 100%;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  width: 4.5rem;
  height: 0.75rem;
  border-radius: 0.2rem;
  background: #1e3a8a;
}

.nav {
  display: flex;
  gap: 0.45rem;
}

.nav i {
  width: 2.2rem;
  height: 0.45rem;
  border-radius: 999px;
  background: #cbd5e1;
}

.hero {
  height: 3.4rem;
  border-radius: 0.35rem;
  background: linear-gradient(120deg, #dbeafe, #e0f2fe);
}

.lines {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.lines span {
  height: 0.4rem;
  border-radius: 999px;
  background: #e2e8f0;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  flex: 1;
}

.cards span {
  border-radius: 0.35rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
}

.simple {
  justify-content: center;
  gap: 0.4rem;
  padding: 1.4rem 1.6rem;
}

.simple h3 {
  font-size: 1.35rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.simple p {
  color: #475569;
  font-size: 0.9rem;
  margin: 0;
}

figcaption {
  padding: 0.45rem 0.8rem;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 0.72rem;
  text-align: center;
}
</style>

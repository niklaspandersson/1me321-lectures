<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /** overview = alla nätverk, path = vägen från ditt nätverk till serverns. */
  focus?: 'overview' | 'path'
  /** Vilken av två möjliga vägar som ritas – samma avsändare och mottagare. */
  route?: 1 | 2
}>(), {
  focus: 'overview',
  route: 1,
})

type Node = { id: string; x: number; y: number; lines: string[]; kind?: 'you' | 'server' }

const W = 120
const H = 54

const nodes: Node[] = [
  { id: 'lan', x: 10, y: 140, lines: ['Ditt nätverk'], kind: 'you' },
  { id: 'isp', x: 170, y: 30, lines: ['Internet-', 'leverantör'] },
  { id: 'n2', x: 170, y: 240, lines: ['nätverk'] },
  { id: 'n3', x: 330, y: 135, lines: ['nätverk'] },
  { id: 'n4', x: 490, y: 25, lines: ['nätverk'] },
  { id: 'n5', x: 490, y: 240, lines: ['nätverk'] },
  { id: 'srv', x: 650, y: 130, lines: ['Serverns', 'nätverk'], kind: 'server' },
]

const edges: [string, string][] = [
  ['lan', 'isp'], ['lan', 'n2'],
  ['isp', 'n3'], ['isp', 'n4'],
  ['n2', 'n3'], ['n2', 'n5'],
  ['n3', 'n4'], ['n3', 'n5'],
  ['n4', 'srv'], ['n5', 'srv'], ['n4', 'n5'],
]

/* Två vägar genom samma nät. Att båda finns är hela poängen: routrarna
   väljer nästa steg, och två paket behöver inte ta samma väg. */
const routes: Record<number, string[]> = {
  1: ['lan', 'isp', 'n3', 'n5', 'srv'],
  2: ['lan', 'n2', 'n3', 'n4', 'srv'],
}

const pathNodes = computed(() => routes[props.route])
const pathEdges = computed(() => pathNodes.value.slice(0, -1)
  .map((id, i) => [id, pathNodes.value[i + 1]] as [string, string]))

const node = (id: string) => nodes.find(n => n.id === id)!
const center = (id: string) => {
  const n = node(id)
  return { x: n.x + W / 2, y: n.y + H / 2 }
}

const onPath = (id: string) => pathNodes.value.includes(id)
const edgeOnPath = (a: string, b: string) =>
  pathEdges.value.some(([p, q]) => (p === a && q === b) || (p === b && q === a))

/** Punkten där en linje ut ur nodens mitt i riktningen (dx, dy) möter rutans kant. */
const edgePoint = (id: string, dx: number, dy: number) => {
  const c = center(id)
  const t = Math.min(
    dx === 0 ? Infinity : (W / 2) / Math.abs(dx),
    dy === 0 ? Infinity : (H / 2) / Math.abs(dy),
  )
  return { x: c.x + dx * t, y: c.y + dy * t }
}

/**
 * Linjen mellan två noder, avkortad så att den slutar vid rutornas kanter
 * i stället för att löpa in under dem. `pad` ger extra luft, t.ex. åt en pilspets.
 */
const segment = (a: string, b: string, padEnd = 0) => {
  const ca = center(a)
  const cb = center(b)
  const dx = cb.x - ca.x
  const dy = cb.y - ca.y
  const len = Math.hypot(dx, dy) || 1
  const p1 = edgePoint(a, dx, dy)
  const p2 = edgePoint(b, -dx, -dy)
  return {
    x1: p1.x,
    y1: p1.y,
    x2: p2.x - (dx / len) * padEnd,
    y2: p2.y - (dy / len) * padEnd,
  }
}
</script>

<template>
  <figure class="non" aria-label="Internet är många nätverk som är sammankopplade med varandra">
    <svg viewBox="0 0 780 330" role="img">
      <defs>
        <marker
          id="non-head" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="5" markerHeight="5" orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
        </marker>
      </defs>

      <g class="edges">
        <line
          v-for="[a, b] in edges"
          :key="a + b"
          v-bind="segment(a, b)"
          :class="{ faded: focus === 'path' && !edgeOnPath(a, b) }"
        />
      </g>

      <g v-if="focus === 'path'" class="path">
        <line v-for="[a, b] in pathEdges" :key="a + b" v-bind="segment(a, b, 9)" marker-end="url(#non-head)" />
      </g>

      <g v-for="n in nodes" :key="n.id" :class="['node', n.kind, { faded: focus === 'path' && !onPath(n.id) }]">
        <rect :x="n.x" :y="n.y" :width="W" :height="H" rx="12" />
        <text :x="n.x + W / 2" :y="n.y + H / 2 + (n.lines.length > 1 ? -3 : 5)" text-anchor="middle">
          <tspan v-for="(line, i) in n.lines" :key="line" :x="n.x + W / 2" :dy="i === 0 ? 0 : 15">{{ line }}</tspan>
        </text>
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.non {
  width: 46rem;
  max-width: 100%;
  margin: 1.4rem auto 1rem;
}

svg {
  width: 100%;
  height: auto;
}

.edges line {
  stroke: #cbd5e1;
  stroke-width: 2;
  stroke-linecap: round;
  transition: stroke 0.25s ease;
}

.edges line.faded {
  stroke: #e2e8f0;
}

.path line {
  stroke: #2563eb;
  stroke-width: 3.5;
  stroke-linecap: round;
}

.node rect {
  fill: #fff;
  stroke: #cbd5e1;
  stroke-width: 2;
}

.node text {
  font-size: 13px;
  fill: #475569;
}

.node.you rect {
  fill: #eff6ff;
  stroke: #2563eb;
}

.node.you text {
  fill: #1d4ed8;
  font-weight: 700;
}

.node.server rect {
  fill: #ecfdf5;
  stroke: #059669;
}

.node.server text {
  fill: #047857;
  font-weight: 700;
}

.node.faded {
  opacity: 0.35;
}
</style>

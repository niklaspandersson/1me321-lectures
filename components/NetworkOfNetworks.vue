<script setup lang="ts">
withDefaults(defineProps<{
  /** overview = alla nätverk, path = vägen från ditt nätverk till serverns. */
  focus?: 'overview' | 'path'
}>(), {
  focus: 'overview',
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

const pathNodes = ['lan', 'isp', 'n3', 'n5', 'srv']

const center = (id: string) => {
  const n = nodes.find(node => node.id === id)!
  return { x: n.x + W / 2, y: n.y + H / 2 }
}

const onPath = (id: string) => pathNodes.includes(id)

const edgeOnPath = (a: string, b: string) => {
  const i = pathNodes.indexOf(a)
  const j = pathNodes.indexOf(b)
  return i >= 0 && j >= 0 && Math.abs(i - j) === 1
}
</script>

<template>
  <figure class="non" aria-label="Internet är många nätverk som är sammankopplade med varandra">
    <svg viewBox="0 0 780 330" role="img">
      <g class="edges">
        <line
          v-for="[a, b] in edges"
          :key="a + b"
          :x1="center(a).x" :y1="center(a).y"
          :x2="center(b).x" :y2="center(b).y"
          :class="{ path: focus === 'path' && edgeOnPath(a, b), faded: focus === 'path' && !edgeOnPath(a, b) }"
        />
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
}

.edges line.faded {
  stroke: #e2e8f0;
}

.edges line.path {
  stroke: #2563eb;
  stroke-width: 3.5;
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

<script setup lang="ts">
import { computed } from 'vue'

/**
 * Props for a compact metric block used in dashboard summaries.
 */
type MetricCardProps = {
  label: string
  value: string
  hint: string
  tone?: 'teal' | 'amber' | 'rose'
}

/** Display-ready metric content for the current card. */
const props = withDefaults(defineProps<MetricCardProps>(), {
  tone: 'teal'
})

/** Centralized visual tone selection so page code stays declarative. */
const toneClass = computed(() => `metric-card--${props.tone}`)
</script>

<template>
  <article :class="['metric-card', toneClass]">
    <p class="metric-label">
      {{ props.label }}
    </p>
    <strong class="metric-value">{{ props.value }}</strong>
    <p class="metric-hint">
      {{ props.hint }}
    </p>
  </article>
</template>

<style scoped lang="scss">
.metric-card {
  border-radius: 1.2rem;
  padding: 1rem;
  color: var(--ink-strong);
  border: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.metric-card--teal {
  background: linear-gradient(160deg, rgba(11, 90, 88, 0.16), rgba(255, 255, 255, 0.96));
  border-color: rgba(11, 90, 88, 0.12);
}

.metric-card--amber {
  background: linear-gradient(160deg, rgba(178, 120, 39, 0.18), rgba(255, 255, 255, 0.96));
  border-color: rgba(178, 120, 39, 0.16);
}

.metric-card--rose {
  background: linear-gradient(160deg, rgba(153, 55, 77, 0.18), rgba(255, 255, 255, 0.96));
  border-color: rgba(153, 55, 77, 0.16);
}

.metric-label,
.metric-hint {
  margin: 0;
}

.metric-label {
  font-size: 0.82rem;
  color: var(--ink-soft);
}

.metric-value {
  display: block;
  margin: 0.55rem 0 0.4rem;
  font-size: clamp(1.8rem, 2.8vw, 2.4rem);
  line-height: 1;
}

.metric-hint {
  color: var(--ink-soft);
  line-height: 1.55;
}
</style>

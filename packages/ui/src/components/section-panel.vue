<script setup lang="ts">
/**
 * Props for a reusable content panel inside dashboards and docs examples.
 */
type SectionPanelProps = {
  title: string
  description?: string
}

/** Copy shown in the section heading. */
const props = defineProps<SectionPanelProps>()
</script>

<template>
  <section class="section-panel">
    <header class="section-header">
      <div>
        <h2>{{ props.title }}</h2>
        <p v-if="props.description">
          {{ props.description }}
        </p>
      </div>
      <div
        v-if="$slots.actions"
        class="section-actions"
      >
        <slot name="actions" />
      </div>
    </header>
    <div class="section-body">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-panel {
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 1.25rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
}

.section-header {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.section-header h2 {
  margin: 0;
  font-size: 1.1rem;
  color: var(--ink-strong);
}

.section-header p {
  margin: 0.4rem 0 0;
  color: var(--ink-soft);
  line-height: 1.65;
}

.section-actions {
  display: flex;
  gap: 0.75rem;
}

.section-body {
  display: grid;
  gap: 0.9rem;
}

@media (max-width: 768px) {
  .section-panel {
    padding: 1rem;
  }

  .section-header {
    flex-direction: column;
  }
}
</style>

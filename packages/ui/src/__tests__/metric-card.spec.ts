import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MetricCard from '../components/metric-card.vue'

describe('MetricCard', () => {
  it('renders label, value, and hint text', () => {
    const wrapper = mount(MetricCard, {
      props: {
        label: '待办任务',
        value: '12',
        hint: '本周需要完成的初始化事项'
      }
    })

    expect(wrapper.text()).toContain('待办任务')
    expect(wrapper.text()).toContain('12')
    expect(wrapper.text()).toContain('本周需要完成的初始化事项')
  })
})


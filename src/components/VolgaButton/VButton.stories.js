import { actions } from '@storybook/addon-actions'
import VButton from './VButton.vue'

const defaultValue = prop => VButton.props[prop].default

export const Default = (args, { argTypes = {} }) => {
  return {
    components: { VButton },
    props: Object.keys(argTypes),
    methods: actions({
      log: 'clicked'
    }),
    slots: ['default'],
    template: `<VButton v-bind="$props" @click="log">Кнопка</VButton>`
  }
}

export const ButtonPrimaryOutlined = Default.bind({})
ButtonPrimaryOutlined.args = {
  variant: 'outlined'
}


export default {
  title: 'Components/VButton',
  component: VButton,
  parameters: {},
  argTypes: {

  }
}

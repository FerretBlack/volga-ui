import { actions } from '@storybook/addon-actions'
import { VolgaButton } from 'dev'

const defaultValue = prop => VolgaButton.props[prop].default

export const Default = (args, { argTypes = {} }) => {
  return {
    components: { VolgaButton },
    props: Object.keys(argTypes),
    methods: actions({
      log: 'clicked'
    }),
    slots: ['default'],
    template: `<VolgaButton v-bind="$props" @click="log">Кнопка</VolgaButton>`
  }
}

export const ButtonPrimaryOutlined = Default.bind({})
ButtonPrimaryOutlined.args = {
  variant: 'outlined'
}


export default {
  title: 'Components/VolgaButton',
  component: VolgaButton,
  parameters: {
    readme: {
      sidebar: readme
    }
  },
  argTypes: {

  }
}

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

export const ButtonOutlined = () => ({
  components: { VButton },
  template: '<VButton outlined> Тестовая кнопка </VButton>',
});

export const ButtonFullWidth = () => ({
  components: { VButton },
  template: '<VButton full-width> Тестовая кнопка </VButton>',
});

export const ButtonSize = () => ({
  components: { VButton },
  template: `<VButton size="large"> Большая кнопка </VButton> <br><br>
             <VButton> Стандартная кнопка </VButton> <br><br>
             <VButton size="small"> Маленькая кнопка </VButton> <br><br>
             <VButton size="x-small"> Очень маленькая кнопка </VButton>`,
});

export const ButtonCustomColor = () => ({
  components: { VButton },
  template: `<VButton color="#FF7D7D"> Большая кнопка </VButton> <br><br>`,
});


export default {
  title: 'Components/VButton',
  component: VButton,
  parameters: {},
  argTypes: {

  }
}

export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
      neutral: 'slate'
    },
    button: {
      slots: {
        base: 'cursor-pointer'
      }
    },
    modal: {
      slots: {
        title: 'text-lg',
        description: 'text-base',
        footer: 'justify-end'
      }
    },
    card: {
      slots: {
        header: 'text-lg text-highlighted font-semibold',
        footer: 'text-base'
      },
    },
    skeleton: {
      base: 'bg-neutral-200/60'
    },
    tooltip: {
      slots: {
        content: 'data-[state=closed]:animate-none'
      }
    },
  }
})

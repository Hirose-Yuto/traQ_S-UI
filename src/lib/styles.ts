import store from '@/store'
import { Theme } from '@/types/theme'
import { computed } from '@vue/composition-api'
import * as CSS from 'csstype'
import { mdiBorderColor } from '@mdi/js'

type ThemeClaim = (theme: Theme, common: typeof commonStyles) => CSS.Properties

export const makeStyles = (claim: ThemeClaim) => {
  return computed(() => claim(store.state.app.theme, commonStyles))
}

/** テーマに依存しない色 */
export const commonStyles = {
  text: {
    whitePrimary: '#ffffff' as const,
    whiteSecondary: 'rgba(255, 255, 255, 0.5)' as const
  },
  background: {
    overlay: 'rgba(25, 26, 29, 0.5)' as const
  },
  dropShadow: {
    default: 'drop-shadow(0 2px 4px rgba(33, 63, 99, 0.3))' as const
  }
}

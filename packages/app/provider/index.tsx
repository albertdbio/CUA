import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.join(__dirname, '..', '.env'),
})

import config from '../tamagui.config'
import { NavigationProvider } from './navigation'
import { TamaguiProvider, TamaguiProviderProps } from '@my/ui'
import { AuthProvider } from './auth'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <AuthProvider>
      <TamaguiProvider config={config} disableInjectCSS defaultTheme="light" {...rest}>
        <NavigationProvider>{children}</NavigationProvider>
      </TamaguiProvider>
    </AuthProvider>
  )
}
import { Store, useStore } from '@tanstack/react-store'
import type { SidebarItemInterface } from '~/types'

interface AppState {
  height: number
  width: number
  search: string
  currentBasicSidebarItem: SidebarItemInterface
  makeOrUse: 'make' | 'use' | ''
  exportVersion: string
  imageWidth: number
}

const appStore = new Store<AppState>({
  height: typeof window !== 'undefined' ? window.innerHeight : 800,
  width: typeof window !== 'undefined' ? window.innerWidth : 1200,
  search: '',
  currentBasicSidebarItem: {},
  makeOrUse: '',
  exportVersion: '2.2.8',
  imageWidth: 38,
})

export function useAppState() {
  const state = useStore(appStore)

  return {
    ...state,
    setSearch: (search: string) => {
      appStore.setState((prev) => ({ ...prev, search }))
    },
    setCurrentItem: (item: SidebarItemInterface, mode: 'make' | 'use') => {
      appStore.setState((prev) => ({
        ...prev,
        currentBasicSidebarItem: item,
        makeOrUse: mode,
      }))
    },
    setWindowSize: (width: number, height: number) => {
      appStore.setState((prev) => ({ ...prev, width, height }))
    },
  }
}

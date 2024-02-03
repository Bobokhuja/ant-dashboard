import { create } from 'zustand'

interface State {
  collapsed: boolean
}

interface Action {
  toggle: () => void
}

export const useMenu = create<State & Action>((set) => ({
  collapsed: false,
  toggle: () => set((state) => ({ collapsed: !state.collapsed })),
}))

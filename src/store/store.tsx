import { create } from 'zustand'

interface MainState {
  qrCode: string;
  exampleFunc: (example: string) => void;
}

export const useMainStore = create<MainState>((set) => ({
  qrCode: 'global state default value',
  exampleFunc: (example: string) => {
    console.log(example);
  }
}));
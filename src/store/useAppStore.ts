import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AppState {
  // Modal state
  isModalOpen: boolean;
  modalContent: string | null;
  openModal: (content: string) => void;
  closeModal: () => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      // Initial state
      isModalOpen: false,
      modalContent: null,

      // Actions
      openModal: (content: string) =>
        set({ isModalOpen: true, modalContent: content }),

      closeModal: () =>
        set({ isModalOpen: false, modalContent: null }),
    }),
    { name: 'AppStore' }
  )
);

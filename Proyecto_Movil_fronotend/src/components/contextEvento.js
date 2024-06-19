import { create } from 'zustand';

const useContextEvento = create((set) => ({
    evento: "",
    setEvento: (evento) => set({ evento }),
}));

export default useContextEvento;
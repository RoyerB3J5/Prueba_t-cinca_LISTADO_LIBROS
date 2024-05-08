import {create} from 'zustand'

export const useStoreList = create((set) => ({
  list: [],
  upgrateList: (ISBN) =>{set((state)=>({list: [...state.list, ISBN]}))},
  deleteOfList: (ISBN) => {set((state)=>({list: state.list.filter((book)=>book !== ISBN)}))},
}));
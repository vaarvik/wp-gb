import create from 'zustand'
import componentsOriginals from '../components/gutenberg/components';
import sortByProp from '../functions/sortByProp';

const useGutenbergStore = create((set) => ({
  components: sortByProp(componentsOriginals, "title"),
  updateFilter: (searchText) => {
    const searchTextLC = searchText.toLowerCase();
    set(() => ({ 
      components: componentsOriginals.filter(component => component.title.toLowerCase().includes(searchTextLC) || component.summary.toLowerCase().includes(searchTextLC))
    }))
  },
  sortBy: (sortType) => {
    set((state) => {
      switch (sortType) {
        default:
          sortByProp(componentsOriginals, "title");
          const sortedComponents = [...sortByProp(state.components, "title")]; // must create a new array so react understands it's an updated version and not the same array
          return { components: sortedComponents };
      }
    })
  }
}))

export default useGutenbergStore;
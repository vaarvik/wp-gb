import create from 'zustand'
import componentsOriginals from '../components/gutenberg/components';


const useGutenbergStore = create((set) => ({
  components: componentsOriginals,
  updateFilter: (searchText) => {
    const searchTextLC = searchText.toLowerCase();
    set(() => ({ 
      components: componentsOriginals.filter(component => component.title.toLowerCase().includes(searchTextLC) || component.summary.toLowerCase().includes(searchTextLC))
    }))
  },
}))

export default useGutenbergStore;
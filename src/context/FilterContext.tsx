import { createContext, useContext, useState, ReactNode } from 'react';

export type FilterState = {
  searchTerm: string;
  hasBio: boolean;
  hasBirthDate: boolean;
};

type FilterContextType = {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    hasBio: false,
    hasBirthDate: false,
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}

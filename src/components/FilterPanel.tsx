import { Search, Filter } from 'lucide-react';
import { useFilter } from '../context/FilterContext';

export default function FilterPanel() {
  const { filters, setFilters } = useFilter();

  return (
    <div className="bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 pointer-events-auto w-full">
      <div className="flex items-center gap-2 mb-2 sm:mb-3 text-slate-800 font-semibold">
        <Filter size={16} className="sm:w-[18px] sm:h-[18px]" />
        <h3 className="text-xs sm:text-sm">Bộ lọc & Tìm kiếm</h3>
      </div>
      
      <div className="space-y-2 sm:space-y-3">
        <div className="relative">
          <Search size={14} className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 text-slate-400 sm:w-4 sm:h-4" />
          <input
            type="text"
            placeholder="Tìm theo tên..."
            value={filters.searchTerm}
            onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
            className="w-full pl-8 sm:pl-9 pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.hasBio}
              onChange={(e) => setFilters(prev => ({ ...prev, hasBio: e.target.checked }))}
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 sm:w-4 sm:h-4"
            />
            <span>Đã có tiểu sử</span>
          </label>
          <label className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.hasBirthDate}
              onChange={(e) => setFilters(prev => ({ ...prev, hasBirthDate: e.target.checked }))}
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 sm:w-4 sm:h-4"
            />
            <span>Đã có ngày sinh</span>
          </label>
        </div>
      </div>
    </div>
  );
}

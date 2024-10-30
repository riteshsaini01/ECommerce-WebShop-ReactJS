import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-[200px]">
        <p className="my-2 text-xl cursor-pointer flex items-center gap-2">FILTERS</p>
        
        {/* Category Filter Box */}
        <div className="mt-4 border border-gray-200 rounded-lg shadow-sm p-4 sm:block bg-white">
          <p className="mb-3 text-sm font-semibold text-gray-800">CATEGORIES</p>
          <div className="flex flex-col gap-4 text-sm font-light text-gray-700">
            <p className="flex items-center gap-2">
              <input className="w-4 h-4 rounded border-gray-300" type="checkbox" value="Men" /> Men
            </p>
            <p className="flex items-center gap-2">
              <input className="w-4 h-4 rounded border-gray-300" type="checkbox" value="Women" /> Women
            </p>
            <p className="flex items-center gap-2">
              <input className="w-4 h-4 rounded border-gray-300" type="checkbox" value="Kids" /> Kids
            </p>
          </div>
        </div>
        {/* Subcategory Filter */}
      </div>
    </div>
  );
};

export default Collection;

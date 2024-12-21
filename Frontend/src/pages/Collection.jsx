import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../component/Title';
import ProductItem from '../component/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortOption, setSortOption] = useState('relavent');
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    console.log("Products Data:", products);  // Check initial products
    setFilterProducts(products || []);
  }, [products]);

  // Toggle Category Selection
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Toggle Subcategory Selection
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Apply Filters
  const applyFilter = () => {
    console.log("Applying Filters - Category:", category, "Subcategory:", subCategory);
    let productsCopy = [...products];

    // Filter by Category
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // Filter by Subcategory (Case-insensitive, null-safe)
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.some((sub) =>
          item.subCategory && item.subCategory.toLowerCase().includes(sub.toLowerCase())
        )
      );
    }

    console.log("Filtered Products:", productsCopy);
    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  // Sort Products
  const handleSort = (e) => {
    const value = e.target.value;
    setSortOption(value);

    let sortedProducts = [...filterProducts];

    if (value === 'low-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'high-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(sortedProducts);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-[200px]">
        <p className="my-2 text-xl cursor-pointer flex items-center gap-2">
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="Dropdown icon"
            onClick={() => setShowFilter(!showFilter)}
          />
        </p>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p><input type="checkbox" value="Men" onChange={toggleCategory} /> Men</p>
            <p><input type="checkbox" value="Women" onChange={toggleCategory} /> Women</p>
            <p><input type="checkbox" value="Kids" onChange={toggleCategory} /> Kids</p>
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p><input type="checkbox" value="Topwear" onChange={toggleSubCategory} /> Topwear</p>
            <p><input type="checkbox" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear</p>
            <p><input type="checkbox" value="Winterwear" onChange={toggleSubCategory} /> Winterwear</p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select
            className="border-2 border-gray-300 text-sm px-2"
            value={sortOption}
            onChange={handleSort}
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;

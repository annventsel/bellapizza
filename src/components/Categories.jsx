import React, { useState } from 'react';

function Categories() {
const [activeItem, setActiveItem] = useState(null);

const categories = [ 'All', 'Meat', 'Vegetarian', 'BBQ', 'Spicy', 'Assorted'];

  return (
    <div className="categories">
              <ul>
              {categories.map((item, index) => {
                return (
                  <li
                    onClick={() => setActiveItem(index)}
                    className={activeItem === index ? 'active' : ''}
                    key={index}
                  >
                    {item}
                  </li>
                );
              }
              )}
              </ul>
            </div>
  )
}

export default Categories;

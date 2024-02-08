
function Categories({ value, onChangeCategory }) {

  const categories = [ 'All', 'Meat', 'Vegetarian', 'BBQ', 'Spicy', 'Cheese'];

  return (
    <div className="categories">
              <ul>
              {categories.map((item, i) => {
                return (
                  <li
                    onClick={() => onChangeCategory(i)}
                    className={value === i ? 'active' : ''}
                    key={i}
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

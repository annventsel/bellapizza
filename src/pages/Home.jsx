import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { useEffect, useState } from "react";

function Home() {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryItem, setCategoryItem] = useState(null);
  const [sortItem, setSortItem] = useState({
    name: 'popular(▲)',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sortItem.sortProperty.replace('-', '');
    const order = sortItem.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryItem > 0 ? `category=${categoryItem}` : '';

    fetch(
      `https://658b1ba6ba789a9622387312.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItem(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryItem, sortItem]);
  return (
    <>
      <div className="content__top">
        <Categories value={categoryItem} onChangeCategory={(i) => setCategoryItem(i)} />
        <Sort sortValue={sortItem} onChangeSort={(i) => setSortItem(i)} />
      </div>
      <h2 className="content__title">Pizzas</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
        }
      </div>
    </>
  )
}

export default Home;

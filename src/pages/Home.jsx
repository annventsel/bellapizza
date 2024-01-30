import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { useEffect, useState } from "react";

function Home() {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://658b1ba6ba789a9622387312.mockapi.io/pizzas')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItem(arr);
        setIsLoading(false);
      });
      window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
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

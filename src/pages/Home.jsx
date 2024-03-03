import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../App";

function Home() {
  
  const dispatch = useDispatch();
  const { categoryId, sort} = useSelector((state) => state.filter);
  const sortItem = sort.sortProperty;

  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {searchValue} = useContext(SearchContext);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sortItem.replace('-', '');
    const order = sortItem.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://658b1ba6ba789a9622387312.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItem(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortItem, searchValue]);

  const pizzas = Array.isArray(items) ? items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />) : [];
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Pizzas</h2>
      <div className="content__items">
        {isLoading ? skeletons : pizzas}
      </div>
    </>
  )
}

export default Home;

import React from "react";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock/index";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  React.useEffect(() => {
    fetch("http://localhost:3000/pizzas")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsloading(false);
      });
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
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
}

export default Home;

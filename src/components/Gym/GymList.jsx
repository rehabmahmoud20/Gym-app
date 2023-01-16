import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGymData } from "../../Redux/Features/dataSlice";
import GymCard from "./Card/GymCard";
import Loader from "../shared/Loader";
import Pagination from "./Pagination";
const GymList = () => {
  const { isloading, gymData } = useSelector((state) => state.gymSlice);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;
  const indexOfLastPage = currentPage * cardsPerPage;
  const indexOfFirstPage = indexOfLastPage - cardsPerPage;
  const currentCards = [...gymData].slice(indexOfFirstPage, indexOfLastPage);

  const handlePage = (val) => {
    setCurrentPage(val);
  };

  useEffect(() => {
    dispatch(getGymData());
  }, []);
  if (isloading) {
    return <Loader />;
  }
  return (
    <section className="container mb-5">
      <div className="row gy-5">
        {currentCards &&
          currentCards.map((e) => <GymCard key={e.id} data={e} />)}
      </div>
      <Pagination totalCards={gymData.length} cardsPerPage={cardsPerPage} handlePage={handlePage} currentPage={currentPage} />
    </section>
  );
};

export default GymList;

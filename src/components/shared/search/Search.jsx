import './Search.css'
// import "./App.css";
const Search = () => {
  return (
                    <div className=" position-relative  ">
                        <input
                            type="search"
                            className="py-4 px-2  d-block w-100 border-0 outline-0 text-muted search-shadow rounded-4"
                            placeholder="Search by gym name, facilities"
                        />
                        <button className=" btn filter-btn purple-color fw-bold position-absolute top-50 translate-middle-y">
                            Filter
                        </button>
                        <button className="position-absolute pink-background h-100  btn text-light top-0 end-0 sec-btn ">
                            Find Gyms
                        </button>
                    </div>

  )
}

export default Search
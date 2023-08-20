import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/config";
import { cacheResults } from "../utils/searchSlice";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // make api cll after every keypress but if difference bw 2 keypress is< 200ms
    const timer = setTimeout(() => {
      if (searchCache[searchQuery])
        setShowSuggestions(searchCache[searchQuery]);
      else getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-1 shadow-lg">
      <div className="flex cursor-pointer col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 mx-2"
          src="https://cdn2.iconfinder.com/data/icons/mobile-banking-ver-3a/100/1-48-512.png"
          alt="menu"
        />
        <img
          className="h-11 w-20"
          src="https://tse4.mm.bing.net/th?id=OIP.D6pZbfI9woOeLhEVMyaoyQHaDi&pid=Api&P=0&h=180"
          alt="logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 rounded-l-full h-8 px-2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onMouseOut={() => setShowSuggestions(false)}
            onMouseEnter={() => setShowSuggestions(true)}
          />
          <button
            className="border 9b=>{
              order-gray-400 text-lg rounded-r-full h-8 px-2 bg-gray-200"
          >
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[34rem] shadow-lg rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-1 px-2 hover:bg-gray-100">
                  🔎 {s}
                </li>
              ))}
              {/* <li className='py-1 px-2 hover:bg-gray-100'>🔎 fngx</li>                 */}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://tse1.mm.bing.net/th?id=OIP.cxw_TB5nOSF4fpiVCuZaOAHaHa&pid=Api&P=0&h=180"
          alt="user"
        />
      </div>
    </div>
  );
}

export default Head;

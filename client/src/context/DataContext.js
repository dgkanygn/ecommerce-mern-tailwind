import { createContext, useState } from "react";
import { addFavsProducts } from "../requests/Product";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [userInfo, setuserInfo] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [favCounter, setFavCounter] = useState();

  // const [favorited, setFavorited] = useState([]);

  const [isFav, setIsFav] = useState();

  const data = {
    userInfo,
    setuserInfo,
    favCounter,
    setFavCounter,
    isFav,
    setIsFav,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;

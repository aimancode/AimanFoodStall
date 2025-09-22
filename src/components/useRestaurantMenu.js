import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) =>{
    const {resinfo, setResInfo} = useState(null);

    useEffect(() =>{
        fetchData()
    },[]);

    const fetchData = async () => {
        const menuData = { resData };
        setResInfo(menuData.resData.data.cards[0]);
    };
    return resinfo ;
}

export default useRestaurantMenu;
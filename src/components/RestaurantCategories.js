import ItemList from "./ItemList";
const RestaurantCategories = ({ data }) => {
    // console.log(data)
    return (
        <div>
            {/* headers */}
            <div className=" justify-between w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-item">
                    <span className="text-lg font-bold">{data.title} ({data.itemCards.length || 0})</span>
                    <span></span>
                </div>

                <ItemList items={data.itemCards} />
            </div>

        </div>

    )
}
export default RestaurantCategories;
import {useState} from "react";
import Item from './item';


export default function ItemList({items}){
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) =>
        a[sortBy].localeCompare(b[sortBy])
    );
    return(
        <div>
            
                <button onClick={() => setSortBy("name")}
                className={sortBy === "name" ? "bg-blue-700 text-white  " : "bg-blue-500"}>
                Sort by Name
            </button>
            
            
            <button onClick={() => setSortBy("category")}
                className={sortBy === "category" ? "bg-blue-700 text-white" : "bg-blue-500"}>
                Sort by Category
            </button>

            {sortedItems.map((item)=>(
                <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}/>
            ))}
        


            
                    
            
            
        </div>
    );
        
    
}

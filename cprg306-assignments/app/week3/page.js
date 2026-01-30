import GroceryItemList from "./GroceryItemList";

export default function Page(){
    return(
        <main>
            <h1>
                Shopping List
                <GroceryItemList></GroceryItemList>
            </h1>
        </main>
    );
}
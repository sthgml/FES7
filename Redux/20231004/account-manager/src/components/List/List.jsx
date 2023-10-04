import ListItem from "../ListItem/ListItem"

function List ({ item }) {
    return (
        <>
            {item.map((item,i)=> <ListItem key={i} item={item} />)}
        </>
    )
}
export default List
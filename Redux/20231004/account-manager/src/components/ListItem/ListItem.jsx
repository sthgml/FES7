function ListItem ({ item }) {
    // console.log(item)
    return (
        <li className="flex-row">
            <span>{item.name}</span>
            <span>{item.price} </span>
        </li>
    )
}
export default ListItem
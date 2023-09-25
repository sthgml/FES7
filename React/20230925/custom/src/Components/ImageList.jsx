import ImageItem from "./ImageItem";

function ImageList ({data}) {
    return (
        <ul>
            {data.map(v=>{
                return (
                    <li key={v.id}>
                        <ImageItem 
                        author={v.author} 
                        downloadUrl={v.download_url} 
                        height={v.height} 
                        url={v.url} 
                        width={v.width}/>
                    </li>
                )
            })}
            
        </ul>
    )
}
export default ImageList;
function ImageItem ({author, downloadUrl, height, url, width}) {
    // console.log(author,width)
    return (
        <img src={downloadUrl} alt={author} style={{width:400}}/>
    )
}
export default ImageItem;
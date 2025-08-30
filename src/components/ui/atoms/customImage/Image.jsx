function Image({ src,className,...props}){
    return <img {...props} src={src} className={className}/>
}
export default Image;
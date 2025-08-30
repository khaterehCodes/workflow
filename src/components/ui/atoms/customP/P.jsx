function P({ children,className,...props}){
    return  <p {...props} className={className}>{children}</p>
}
export default P
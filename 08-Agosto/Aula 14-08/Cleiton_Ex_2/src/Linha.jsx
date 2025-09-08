function LinhaProps({ tipo, children }) {
    return (
        <div className={`linha ${tipo}`} >
            {children}        
        </div>
    )   
}

export default LinhaProps;
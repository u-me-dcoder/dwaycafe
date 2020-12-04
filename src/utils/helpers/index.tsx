export default (products,{text,minimum,maximum,status})=>{
   
    if(products===null) return []
 
    return products.filter((product)=>{
        const textMatch = product.name.toLowerCase().includes(text.toLowerCase())
        // const priceMatch = product.price >= minimum && product.price <=maximum
        // const statusMatch = product.status ===status
        return textMatch
    })
}
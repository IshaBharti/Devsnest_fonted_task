const addItem =(item)=>{
    return {
        type:"Add_Item",
        payload:item,
    };
};
const  removeItem =(id)=>{
    return{
        type:"Remove_Item",
        payload:id,
    };
};
export {addItem,removeItem}
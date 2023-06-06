export const initialState={
    basket:[],
    searchQuery:"",
    sort:"",
    onlyElectric:false,
}

const reducer=(state,action) => {

    if(action.type==="ADD_TO_BASKET"){
        return{     
            ...state,
            basket:[...state.basket,action.payload]
        }
    }
    if(action.type==="REMOVE_FROM_BASKET"){
        return{
            ...state,
            basket:[...state.basket.filter((curr)=>{
                return curr.id!==action.payload
            })]
        }
    }

    if(action.type==='INCREMENT_ITEM'){
        let update=state.basket.map((curr)=>{
         if(curr.id===action.payload){
             return{
                 ...curr,
                 quantity:curr.quantity+1
             }
         }
         return curr;
        })
        return{
         ...state,
         basket:update
        }
     }

     if(action.type==="DECREMENT_ITEM"){
        let update=state.basket.map((curr)=>{ 
            if(curr.id===action.payload){
                return{
                    ...curr,
                    quantity:curr.quantity-1
                }
            }
            return curr;
           }).filter((cur)=>{
            return cur.quantity!==0})
           return{
            ...state,
            basket:update
           }
     }
     if(action.type==="FILTER_BY_SEARCH"){
        return{
            ...state,
            searchQuery:action.payload
        }
     }

     if(action.type==="SORT_BY_PRICE"){
        return{
            ...state,
            sort:action.payload
        }
     }
     if(action.type=="INCLUDE_ELECTRIC"){
        return {
            ...state,
            onlyElectric:action.payload
        }
     }
     if(action.type==='CLEAR_FILTER'){
        return{
            ...state,
            basket:[],
            searchQuery:"",
            sort:""
        }
     }

    return state; 
}
export default reducer;
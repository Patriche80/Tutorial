import { LendingPage } from "./LendingPage";

export const LENDING_DATA: LendingPage = {

    content: [

        { id: 1, game: {id: 1, title: 'Juego 1', age: 6, 
        category: { id: 1, name: 'Categoría 1' }, 
        author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1'}} , 
        client: { id: 1, name:'Cliente 1'}, startLendingDate: new Date(), finishLendingDate: new Date()},
        { id: 2, game: {id: 2, title: 'Juego 2', age: 18, 
        category: { id: 2, name: 'Categoría 2' }, 
        author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2'}} , 
        client: { id: 2, name:'Cliente 2'}, startLendingDate: new Date(), finishLendingDate: new Date()},
        { id: 3, game: {id: 3, title: 'Juego 3', age: 12, 
        category: { id: 3, name: 'Categoría 3' }, 
        author: { id: 3, name: 'Autor 3', nationality: 'Nacionalidad 3'}} , 
        client: { id: 3, name:'Cliente 3'}, startLendingDate: new Date(), finishLendingDate: new Date()},
       
    ],  

    pageable : {
        pageSize: 5,
        pageNumber: 0,
        sort: [
            {property: "id", direction: "ASC"}
        ]
    },

    totalElements: 3
}
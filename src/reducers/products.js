// import * as types from '../constants/ActionType'
var initialState=[
    {
        id:1,
        name:'IP 7 Plus',
        image:'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-600x600.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price:500,
        inventory:10,
        rating:5,
    },
    {
        id:2,
        name:'Samsung Galaxy NOTE 10 ',
        image:'https://cdn.tgdd.vn/Products/Images/42/191276/samsung-galaxy-note-10-silver-600x600.jpg',
        description: 'Sản phẩm do Samsung sản xuất',
        price:300,
        inventory:20,
        rating:4,
    },
    {
        id:3,
        name:'Black Shark 5 ',
        image:'https://cdn.tgdd.vn/Products/Images/42/248838/xiaomi-black-shark-5-600x600.jpg',
        description: 'Sản phẩm do Xiaomi sản xuất',
        price:600,
        inventory:30,
        rating:3,
    }
];
const myReducer=(state=initialState,action)=>{
    switch (action.type) {
        default:
            return [...state];
    }
}
export default myReducer;
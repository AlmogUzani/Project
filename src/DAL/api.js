
const categories = [
    {id:1, name:'Vegtables', image:'/../images/categories/vegtables.jpg'}, {id:2, name:'Fruits', image:'/../images/categories/fruits.jpg'}, {id:3, name:'Milk', image:'/../images/categories/milk.jpg'}, {id:4, name:'Meat', image:'/../images/categories/meat.jpg'},
    {id:5, name:'Beverages', image:'/../images/categories/beverages.jpg'}, {id:6, name:'Bakery', image:'/../images/categories/bakery.jpg'}, {id:7, name:'Snacks', image:'/../images/categories/snacks.jpg'}, {id:8, name:'Onetime', image:'/../images/categories/onetime.jpg'},
]
const products = [
    {id:1, name:'Cucumber', description:'Green & Fresh cucumber straight from the greenhouse', size:'L', shape:'long', color:'green', unit_price:2, unit_in_stock:30, discount:0, category_id:1,
    image1:'/../images/itemsByCategories/vegtables/cucumber1.jpg',image2:'/../images/itemsByCategories/vegtables/cucumber2.jpg',image3:'/../images/itemsByCategories/vegtables/cucumber3.jpg'},
    {id:2, name:'Tomato', description:'Red & Fresh tomato straight from the greenhouse', size:'M', shape:'round', color:'red', unit_price:2, unit_in_stock:35, discount:0, category_id:1,
    image1:'/../images/itemsByCategories/vegtables/tomato1.jpg',image2:'/../images/itemsByCategories/vegtables/tomato2.jpg',image3:'/../images/itemsByCategories/vegtables/tomato3.jpg'},
    {id:3, name:'Carrot', description:'Orange & Fresh carrot straight from the greenhouse', size:'M', shape:'long', color:'orange', unit_price:5, unit_in_stock:20, discount:0, category_id:1,
    image1:'/../images/itemsByCategories/vegtables/carrot1.jpg',image2:'/../images/itemsByCategories/vegtables/carrot2.jpg',image3:'/../images/itemsByCategories/vegtables/carrot3.jpg'},
    {id:4, name:'Apple', description:'Red & Fresh apple straight from the greenhouse', size:'M', shape:'round', color:'red', unit_price:7, unit_in_stock:10, discount:0, category_id:2,
    image1:'/../images/itemsByCategories/fruits/apple1.jpg',image2:'/../images/itemsByCategories/fruits/apple2.jpg',image3:'/../images/itemsByCategories/fruits/apple3.jpg'},
    {id:5, name:'Pear', description:'Green & Fresh pear straight from the greenhouse', size:'M', shape:'round', color:'green', unit_price:9, unit_in_stock:9, discount:0, category_id:2,
    image1:'/../images/itemsByCategories/fruits/pear1.jpg',image2:'/../images/itemsByCategories/fruits/pear2.jpg',image3:'/../images/itemsByCategories/fruits/pear3.jpg'},
]
const users = [
    {id:1, name:'Mish Mash', age:33, username:'mishmash', email:'mish@gmail.com', registerDate:'22-06-22', password:'123456'},
    {id:2, name:'Yossi Bot', age:23, username:'yossibot', email:'yossi@gmail.com', registerDate:'21-06-22', password:'123456y'},
    {id:3, name:'Moshe Bot', age:18, username:'moshebot', email:'moshe@gmail.com', registerDate:'20-06-22', password:'123456m'},
]
const orders = [
    {id:1, user_id:1, order_date:'23-06-22', address:'anywhere1', phone_number:'+972506565231'},
    {id:2, user_id:2, order_date:'24-06-22', address:'anywhere2', phone_number:'+972506565232'},
    {id:3, user_id:3, order_date:'25-06-22', address:'anywhere3', phone_number:'+972506565233'},
    {id:4, user_id:1, order_date:'28-06-22', address:'anywhere1', phone_number:'+972506565231'},
]
const order_details = [
    {order_id:1, product_id:1, quantity:2, unit_price:2, discount:0},
    {order_id:1, product_id:2, quantity:2, unit_price:2, discount:0},
    {order_id:1, product_id:3, quantity:1, unit_price:5, discount:0},
    {order_id:1, product_id:4, quantity:1, unit_price:7, discount:0},

    {order_id:2, product_id:2, quantity:2, unit_price:2, discount:0},
    {order_id:2, product_id:4, quantity:1, unit_price:7, discount:0},
    {order_id:2, product_id:5, quantity:1, unit_price:9, discount:0},

    {order_id:3, product_id:1, quantity:4, unit_price:2, discount:0},
    {order_id:3, product_id:2, quantity:4, unit_price:2, discount:0},
    {order_id:3, product_id:3, quantity:2, unit_price:5, discount:0},
    {order_id:3, product_id:4, quantity:2, unit_price:7, discount:0},

    {order_id:4, product_id:4, quantity:2, unit_price:7, discount:0},
    {order_id:4, product_id:5, quantity:2, unit_price:9, discount:0},
]


export const getCategories = () => {
    //fetch categories from server
    //return Promise.resolve(categories)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(categories), 1000);
    })
}
export const getCategoriesById = (id) => {
    //fetch categories from server
    //return Promise.resolve(categories)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(categories.find(category => category.id === id)), 1000);
    })
}
export const getProducts = () => {
    //fetch categories from server
    //return Promise.resolve(categories)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 1000);
    })
}
export const getProductById = (id) => {
    //fetch categories from server
    //return Promise.resolve(categories)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products.find(product => product.id === id)), 1000);
    })
}
export const getProductsByCategory = (categoryId) => {
    //fetch categories from server
    //return Promise.resolve(categories)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products.filter(product=>product.category_id===categoryId)), 1000);
    })
}
export const getUsers = () => {
    //fetch categories from server
    //return Promise.resolve(categories)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(users), 1000);
    })
}
export const getOrders = () => {
    //fetch categories from server
    //return Promise.resolve(categories)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(orders), 1000);
    })
}
export const getOrderDetails = () => {
    //fetch categories from server
    //return Promise.resolve(categories)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(order_details), 1000);
    })
}

//component
// await getCategories()

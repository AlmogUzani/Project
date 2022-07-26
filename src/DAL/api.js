const categories = [{id:1, name:'fruit'}, {id:2, name:'vegtables'}]

const getCategories = () => {
    //fetch categories from server
    //return Promise.resolve(categories)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(categories), 1000);
    })
}

//component
// await getCategories()
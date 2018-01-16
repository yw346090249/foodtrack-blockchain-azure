(()=>{
    const model = {
        name: 'hello2',
        schema: [
            { title: {type: 'string', required: true} },
            { msg: {type: 'string', required: true} },
            { price: {type: 'string', required: true} },
        ],
        list: {
            title:'title',
            desc:'price'
        },
        title:'Hello2'
    }
    
    if (typeof(module)!='undefined'  && module.exports) {
        module.exports = model;
    } else if (window) {
        window.Schema = window.Schema || {};
        window.Schema[model.name] = model
    }
    
})()

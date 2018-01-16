(()=>{
    const model = {
        name: 'hello',
        schema: [
            { title: {type: 'string', required: true} },
            { msg: {type: 'string', required: true} },
            { num: {type: 'number', required: true} },
        ],
        list: {
            title:'title',
            desc:'msg'
        },
        title:'Hello'
    }
    
    if (typeof(module)!='undefined'  && module.exports) {
        module.exports = model;
    } else if (window) {
        window.Schema = window.Schema || {};
        window.Schema[model.name] = model
    }
    
})()

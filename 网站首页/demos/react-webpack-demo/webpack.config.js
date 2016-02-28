module.exports = {
    entry:"./app.jsx",
    output:{
        path:"./build",
        filename:"app.js"
    },
    module:{
        loaders:[
            {test:/\.jsx$/,loader:"jsx-loader"}
        ]
    }
}
const {
     addBookshelfHandler,
     getAllBookshelfHandler,
     getBookshelfByIdHandler,
     editBookshelfByIdHandler,
     deleteBookshelfByIdHandler,
} = require('./handler')

const routes =[{
     method: 'POST',
     path :'/books',
     handler: addBookshelfHandler,
},
{
     method: 'GET',
     path: '/books',
     handler: getAllBookshelfHandler,
},
{
     method: 'GET',
     path: '/books/{id}',
     handler: getBookshelfByIdHandler,
},
{
     method: 'PUT',
     path: '/books/{id}',
     handler: editBookshelfByIdHandler,
},
{
     method: 'DELETE',
     path: '/books/{id}',
     handler: deleteBookshelfByIdHandler,

},
];
module.export = routes;


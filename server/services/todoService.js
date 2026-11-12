

export const addTodoService = async (title, description) => {
    
 if(!title && !description) {
    return res.json({
        success : false,
        statusCode : 400,
        message : "title and description required"
    });
 }

 

}
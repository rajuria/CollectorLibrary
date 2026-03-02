let getTest = async (request,response)=>
    {
        response.json
        (
            {
                message:"Test route is working", 
                DateTimeUTC:new Date().toISOString()
            }
        );
    }

const postTest = async (request,response)=>
    {
        let name = request.body.name;
        response.json({message:`Hello ${name}!`});
    }

module.exports = 
    {
        getTest,
        postTest
    };
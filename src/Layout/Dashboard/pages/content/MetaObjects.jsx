import { Link } from "react-router-dom";
import { Button } from "../../../../Components/ui/button";
import { Card, CardContent } from "../../../../Components/ui/card";



const MetaObjects = () => {
    return (
        <div className="container mx-auto p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Metaobjects</h1>
          <Button variant={"ghost"} className="ml-auto">Manage definitions</Button>
        
          <Button>Add definition</Button>
        </div>
  
       
  
        <Card>
          <CardContent className="p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
            <img
              src=""
              alt=""
              className="mb-4 w-32 h-32"
            />
            <h2 className="text-xl font-semibold mb-2">Streamline content creation with metaobjects</h2>
            <p className="text-gray-500 mb-4">
            Metaobjects allow you to group fields and connect them to <br /> different parts of your store. Use them to create custom content <br /> or data structures.
            </p>
            <Button variant={""}>Add definition</Button>
          </CardContent>
         
        </Card>

        <div className="flex justify-center items-center">
          <span className="mr-2">Learn more about</span>
            <Link to={"/"} className="text-blue-500 underline">
               metaobjects
            </Link>
          </div>
      </div>
    );
};

export default MetaObjects;
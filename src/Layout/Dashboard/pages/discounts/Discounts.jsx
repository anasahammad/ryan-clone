import { Link } from "react-router-dom";
import { Button } from "../../../../Components/ui/button";
import { Card, CardContent } from "../../../../Components/ui/card";


const Discounts = () => {
    return (
        <div className="container mx-auto p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Discounts
          </h1>
          <Button variant={"ghost"} className="ml-auto">Export</Button>
        
          <Button>Create discount</Button>
        </div>
  
       
  
        <Card>
          <CardContent className="p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
            <img
              src=""
              alt=""
              className="mb-4 w-32 h-32"
            />
            <h2 className="text-xl font-semibold mb-2">Manage discounts and promotions</h2>
            <p className="text-gray-500 mb-4">
            Create discount codes and automatic discounts that apply at checkout. You can also use discounts with <Link to={"/"} className="text-blue-500 underline">
            compare at prices
            </Link> .
            </p>
            <Button variant={""}>Create discount</Button>
          </CardContent>
         
        </Card>

        <div className="flex justify-center items-center">
          <span className="mr-2">Learn more about</span>
            <Link to={"/"} className="text-blue-500 underline">
               discounts
            </Link>
          </div>
      </div>
    );
};

export default Discounts;
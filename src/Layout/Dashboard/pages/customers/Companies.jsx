import { Link } from "react-router-dom";
import { Button } from "../../../../Components/ui/button";
import { Card, CardContent } from "../../../../Components/ui/card";


const Companies = () => {
    return (
        <div className="container mx-auto p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Companies</h1>
          
        </div>
  
        
  
        <Card>
          <CardContent className="p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
            <img
              src=""
              alt=""
              className="mb-4 w-32 h-32"
            />
            <h2 className="text-xl font-semibold mb-2">Bring the power of customization to your B2B business</h2>
            <p className="text-gray-500 mb-4">
            Everything you need for B2B in one place. Get started by adding a <br /> company and assigning custom pricing, net payment terms, and <br /> permissions for multiple locations and buyers.
            </p>
           
            <Button variant={""}>Add company</Button>
          </CardContent>
         
        </Card>

        <div className="flex justify-center items-center">
          <span className="mr-2">Learn more about</span>
            <Link to={"/"} className="text-blue-500 underline">
              companies
            </Link>
          </div>
      </div>
    );
};

export default Companies;
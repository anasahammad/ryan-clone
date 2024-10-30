
import { Button } from "../../../../Components/ui/button";
import { Card, CardContent } from "../../../../Components/ui/card";
import { Link } from "react-router-dom";
import image from "../../../../assets/purchase_orders.jpg"

const PurchaseOrders = () => {
    return (
        <div className="container mx-auto p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Purchase orders</h1>
          
        </div>
  
        
  
        <Card>
          <CardContent className="p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
            <img
              src={image}
              alt=""
              className="mb-4 w-32 h-32"
            />
            <h2 className="text-xl font-semibold mb-2">Manage your purchase orders</h2>
            <p className="text-gray-500 mb-4">
            Track and receive inventory ordered from suppliers.
            </p>
            <Button variant={""}>Create purchase order</Button>
          </CardContent>
         
        </Card>

        <div className="flex justify-center items-center">
          <span className="mr-2">Learn more about</span>
            <Link to={"/"} className="text-blue-500 underline">
               purchase orders
            </Link>
          </div>
      </div>
    );
};

export default PurchaseOrders;
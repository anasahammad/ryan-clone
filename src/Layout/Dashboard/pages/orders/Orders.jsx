import { Button } from "../../../../Components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../Components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "../../../../Components/ui/dropdown-menu";
import { ChevronDown, CalendarDays } from "lucide-react"
import businessImage from "../../../../assets/business_image.jpg"
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";

const stats = [
    { name: "Total orders", value: "0" },
    { name: "Ordered items over time", value: "0" },
    { name: "Returns", value: "0" },
    { name: "Fulfilled orders over time", value: "0" },
    { name: "Delivered orders over time", value: "0" },
    { name: "Time to fulfill", value: "0 min" },
  ]
const Orders = () => {
    return (
        <div className="container mx-auto p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Orders</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" >
                More actions <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <FaEye/>
                <span>Show analytics bar</span>
              </DropdownMenuItem>
              
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
  
        {/* <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4 overflow-x-auto">
              <Button variant="outline" className="flex items-center">
                <CalendarDays className="mr-2 h-4 w-4" />
                Today
              </Button>
              {stats.map((stat) => (
                <div key={stat.name} className="flex-shrink-0">
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <p className="text-lg font-semibold">{stat.value}</p>
                  <div className="h-1 w-16 bg-blue-100 mt-1">
                    <div className="h-1 w-4 bg-blue-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}
  
        <Card>
          <CardContent className="p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
            <img
              src={businessImage}
              alt=""
              className="mb-4 w-32 h-32"
            />
            <h2 className="text-xl font-semibold mb-2">Your orders will show here</h2>
            <p className="text-gray-500 mb-4">
              This is where you'll fulfill orders, collect payments, and track order progress.
            </p>
            <Button variant={""}>Create order</Button>
          </CardContent>
         
        </Card>

        <div className="flex justify-center items-center">
          <span className="mr-2">Learn more about</span>
            <Link to={"/"} className="text-blue-500 underline">
               orders
            </Link>
          </div>
      </div>
    );
};

export default Orders;
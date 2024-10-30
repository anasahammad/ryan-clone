import { Link } from "react-router-dom";
import { Button } from "../../../../Components/ui/button";
import { Card, CardContent } from "../../../../Components/ui/card";



const Catalogs = () => {
    return (
        <div className="container mx-auto p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Catalogs</h1>
          <Button variant={"ghost"} className="ml-auto">Export</Button>
          <Button variant={"ghost"} className="">Import</Button>
          <Button>Create Catalo</Button>
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
              src=""
              alt=""
              className="mb-4 w-32 h-32"
            />
            <h2 className="text-xl font-semibold mb-2">Personalize wholesale buying with catalogs</h2>
            <p className="text-gray-500 mb-4">
            Set buyer-specific prices and assign them to the company without the use of tags or apps.
            </p>
            <Button variant={""}>Create catalog</Button>
          </CardContent>
         
        </Card>

        <div className="flex justify-center items-center">
          <span className="mr-2">Learn more about</span>
            <Link to={"/"} className="text-blue-500 underline">
               catalogs
            </Link>
          </div>
      </div>
    );
};

export default Catalogs;
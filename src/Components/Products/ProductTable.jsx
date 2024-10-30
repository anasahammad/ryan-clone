import { ChevronDown, Download, MoreHorizontal, Search, Upload } from "lucide-react";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import productImage from "../../assets/image.jpg"
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { FaEye } from "react-icons/fa6";
import { TbArrowsSort } from "react-icons/tb";
import { CgSortAz } from "react-icons/cg";

const products = [
    {
      id: "1",
      name: "Example Hat",
      image: productImage,
      status: "Archived",
      inventory: "Inventory not tracked",
      salesChannels: 1,
      markets: 2,
      b2bCatalogs: 0,
      category: "Clothing",
      type: "shirts",
       vendor: "Acme"
    },
    {
      id: "2",
      name: "Example Pants",
      image: productImage,
      status: "Draft",
      inventory: "Inventory not tracked",
      salesChannels: 1,
      markets: 2,
      b2bCatalogs: 0,
      category: "Clothing",
      type: "pants",
       vendor: "Acme"
    },
    {
      id: "3",
      name: "Example T-Shirt",
      image: productImage,
      status: "Active",
      inventory: "0 in stock for 3 variants",
      salesChannels: 2,
      markets: 2,
      b2bCatalogs: 0,
      category: "Clothing",
      type: "t-shirt",
      vendor: "Acme"
    }
  ]
const ProductTable = () => {
    return (
        <div className="w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Products</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Import
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" >
                More actions <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioItem className="flex items-center gap-2">
                <FaEye/>
                <span>Show analytics bar</span>
              </DropdownMenuRadioItem>
              
            </DropdownMenuContent>
          </DropdownMenu>
            <Button size="sm">Add product</Button>
          </div>
        </div>
  
        <div className="bg-white rounded-lg shadow">
          <div className="border-b">
            <div className="flex items-center gap-4 p-4">
              <Button variant="ghost" className="text-sm">
                All
              </Button>
              <Button variant="ghost" className="text-sm">
                Active
              </Button>
              <Button variant="ghost" className="text-sm">
                Draft
              </Button>
              <Button variant="ghost" className="text-sm">
                Archived
              </Button>
              <Button variant="ghost" className="text-sm">
              <GoPlus />
              </Button>
              <Button variant="outline" size="icon" className="ml-auto flex items-center ">
                <Search className="h-4 w-4" />
                <CgSortAz className="h-4 w-4"/>
              </Button>
              <Button variant="outline" size="icon">
            
                <TbArrowsSort  className="h-4 w-4"/>
              </Button>
            </div>
          </div>
  
          <Table className="w-full overflow-auto">
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead>
                  Product
                  <ChevronDown className="h-4 w-4 inline-block ml-1" />
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Inventory</TableHead>
                <TableHead>Sales channels</TableHead>
                <TableHead>Markets</TableHead>
                <TableHead>B2B catalogs</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Vendor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-10 w-10 rounded object-cover"
                      />
                      <span>{product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                      ${
                        product.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : product.status === "Draft"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {product.status}
                    </span>
                  </TableCell>
                  <TableCell>{product.inventory}</TableCell>
                  <TableCell>{product.salesChannels}</TableCell>
                  <TableCell>{product.markets}</TableCell>
                  <TableCell>{product.b2bCatalogs}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.type}</TableCell>
                  <TableCell>{product.vendor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
  
         
        </div>

        <div className="p-4 border-t text-center text-sm text-gray-500">
            Learn more about{" "}
            <Link to="/products" className="text-blue-600 underline">
              products
            </Link>
          </div>
      </div>
    );
};

export default ProductTable;
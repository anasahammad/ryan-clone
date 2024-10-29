
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "../ui/checkbox";



const SetupGuide = () => {
    const [isExpanded, setIsExpanded] = useState(true)

  const steps = [
    {
      title: "Add your first product",
      description: "Write a description, add photos, and set pricing for the products you plan to sell.",
      expanded: true,
    },
    { title: "Add a custom domain" },
    { title: "Customize your online store" },
    { title: "Set your shipping rates" },
    { title: "Set up a payment provider" },
    { title: "Place a test order" },
  ]

  return (
    <Card className="w-full  max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-base">Setup guide</CardTitle>
          <p className="text-sm text-gray-500 mt-1">Use this personalized guide to get your store up and running.</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="mt-2 inline-block bg-gray-100 rounded-full px-3 py-1 text-sm">
          0 / 6 completed
        </div>
        {isExpanded && (
          <div className="mt-4 space-y-4 ">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3 ">
                <Checkbox className="mt-1" />
                <div className="flex-grow">
                  <h3 className="font-medium">{step.title}</h3>
                  {step.expanded && (
                    <>
                      <p className="mt-1 text-sm text-gray-500">
                        {step.description}{' '}
                        <a href="#" className="text-blue-500 hover:underline">
                          Learn more
                        </a>
                      </p>
                      <div className="mt-3 flex space-x-3">
                        <Button variant="default">Add product</Button>
                        <Button variant="outline">Import products</Button>
                      </div>
                    </>
                  )}
                </div>
                {step.expanded && (
                  <div className="flex-shrink-0">
                    <img
                      src="/"
                      alt="Product examples"
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
};

export default SetupGuide;
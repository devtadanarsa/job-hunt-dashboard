import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { PartyPopperIcon } from "lucide-react";

const JobDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-3 w-full gap-5">
        <div className="col-span-2 space-y-10">
          <div>
            <div className="text-3xl font-semibold">Description</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quasi a, nulla aliquam natus maxime in inventore ipsam pariatur
                laudantium facere necessitatibus quidem consequatur voluptatibus
                rerum libero ratione nostrum sapiente.
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Responsibilities</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos accusantium illum, neque consequatur tenetur facilis
                fugiat quas eligendi culpa adipisci inventore recusandae, porro
                repellat doloribus, labore nesciunt! Consectetur, incidunt quis!
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Who You Are</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos accusantium illum, neque consequatur tenetur facilis
                fugiat quas eligendi culpa adipisci inventore recusandae, porro
                repellat doloribus, labore nesciunt! Consectetur, incidunt quis!
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Nice-To-Haves</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos accusantium illum, neque consequatur tenetur facilis
                fugiat quas eligendi culpa adipisci inventore recusandae, porro
                repellat doloribus, labore nesciunt! Consectetur, incidunt quis!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl font-semibold">About this role</div>
          <div className="bg-gray-100 p-3 text-center my-6">
            1 <span className="text-gray-500">of 10 capacities</span>
            <Progress value={10} className="mt-3 bg-gray-300" />
          </div>

          <div className="mb-10 space-y-5">
            <div className="flex justify-between">
              <div className="text-gray-500">Apply Before</div>
              <div className="font-semibold">12 Aug 2023</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Job Posted On</div>
              <div className="font-semibold">12 Aug 2023</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Job Type</div>
              <div className="font-semibold">Full-Time</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Salary</div>
              <div className="font-semibold">$100 - $1000 USD</div>
            </div>
          </div>
          <Separator />

          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Required Skills</div>
            <div className="space-x-5">
              {["HTML", "Javascript"].map((item: string, i: number) => (
                <Badge key={i} className="rounded-none py-2 px-3">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <Separator />

          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Categories</div>
            <div className="space-x-5">
              <Badge className="rounded-none py-2 px-3">Design</Badge>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-8" />
      <div>
        <div className="text-3xl font-semibold">Perks & Benefits</div>
        <div className="text-gray-500">
          This job comes with several perks and benefits
        </div>
        <div className="grid grid-cols-4 gap-5 mt-9">
          {[0, 1, 2].map((item: number) => (
            <div key={item}>
              <PartyPopperIcon className="w-10 h-10 text-primary mb-6" />
              <div className="text-lg font-semibold mb-3">Full Healthcare</div>
              <div className="text-gray-500">
                We believe in thriving communities and that starts with our team
                being happy and healthy
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

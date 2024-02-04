import { Button } from "@/components/ui/button"
import { AiOutlineCalendar, AiOutlineHome, AiOutlineLogout, AiOutlineMessage, AiOutlineUsergroupAdd } from "react-icons/ai"
import { BsBuilding, BsGear } from "react-icons/bs"
import { HiOutlineClipboard } from "react-icons/hi"

const Sidebar = () => {
  const navItem = [
    {
        title: "Home",
        icon: AiOutlineHome,
    },
    {
        title: "Messages",
        icon: AiOutlineMessage,
    },
    {
        title: "Company Profile",
        icon: BsBuilding,
    },
    {
        title: "All Applicants",
        icon: AiOutlineUsergroupAdd,
    },
    {
        title: "Job Listings",
        icon: HiOutlineClipboard,
    },
    {
        title: "My Schedule",
        icon: AiOutlineCalendar,
    },
  ]

  return (
    <div className="pb-12 min-h-screen">
        <div className="space-y-4 py-4">
            <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
                <div className="space-y-3">
                    {navItem.map((item) => (
                        <Button
                            key={item.title}
                            variant={"ghost"} 
                            className="w-full justify-start rounded-none text-muted-foreground hover:text-primary"
                        >
                            {<item.icon className="mr-2 text-lg"/>}
                            {item.title}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
                    <div className="space-y-3">
                        <Button
                            variant={"ghost"} 
                            className="w-full justify-start rounded-none text-muted-foreground hover:text-primary"
                        >
                            <BsGear className="mr-2 text-lg" />
                            Settings
                        </Button>
                        <Button
                            variant={"ghost"} 
                            className="w-full text-red-500 justify-start rounded-none hover:bg-red-200 hover:text-red-500"
                        >
                            <AiOutlineLogout className="mr-2 text-lg" />
                            Logout
                        </Button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
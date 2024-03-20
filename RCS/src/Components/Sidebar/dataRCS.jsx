import { FaCarRear } from "react-icons/fa6";  //Vehicle
import { AiFillWarning } from "react-icons/ai";  //AGV Breakdown
import { ImStatsDots } from "react-icons/im";  //Stat Utilization
import { FaTasks } from "react-icons/fa";   //Task Parameters
import { HiMiniCpuChip } from "react-icons/hi2";  //Order Processing
import { MdOutlineLocationCity } from "react-icons/md";  //District
import { GrStorage } from "react-icons/gr";  //Storage bin
import { FaNetworkWired } from "react-icons/fa6";  //Storage Bin Status
import { ImStatsBars } from "react-icons/im";  //Storage Bin Stats
import { TiSpanner } from "react-icons/ti";  //Current Order
import { GrUserWorker } from "react-icons/gr";  //Order
import { MdTask } from "react-icons/md"; //Task
import { MdDataObject } from "react-icons/md";  //Log


const dataRCS = [
    {
        name:"Vehicle",
        logo:<FaCarRear />,
        path:"",
    },
    {
        name:"AGV Breakdown",
        logo:<AiFillWarning />,
        path:"",
    },
    {
        name:"Stat Utilization",
        logo:<ImStatsDots />,
        path:"",
    },
    {
        name:"Task Parameters",
        logo:<FaTasks />,
        path:"",
    },
    {
        name:"Order Processing",
        logo:<HiMiniCpuChip />,
        path:"",
    },
    {
        name:"District",
        logo:<MdOutlineLocationCity />,
        path:"",
    },
    {
        name:"Storage Bin",
        logo:<GrStorage />,
        path:"",
    },
    {
        name:"Storage Bin Status",
        logo:<FaNetworkWired />,
        path:"",
    },
    {
        name:"Storage Bin Statistics",
        logo:<ImStatsBars />,
        path:"",
    },
    {
        name:"Current Order",
        logo:<TiSpanner />,
        path:"",
    },
    {
        name:"Order",
        logo:<GrUserWorker />,
        path:"",
    },
    {
        name:"Task",
        logo:<MdTask />,
        path:"",
    },
    {
        name:"Log",
        logo:<MdDataObject />,
        path:"",
    },
]


export default dataRCS;
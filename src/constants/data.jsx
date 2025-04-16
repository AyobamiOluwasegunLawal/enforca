import { HiSquare3Stack3D } from "react-icons/hi2";
import { FaPaintBrush } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiOutlineAudit } from "react-icons/ai";
import { MdCloudDownload } from "react-icons/md";

import { nanoid } from 'nanoid'


export const solutions = [
    {
        id: nanoid(),
        icon: <HiSquare3Stack3D className={'size-6'}/>,
        title: "Full-stack Apps",
        description: "Web/App software development",
        className: "text-purple-700 bg-purple-200 p-3 rounded-lg"
    },

    {
        id: nanoid(),
        icon: <FaPaintBrush className={'size-6'}/>,
        title: "Scalable MVPs",
        description: "MVPs you don't throw away",
        className: "text-green-700 bg-green-200 p-3 rounded-lg"
    },

    {
        id: nanoid(),
        icon: <IoPersonSharp className={'size-6'}/>,
        title: "Quality Assurance",
        description: "Automated testing & DevOps",
        className: "text-blue-700 bg-blue-200 p-3 rounded-lg"
    },

    {
        id: nanoid(),
        icon: <FaPeopleGroup className={'size-6'}/>,
        title: "Dedicated teams",
        description: "Manage teams of best talent"
    },

    {
        id: nanoid(),
        icon: <AiOutlineAudit className={'size-6'}/>,
        title: "Technical Audits",
        description: "Proven audits & due dilligence"
    },

    {
        id: nanoid(),
        icon: <MdCloudDownload className={'size-6'}/>,
        title: "Project Management",
        description: "Solution design & architecture"
    },

    {
        id: nanoid(),
        title: "Start",
        description: "Let's get started"
    }
]

export const successes = [
    {
        number: 45,
        text: 'Engineers in training'
    },
    {
        number: 18,
        text: 'Top-notch engineers'
    },

    {
        number: '3500+',
        text: 'Kenyan AAA coffee cups'
    },


]

export const contact = [
    {
        id:nanoid(),
        header: 'Contact (BE)',
        address: '2nd Floor College House',
        address2:   '7 King Edwards Road',
        number: "07392 807929, 08127575385",

        email: 'Email: info@mentor-techies.com'
    }
]

export const links = [
    {
        id: nanoid(),
        title: 'Home',
        link: '/'
    },

    {
        id: nanoid(),
        title: 'About',
        link: '/About'
    },

    {
        id: nanoid(),
        title: 'Contact',
        link: '/Contact'
    }
]

export const services = [
    {
        id: nanoid(),
        title: 'Start ups',
        link: '/Startup'
    },

    {
        id: nanoid(),
        title: 'Intershop/Siwes',
        link: '/SiwesInternship'
    },
]
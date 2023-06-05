import React from "react";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
// FaBriefcaseMedical

export const MenuItems = [
    {
        title: "Home",
        url: "/",
        cName : "nav-links",
        icon: <FaHome />
    },
    {
        title: "About",
        url: "/about",
        cName : "nav-links",
        icon: <FaInfoCircle />
    },
    {
        title: "Service",
        url: "/service",
        cName : "nav-links",
        icon: <FaBriefcaseMedical />
    },
    {
        title: "Contact",
        url: "/contact",
        cName : "nav-links",
        icon: <FaAddressBook />
    },
    {
        title: "Sign Up",
        url: "/signup",
        cName : "nav-links-mobile"
    }
]
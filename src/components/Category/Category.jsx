import React from 'react'
import "./CategoryStyle.css"
import { FaAngleDown } from "react-icons/fa";

function Category() {



  return (
    <section className='category-section'>
        {/* <h1>This is Category Page</h1> */}

            {/* price filter */}
        <div className="price-filter w-full p-4">
            <div className="price-head flex justify-between font-bold">
                <span>Price</span>
                <FaAngleDown />
            </div>
            <div className="price-box flex justify-between my-4">
                <div className="box1 box">IDR 0</div>
                <div className="box2 box">IDR 20,000,000</div>
            </div>
            <label for="default-range" 
                class="block mb-2 text-sm font-medium text-red-400 dark:text-white">Default range</label>
            <input id="default-range" type="range" value="50" 
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-red-500"/>
        </div>
        <hr className='w-full my-4' />

            {/* provider check */}
        <div className="provider-filter w-full p-4">
            <div className="price-head flex justify-between font-bold">
                <span>Provider</span>
                <FaAngleDown />
            </div>
            <div className="provider-item mt-4">
                <div className="items flex gap-2">
                    <input type="radio" id='show'/>
                    <label htmlFor="show">Show All</label>
                </div>
                <div className="items flex gap-2">
                    <input type="radio" id='rtemis'/>
                    <label htmlFor="rtemis">Rtemis</label>
                </div>
                <div className="items flex gap-2">
                    <input type="radio" id='partner'/>
                    <label htmlFor="partner">Partner</label>
                </div>
            </div>
        </div>
        <hr className='w-full my-4' />

            {/* Short check */}
        <div className="provider-filter w-full p-4">
            <div className="price-head flex justify-between font-bold">
                <span>Sort By</span>
                <FaAngleDown />
            </div>
            <div className="provider-item mt-4">
                <div className="items flex gap-2">
                    <input type="radio" id='cheap'/>
                    <label htmlFor="cheap">Cheapest - Most Expensive</label>
                </div>
                <div className="items flex gap-2">
                    <input type="radio" id='expensive'/>
                    <label htmlFor="expensive">Most Expensive - Cheapest</label>
                </div>
                <div className="items flex gap-2">
                    <input type="radio" id='Highest'/>
                    <label htmlFor="Highest">Highest Rating - Lowest rating</label>
                </div>
            </div>
        </div>
        <hr className='w-full my-4' />

            {/* Additional check */}
        <div className="provider-filter w-full p-4">
            <div className="price-head flex justify-between font-bold">
                <span>Additional Option</span>
                <FaAngleDown />
            </div>
            <div className="provider-item mt-4">
                <div className="items flex gap-2">
                    <input type="checkbox" id='promotion'/>
                    <label htmlFor="promotion">In Promotion</label>
                </div>
                <div className="items flex gap-2">
                    <input type="checkbox" id='minimum '/>
                    <label htmlFor="minimum ">No Minimum Stay</label>
                </div>
            </div>
        </div>
        <hr className='w-full my-4' />

            {/* Facility check */}
        <div className="provider-filter w-full p-4">
            <div className="price-head flex justify-between font-bold">
                <span>Facility</span>
                <FaAngleDown />
            </div>
            <div className="provider-item mt-4">
                <div className="items flex gap-2">
                    <input type="checkbox" id='internet'/>
                    <label htmlFor="internet">Free Internet Access</label>
                </div>
                <div className="items flex gap-2">
                    <input type="checkbox" id='breakfast'/>
                    <label htmlFor="breakfast">Free Breakfast</label>
                </div>
                <div className="items flex gap-2">
                    <input type="checkbox" id='parking'/>
                    <label htmlFor="parking">Free Parking</label>
                </div>
                <div className="items flex gap-2">
                    <input type="checkbox" id='pet'/>
                    <label htmlFor="pet">Pets Allowed</label>
                </div>
                <div className="items flex gap-2">
                    <input type="checkbox" id='pool'/>
                    <label htmlFor="pool">Swimming Pool</label>
                </div>
            </div>
            <div className="more flex gap-4 items-center mt-2 ml-5">
                <span className='text-[#35B0A7]'>Show 11 more</span>
                <FaAngleDown className='text-[#35B0A7]' />
            </div>
        </div>








    </section>
  )
}
export default Category;

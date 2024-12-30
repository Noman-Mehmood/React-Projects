
import { IoArrowBackSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
const Jobs = () =>{
    return(
        <section className="bg-blue-50" >
            <div className="p-3 bg-white  " >
                <p className="text-indigo-500 flex items-center space-x-2 " > <IoArrowBackSharp />Back to Job Listings </p>
            </div>
            <div className="h-full bg-blue-50 p-10 " >
            <div className="grid grid-cols-12 gap-4  " >
                <div className="bg-white shadow-lg p-4 rounded-lg  col-span-9  ">
                    <p className="text-gray-500 text-lg mb-3 " >Full-Time</p>
                    <h2 className="font-bold text-3xl mb-4" > Senior React Developer </h2>
                    <p className='text-orange-600 flex mb-3 '> <MdLocationOn className="text-xl" /> <span> Miami, FL</span> </p>
                </div>
                
                <div className=" col-span-3 row-span-3 space-y-4 " >
                <div className=" bg-white shadow-lg p-4 rounded-lg" >
                    <h3 className="font-bold mb-3 " >Company Info</h3>
                    <h2 className="mb-2 font-thin text-2xl " >NewTek Solutions</h2>
                    <p className="tracking-wide mb-4" >NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.</p>
                    <hr className="mb-3" />
                    <h2 className="text-xl font-semibold mb-2 " >Contact Email:</h2>
                    <p className="bg-blue-50 p-2 mb-2 " >contact@newteksolutions.com</p>
                    <h2 className="text-xl font-semibold mb-2 " >Contact Phone:</h2>
                    <p className="bg-blue-50 p-2 mb-2 " >555-555-5555</p>
                </div>
                <div className="bg-white shadow-lg p-4  " >
                    <h2 className="font-bold text-lg mb-2 " >Manage Job</h2>
                    <button className="w-full text-center p-2 bg-indigo-600 rounded-xl text-white mb-2 " >Edit Job</button>
                    <button className="w-full text-center p-2 bg-red-600 rounded-xl text-white mb-2 " >Delete Job</button>
                </div>

                </div>
                <div className="bg-white shadow-lg p-4 rounded-lg  col-span-9  ">
                    <p className="text-indigo-600 text-lg font-bold mb-3 " >Job Description</p>
                    <p className="mb-3" >We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.</p>

                    <p className="text-indigo-600 text-lg mb-3 font-bold " >Salary</p>

                    <p className='text-lg mb-3 '> $70k - $80K / Year</p>
                </div>
                
            </div>
            </div>
        </section>
    )
}
export default Jobs
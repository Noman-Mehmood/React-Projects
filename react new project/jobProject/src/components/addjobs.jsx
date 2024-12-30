const Addjobs = () => {
    return(
        <section className="flex justify-center items-center p-10 h-full bg-blue-50 " >
            <div className="bg-white p-10 rounded-lg shadow-lg " style={{width: 600}} >
                <h2 className="text-center text-3xl font-bold mb-2" >Add Jobs</h2>
                <form className="mt-2" >
                <div>
                    <p className="text-gray-600 font-bold mb-2 " >Job Type</p>
                    <select name="options" className="border border-gray-300 w-full p-2 rounded-lg mb-2" >
                        <option value="value1">Full-Time</option>
                        <option value="value2">Part-Time</option>
                        <option value="value3">Remote</option>
                        <option value="value4">InternShip</option>
                    </select>
                </div>
                <div>
                <p className="text-gray-600 font-bold mb-2 " >Job Listing Name</p>
                <input className="w-full p-2 border border-gray-300 rounded-lg mb-2 " type="text" id="text" placeholder="eg. Beautiful Apartment In Miami" />
                </div>
                <div>
                <p className="text-gray-600 font-bold mb-2 " >Discription</p>
                <textarea id="Discription" className="border border-gray-300 w-full h-40 p-2 rounded-lg " placeholder="Add any job duties, expactations, requirements, etc" >

                </textarea>
                 
                </div>
                <div>
                <p className="text-gray-600 font-bold mb-2 " >Salary</p>
                <select name="Salary" className="border border-gray-300 w-full p-2 rounded-lg mb-2" >
                    <option value="value1">Under $50k</option>
                    <option value="value1"> $50k-$60k</option>
                    <option value="value1"> $60k-$70k</option>
                    <option value="value1"> $70k-$80k</option>
                    <option value="value1"> $80k-$90k</option>
                    <option value="value1"> $90k-$100k</option>
                    <option value="value1"> $100k-$125k</option>
                    <option value="value1"> $125k-$150k</option>
                    <option value="value1"> $125k-$175k</option>
                    <option value="value1"> $175k-$200k</option>
                    <option value="value1"> Over $200k</option>
                    
                </select>
                </div>

                <div>
                <p className="text-gray-600 font-bold mb-2 " >Location</p>
                <input className="w-full p-2 border border-gray-300 rounded-lg mb-2 " type="text" id="text" placeholder="Location" />

                </div>

                {/* company info */}
                <div className="mt-4" >
                    <h2 className="mb-2 font-bold text-2xl" >Company Name</h2>
                    <p className="text-gray-600 font-bold mb-2 " >Company Name</p>
                    <input className="w-full p-2 border border-gray-300 rounded-lg mb-2 " type="text" id="text" placeholder="Company Name" />
                </div>

                <div>
                <p className="text-gray-600 font-bold mb-2 " >Company Description</p>
                <textarea id="Discription" className="border border-gray-300 w-full h-40 p-2 rounded-lg " placeholder="What does your company do" >

                </textarea>
                </div>
                <div>
                <p className="text-gray-600 font-bold mb-2 " >Email</p>
                <input className="w-full p-2 border border-gray-300 rounded-lg mb-2 " type="text" id="text" placeholder="Email address for applicants" />
                </div>
                <div>
                <p className="text-gray-600 font-bold mb-2 " >Contact Phone</p>
                <input className="w-full p-2 border border-gray-300 rounded-lg mb-2 " type="text" id="text" placeholder="Phone Number" />
                </div>
                <div className="mt-4" >
                    <button className="w-full bg-indigo-600 rounded-xl text-white p-2 " type="submit" >Add The Job</button>
                </div>
                </form>
                
            </div>
        </section>
    )
}
export default Addjobs

const MainSection = () => {
  return (
    <section className=" p-10">
        <div className="grid md:grid-cols-2 grid-cols-1 md:space-x-3 space-x-0 md:space-y-0 space-y-3 ">
    <div className="bg-gray-100 px-10 py-6 flex flex-col justify-center rounded-lg " >
    <h2 className="text-2xl font-bold mb-2" > For Developers</h2>
    <p className="mb-2" >Browse our React jobs and start your career today</p>
    <div>
    <button className="bg-black rounded-lg text-white p-2 container-xl mb-2 " >
        Browse Jobs
        </button>
    </div>
    </div>

    <div className="bg-indigo-100 rounded-lg px-10 py-6 flex flex-col justify-center " >
        <h2 className="text-2xl font-bold mb-2" >
        For Employers
        </h2>
        <p className="mb-2 "  >
        List your job to find the perfect developer for the role
        </p>
        <div>
        <button className="bg-indigo-500 rounded-lg text-white p-2 container-xl mb-2" >
        Add Job
        </button>
        </div>
    </div>
   
    <div>
       
    </div>
        </div>

    </section>
  )
}

export default MainSection
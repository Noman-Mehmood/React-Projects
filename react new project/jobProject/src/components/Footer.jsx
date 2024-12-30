const Footer = () => {
  return (
   <section className="bg-indigo-700 px-40 py-10 flex items-center justify-between " >
     <div className="flex items-center " >
         {/* logo */}
         <img className="h-10 w-auto object-cover  " src="/theme/images/logo.png" alt="" />
         <h2 className="text-2xl font-bold text-white pl-2 " >React Jobs</h2>
       </div>
       <div>
        <ul  >
            <li className="text-white hover:bg-black px-6 py-3 rounded-lg " > <a href="#">Home</a> </li>
            <li className="text-white hover:bg-black px-6 py-3 rounded-lg " > <a href="#"> Jobs </a> </li>
            <li className="text-white hover:bg-black px-6 py-3 rounded-lg " > <a href="#"> Add jobs </a> </li>
            <li className="text-white hover:bg-black px-6 py-3 rounded-lg " > <a href="#"> Find Jobs </a> </li>
        </ul>
       </div>
       <div className="w-80 space-y-3 " >
        <h1 className="text-white text-3xl font-bold "  >About us</h1>
        <p className="text-white  " >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptate fugit repudiandae officia harum nulla facilis, id asperiores, obcaecati cumque omnis adipisci dolorum quam debitis numquam aperiam atque quo ipsa.</p>
       </div>
   </section>
  )
}

export default Footer
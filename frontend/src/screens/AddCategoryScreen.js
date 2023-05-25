const AddCategory = () =>{
    return(
        <div className="inline-block mt-24 ml-80 w-96">
            <h1 className="text-center font-semibold">Add Category</h1>
            <form className="justify-center w-auto h-auto mt-10">
                <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Category Name</label>
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" placeholder=" Enter Category name " required />
                </div>
                <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Category Description</label>
                <textarea class="bg-gray-50 border border-gray-300 h-32 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" placeholder=" Enter Category Description.. " required />
                </div>
                <div className=" grid grid-cols-2">
                <button type="submit" class="text-white mt-4 mx-3 justify-start  bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full  text-sm w-20  py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Add</button>
               <button type="reset" class="text-white mt-4 mx-5 justify-end bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full  text-sm w-20  py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Clear</button>
                </div>
            </form>
        </div>
    )
}
export default AddCategory;
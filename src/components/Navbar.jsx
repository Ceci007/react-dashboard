const Navbar = () => {
  return (
    <div className="fixed top-0 w-full md:w-[calc(100vw - 530px)] h-[60px] flex items-center justify-between">
      <div className="bg-blue-500 md:ml-[230px]">
        Nabvar left
      </div>
      <div className="bg-yellow-500 md:mr-[300px]">
        Navbar right
      </div>
    </div>
  )
}

export default Navbar;
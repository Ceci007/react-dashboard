const Navbar = () => {
  return (
    <div className="fixed w-[calc(100vw - (230px + 300px))] top-0 md:!right-[300px] md:left-[230px] h-[60px] px-7 py-3 flex items-center justify-between bg-red-500">
      <div>
        Nabvar left
      </div>
      <div className="">
        Navbar right
      </div>
    </div>
  )
}

export default Navbar;
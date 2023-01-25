const Header = () => {
  return (
      <div className="bg-[url('/wallpaper.png')] fixed z-10 w-full flex items-center justify-between py-5 px-10">
          <h1>Bem vindo ao nosso catálogo!</h1>

          <nav>
            <ul className="flex items-center justify-center gap-5">
              <li>Best Products</li>
              <li>Promotion</li>
              <li>All Products</li>
              <li>About Us</li>
            </ul>

            {/* <UserIcon /> DESIGN FIGMA */}
          </nav>
      </div>
  )
}

export default Header
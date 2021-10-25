

function Header () {
  return(
    <header class="header">
      <nav class="header__links header__links--left">
        <a href= '#'>Home</a> | <a href= '#'>About</a> |
        <a href= '#'>Contact</a>
      </nav>
      <div class="header__logo">Logo</div>
      <div class="header__links header__links--right">
        <input class="search" placeholder="Search..." />
        <p class="last-pressed"></p>
      </div>
    </header>
  )}
  

export default Header;
const Header = () => {
  const header = document.createElement("header");
  header.className = "header-section";
  header.innerHTML = `<div
  class="header-container"
>
  <div class="Logo">
    <a href="#" class="flex">
      <span class="gen">GEN</span>
      <span class="sen">Sen</span>
    </a>
  </div>

  <div class="nav-area">
    <div class="nav-links">
      <div
        class="nav-link"
      >
        <span >
          <a
            href="#"
            class="login"
          >
          <i class="fas fa-sign-in-alt"></i>

            <span class="nav-desc">Sign-in</span>
          </a>
        </span>

        <span>
          <a
            href="#"
            class="user"
          >
          <i class="fas fa-user-circle"></i>

            <span class="nav-desc"> Account </span>
          </a>
        </span>

        <span class="">
          <a
            href=""
            class="search"
          >
          <i class="fas fa-search"></i>

            <span class="nav-desc"> Search </span>
          </a>
        </span>
      </div>
    </div>
  </div>
</div>`;
  return header;
};

export default Header;

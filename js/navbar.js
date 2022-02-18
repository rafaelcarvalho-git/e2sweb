class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


/*funcoes pagina contato*/
function btjuazeiro() {
    document.getElementById('map').setAttribute('src', 'https://maps.google.com/maps?q=e2s%20corretora%20de%20seguros&t=&z=17&ie=UTF8&iwloc=&output=embed');
    document.getElementById('endereco').innerHTML = 'Localização: Rua Fiscal José Soares, 303, Salesianos';
}
function btassare() {
    document.getElementById('map').setAttribute('src', 'https://maps.google.com/maps?q=assare%20zenir&t=&z=17&ie=UTF8&iwloc=&output=embed');
    document.getElementById('endereco').innerHTML = 'Localização: Rod Transamazônica, 303, Assaré';
}
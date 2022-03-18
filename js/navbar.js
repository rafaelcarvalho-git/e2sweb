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
  
  const mobileNavbar = new MobileNavbar(".mobile-menu",".nav-list",".nav-list li",);
  mobileNavbar.init();


/*funcoes pagina contato*/
function btjuazeiro() {
    document.getElementById('map').setAttribute('src', 'https://maps.google.com/maps?q=e2s%20corretora%20de%20seguros&t=&z=17&ie=UTF8&iwloc=&output=embed');
    var end1 = document.getElementById('endereco');
    var end2 = document.getElementById('endereco2');
    end1.href = 'https://g.page/e2scorretoradeseguros?share';
    end1.innerHTML = 'Rua Fiscal José Soares, 303, Salesianos';
    end2.href = 'https://g.page/e2scorretoradeseguros?share';
    end2.innerHTML = 'Rua Fiscal José Soares, 303, Salesianos';
}
function btassare() {
    document.getElementById('map').setAttribute('src', 'https://maps.google.com/maps?q=Rua%20Pe.%20Em%C3%ADlio%20Cabral%20-%20Centro,%20Assar%C3%A9%20-%20CE,%2063140-000&t=&z=17&ie=UTF8&iwloc=&output=embed');
    var end1 = document.getElementById('endereco');
    var end2 = document.getElementById('endereco2');
    end1.href = 'https://goo.gl/maps/AUp7J56ipNJ25vpc9';
    end1.innerHTML = 'Rua Padre Emílio Cabral, 176, Assaré';
    end2.href = 'https://goo.gl/maps/AUp7J56ipNJ25vpc9';
    end2.innerHTML = 'Rua Padre Emílio Cabral, 176, Assaré';
}
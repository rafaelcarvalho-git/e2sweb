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
    document.getElementById('map').setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1277684189427!2d-39.87489048472426!3d-6.875291469183632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a20fe0577a462d%3A0x4208c2062fe9ea8c!2sE2S%20Corretora%20de%20Seguros%20LTDA-ME!5e0!3m2!1spt-BR!2sbr!4v1648175671661!5m2!1spt-BR!2sbr');
    var end1 = document.getElementById('endereco');
    var end2 = document.getElementById('endereco2');
    end1.href = 'https://goo.gl/maps/Uq3w9zD9tWpwxrc6A';
    end1.innerHTML = 'Rua Padre Emílio Cabral, 176, Assaré';
    end2.href = 'https://goo.gl/maps/Uq3w9zD9tWpwxrc6A';
    end2.innerHTML = 'Rua Padre Emílio Cabral, 176, Assaré';
}
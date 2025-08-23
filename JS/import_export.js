const profileImg = new URL(
  "https://raw.githubusercontent.com/hetuk2005/Fake_Store/23e121dcaef2e2c0abf0a202d185aa7d74ba9970/Utils/20-30%20Age.svg",
  import.meta.url
).href;
const searchImg = new URL(
  "../utils/Search-removebg-preview.svg",
  import.meta.url
).href;

const footer_svg_logo = new URL("../utils/footer_Logo.svg", import.meta.url)
  .href;
const facebook_logo = new URL("../utils/facebook-logo.png", import.meta.url)
  .href;
const github_logo = new URL("../utils/github-logo.png", import.meta.url).href;
const google_logo = new URL("../utils/google.png", import.meta.url).href;
const youtube_logo = new URL("../utils/youtube.png", import.meta.url).href;
const linkdin_logo = new URL("../utils/linkdin.png", import.meta.url).href;

export const Navbar = () => {
  return `
    <nav>
        <p class="logo_nav" >
            <svg  class="sideBar" id="openSidebar" aria-expanded="false" aria-controls="sidebar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="restaurant">
            <path fill="#f37165" d="M19.93,7.52,16,11.4,12.09,7.52a2.68,2.68,0,0,1,3.66-3.91,3.45,3.45,0,0,1,.26.28,2.68,2.68,0,0,1,4.2,3.33,3.83,3.83,0,0,1-.28.29Z"></path>
            <path fill="#c8c8c8" d="M16.61 14.26v-.65A.6.6 0 0016 13a.59.59 0 00-.59.59v.65a4.16 4.16 0 00-3.58 4.13V19h8.35v-.59A4.17 4.17 0 0016.61 14.26zM4.67 29.12a.6.6 0 01-.6-.6V23.16a.6.6 0 01.6-.6.59.59 0 01.59.6v5.36A.59.59 0 014.67 29.12zM11.23 29.12a.6.6 0 01-.6-.6V23.16a.6.6 0 01.6-.6.59.59 0 01.59.6v5.36A.59.59 0 0111.23 29.12z"></path>
            <path fill="#c8c8c8" d="M4.67,23.75a.59.59,0,0,1-.59-.5L2.89,16.1a.59.59,0,1,1,1.16-.25v.05l1.19,7.16a.58.58,0,0,1-.49.68Z"></path>
            <path fill="#4d4d4d" d="M11.82,25H4.07V23.16a.6.6,0,0,1,.6-.6h6.56a.59.59,0,0,1,.59.6Z"></path>
            <path fill="#c8c8c8" d="M27.33 29.12a.59.59 0 00.59-.6V23.16a.59.59 0 00-.59-.6.6.6 0 00-.6.6v5.36A.6.6 0 0027.33 29.12zM20.77 29.12a.59.59 0 00.59-.6V23.16a.59.59 0 00-.59-.6.6.6 0 00-.6.6v5.36A.6.6 0 0020.77 29.12z"></path>
            <path fill="#c8c8c8" d="M27.33,23.75a.6.6,0,0,0,.59-.5l1.19-7.15a.6.6,0,0,0-.43-.73.59.59,0,0,0-.72.42.24.24,0,0,0,0,.08,0,0,0,0,1,0,0l-1.19,7.16a.6.6,0,0,0,.49.68Z"></path>
            <path fill="#4d4d4d" d="M20.17,25h7.75V23.16a.59.59,0,0,0-.59-.6H20.77a.6.6,0,0,0-.6.6Z"></path>
            <path fill="#4d4d4d" d="M22,19H10a.59.59,0,0,0-.59.6.58.58,0,0,0,.59.59H15.4v8.35a.6.6,0,0,0,.6.6h0a.59.59,0,0,0,.59-.6V20.17H22a.59.59,0,0,0,.6-.59A.6.6,0,0,0,22,19Z"></path>
            </svg>
        </p>

        <p class="search">
        <input id="search" name="search" type="text" />
        <button onclick="searchFunc()">
        <img autocomplete="off" src="${searchImg}" alt="search-logo"/>
        </button>
        </p>
        
        <ul class="rout_page_name">
            <li class="homePage nav-link">home</li>
            <li class="about nav-link">about</li>
            <li class="loginFunc nav-link">login</li>
            <li class="cartFunc nav-link">cart</li>
            <span class="cartDisplay"></span>
        </ul>
        <img src=${profileImg} alt="profile-logo">
    </nav>
    `;
};

export const Footers = () => {
  return `
     <section class="footer">
        <section class="footer_logos">
            <img src="${footer_svg_logo}" alt="footer-logo">
        </section>
        <section class="footer_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, illo.adipisicing
            elit. Saepe, illo.adipisicing elit. Saepe, illo.
        </section>
        <section class="social_logo">
            <img src="${facebook_logo}" alt="facebook-logo">
            <img src="${github_logo}">
            <img src="${google_logo}" alt="google">
            <img src="${youtube_logo}" alt="youtube-logo">
            <img src="${linkdin_logo}" alt="linkdin">
        </section>
    </section>
`;
};

export const NavStyle = () => {
  return `
    .header,#footers{
        width:100%;
    }

      nav,
        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            /* border: 2px solid red; */
            width: 90%;
            margin: auto;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            padding: 10px 20px;
            border-radius: 10px;
        }

        ul,
        li {
            width: unset;
            list-style: none;
            gap: 20px;
            box-shadow: none;
            margin:unset;
            gap: 0;
            padding: 6px 10px;
            border-radius: 10px;
        }

        svg,
        img {
            width: 100px;
            height: 100px;
        }

        .search{
        width:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        }

        input{
        padding: 10px 5px;
        width: 100%;
        height:50px;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
        border:1px solid gray;
        }

        .search>button> img{
        border:1px solid gray;
        width: 100%;
        height: 100%;
        padding:3px;
        border-top-right-radius:10px;
        border-bottom-right-radius:10px;
        }

        .search>button{
            height:50px;
            width:57px;
            border: none;
            outline: none;
            background: transparent;
        }

        input:focus{
        outline:none;
        }

        /* footer section start */

        .footer {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        width: 90%;
        margin: auto;
        border-radius:10px;
        padding:15px 0
        }

        .footer_text {
            width: 40%;
            text-align: center;
        }

        .social_logo>img {
            width: 50px;
            height: 50px;
        }

        .rout_page_name > li {
  /* color: rgba(255, 255, 255, 0.75); */
  transition: all 0.3s ease-out;
}

.rout_page_name li.active {
  content: "";
  top: 0;
  left: 0;
  background: #000;
  color: hsl(120 75% 50%/1);
  border-radius: 10px;
}
        `;
};
//  side-bar functionality start

export const SideBar = () => {
  return `
    
     <!-- The overlay that blurs the background when active -->
    <div class="overlay" id="overlay" aria-hidden="true"></div>

    <!-- Sidebar -->
    <section class="sidebar" id="sidebar" aria-label="Sidebar Navigation" aria-hidden="true">
        <header style="display:flex; align-items:center; gap:.5rem; justify-content:space-between;">
            <strong style="color:white">Menu</strong>
            <button class="btn" id="closeSidebar" aria-label="Close sidebar">✕</button>
        </header>
        <a href="#"><span>🏠</span> Home</a>
        <a href="#"><span>📄</span> Docs</a>
        <a href="#"><span>📦</span> Products</a>
        <a href="#"><span>📞</span> Contact</a>
    </section>
    
    `;
};
//  side-bar functionality end

export const loginFunc = () => {
  window.location.pathname = "Login.html";
};

export const goHome = () => {
  window.location.pathname = "index.html";
};

export const cartFunc = () => {
  window.location.pathname = "Cart.html";
};

let text = "🔍  Search For What You Want...";
let input;
let i = 0;

export const typePlaceholder = () => {
  input = document.querySelector("#search");
  if (!input) return;
  if (i <= text.length) {
    input.setAttribute("placeholder", text.substring(0, i));
    i++;
    setTimeout(typePlaceholder, 100);
  } else {
    i = 0;
    setTimeout(typePlaceholder, 1100);
  }
};

// Highlight Active Nav Item
function setActiveNav() {
  // Get current page name (like index.html, Login.html, Cart.html)
  let currentPage = window.location.pathname.split("/").pop().toLowerCase();

  // Select all nav links
  const navItems = document.querySelectorAll(".rout_page_name .nav-link");

  navItems.forEach((item) => {
    // reset
    item.classList.remove("active");

    // Match based on text or condition
    if (
      (currentPage === "index.html" && item.classList.contains("homePage")) ||
      (currentPage === "login.html" && item.classList.contains("loginFunc")) ||
      (currentPage === "cart.html" && item.classList.contains("cartFunc")) ||
      (currentPage === "about.html" && item.classList.contains("about"))
    ) {
      item.classList.add("active");
    }
  });
}

// Call it once when page loads
document.addEventListener("DOMContentLoaded", setActiveNav);
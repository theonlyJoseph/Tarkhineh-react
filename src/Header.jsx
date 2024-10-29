import greenSmallLogo from './assets/Logo/greenSmall.svg';
import greenBigLogo from './assets/Logo/greenBig.svg';
// slffajaljf
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center space-x-5 p-8">
        {/* Nav buttons */}
        <div className="flex justify-center gap-2" id="navButtons">
          <button
            className="btn btn-sm md:px-2 px-1 bg-Main-Tint-1"
            id="cart-btn"
          >
            <svg
              className="w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#417F56"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#417F56"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
          <button
            className="btn btn-sm md:px-2 px-1 bg-Main-Tint-1"
            id="user-btn"
          >
            <svg
              className="w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                  stroke="#417F56"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                  stroke="#417F56"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                  stroke="#417F56"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9 8H21"
                  stroke="#417F56"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
          <button
            className="btn btn-sm md:px-2 px-1 max-sm:hidden bg-Main-Tint-1"
            id="search-btn"
          >
            <svg
              className="w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M17 17L21 21"
                  stroke="#417F56"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#417F56"
                  strokeWidth="1.2"
                ></path>
              </g>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="mx-3  max-md:hidden">
          <ul className="flex justify-center items-center gap-5 font-estedad text-Body-Md text-center text-Neutral-Gray-7 flex-row-reverse">
            <li>
              <a
                href="#"
                className="border-b-2 border-Main-Primary text-Main-Primary font-bold"
              >
                صفحه اصلی
              </a>
            </li>
            <li>
              <a href="">شعبه</a>
            </li>
            <li>
              <a href="">منو</a>
            </li>
            <li>
              <a href="">اعطای نمایندگی</a>
            </li>
            <li>
              <a href="">درباره ما</a>
            </li>
            <li>
              <a href="">تماس ما</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div>
          <picture>
            <source media="(min-width:650px)" srcSet={greenBigLogo}></source>
            <source media="(max-width:465px)" srcSet={greenSmallLogo}></source>
            <img src={greenSmallLogo} alt="Tarkhineg Logo"></img>
          </picture>
        </div>

        <div className="md:hidden">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M20 7L4 7"
                stroke="#417F56"
                strokeWidth="1.2"
                strokeLinecap="round"
              ></path>
              <path
                d="M20 12L4 12"
                stroke="#417F56"
                strokeWidth="1.2"
                strokeLinecap="round"
              ></path>
              <path
                d="M20 17L4 17"
                stroke="#417F56"
                strokeWidth="1.2"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;

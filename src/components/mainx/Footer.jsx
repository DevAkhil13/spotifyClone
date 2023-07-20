import React from "react";

const Footer = () => {
  return (
    <div class="container text-white">
      <footer class="py-5 pb-2 m-3 mb-0 mt-5">
        <div class="row">
          <div class="col-6 col-md-2 mb-3 me-3">
            <h6>Company</h6>
            <ul class="nav flex-column">
              <li class="nav-item mb-2 ">
                <a href="#" class="nav-link p-0 text-secondary">
                  About
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Jobs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  For the record
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3 me-3">
            <h6>Communities</h6>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  For Artists
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Developers
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Advertising
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Investors
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Vendors
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Spotify for work
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3 me-3">
            <h6>Useful Links</h6>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Support
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Free mobile app
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3 d-none">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                ></input>
                <button class="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-body-emphasis" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#twitter" />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#instagram" />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between text-secondary py-4 my-4 border-top border-secondary">
          <div className="d-flex justify-content-between w-100">
            <div>
              Legal &nbsp; Privacy Center &nbsp; Privacy Policy &nbsp; Cookies
              &nbsp; About ads &nbsp; Accessibility
            </div>
            <div>&copy; 2023 SpotifyClone AB</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

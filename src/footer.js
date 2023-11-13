import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-blue-100 FooterTop relative">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="row p-18 w-full">
            <div class="lg:w-1/4 md:w-1/2 sm:w-1/2 w-full px-2">
              <div
                class="widget wow fadeInUp text-center md:text-left"
                data-wow-delay="1.4s">
                <div class="footer-logo">
                  <a href="index.html" class="logo-dark">
                    <img src="assets/images/logo.png" alt="" />
                  </a>
                </div>
                <p class="mt-4">
                  Many desktop publishing packages and web page editors now.
                </p>
                <div class="widget_getintuch mt-4">
                  <ul>
                    <li>
                      <i class="far fa-comments"></i>
                      <span class="ml-2">Example@job.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="lg:flex">
                <div class="lg:w-1/3 md:w-1/2 w-full px-3">
                  <div
                    class="widget widget_links wow fadeInUp"
                    data-wow-delay="1.6s">
                    <h4 class="footer-title">Useful Links</h4>
                    <ul>
                      <li>
                        <a href="#!">Find a Job</a>
                      </li>
                      <li>
                        <a href="#!">Companies</a>
                      </li>
                      <li>
                        <a href="#!">About Us</a>
                      </li>
                      <li>
                        <a href="#!">Post a Job</a>
                      </li>
                      <li>
                        <a href="#!">Testimonial</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="lg:w-1/3 md:w-1/2 w-full">
                  <div
                    class="widget widget_links wow fadeInUp"
                    data-wow-delay="1.8s">
                    <h4 class="footer-title">Category</h4>
                    <ul>
                      <li>
                        <a href="#!">UI Designer</a>
                      </li>
                      <li>
                        <a href="#!">UX Designer</a>
                      </li>
                      <li>
                        <a href="#!">Graphic Designer</a>
                      </li>
                      <li>
                        <a href="#!">Web Developers</a>
                      </li>
                      <li>
                        <a href="#!">More</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="lg:w-1/3 md:w-1/2 w-full">
                  <div
                    class="widget widget_links wow fadeInUp"
                    data-wow-delay="2.0s">
                    <h4 class="footer-title">Follow Us</h4>
                    <ul>
                      <li>
                        <a href="#!">Linked In</a>
                      </li>
                      <li>
                        <a href="#!">Facebook</a>
                      </li>
                      <li>
                        <a href="#!">Instagram</a>
                      </li>
                      <li>
                        <a href="#!">Dribbble</a>
                      </li>
                      <li>
                        <a href="#!">Behance</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12">
              <div class="widget wow fadeInUp" data-wow-delay="2.2s">
                <h4 class="footer-title">Newsletter</h4>
                <p>Sign up to our archi. point to recent updates & office</p>
                <form
                  class="dzSubscribe ft-subscribe mb-4"
                  action="assets/script/mailchamp.php"
                  method="post">
                  <div class="dzSubscribeMsg"></div>
                  <div class="flex items-center">
                    <input
                      name="dzEmail"
                      required="required"
                      type="email"
                      class="form-control mr-2"
                      placeholder="Your Email Address"
                    />
                    <button
                      name="submit"
                      value="Submit"
                      type="submit"
                      class="btn btn-primary style-1">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

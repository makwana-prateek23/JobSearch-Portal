import React from "react";

function Footer() {
  return (
    <div>
      <div class="bg-gray-100 FooterTop">
        <div class="container  max-w-7xl mx-auto px-4 ">
          <div class="flex flex-wrap -mx-4 justify-between">
            {/* <!-- Column 1 --> */}
            <div class="lg:col-span-3 md:col-span-12 sm:col-span-12">
              <div class="text-center lg:text-left">
                <div class="footer-logo">
                  <a href="index.html" class="logo-dark">
                    <img src="assets/images/logo.png" alt="" />
                  </a>
                </div>
                <p class="mt-4 footext">
                  Many desktop publishing packages <br />
                  and web page editors now.
                </p>
                <div class="widget_getintuch mt-4">
                  <ul className="text-blue-500 font-semibold">
                    <li>
                      <i class="far fa-comments text-blue-500 mr-2"></i>
                      Example@job.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Column 2 --> */}
            <div class="lg:col-span-6 sm:col-span-12">
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div class="widget_links wow fadeInUp">
                  <h4 class="footer-title text-2xl">Useful Links</h4>
                  <ul className="footext">
                    <li className="group transform transition-transform hover:translate-x-2">
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
                <div class="widget_links wow fadeInUp" data-wow-delay="0.2s">
                  <h4 class="footer-title text-2xl">Category</h4>
                  <ul className="footext">
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
                <div class="widget_links wow fadeInUp" data-wow-delay="0.4s">
                  <h4 class="footer-title text-2xl">Follow Us</h4>
                  <ul className="footext">
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
            {/*<!-- Column 3 --> */}
            <div class="col-span-3 md:col-span-1">
              <div class="text-1 md:text-left">
                <div class="widget wow fadeInUp" data-wow-delay="0.6s">
                  <h4 class="footer-title text-2xl">Newsletter</h4>
                  <p class="mt-4 footext">
                    Sign up to our archi. point to recent <br />
                    updates &amp; office
                  </p>
                  <form
                    class="dzSubscribe ft-subscribe mb-4"
                    action="assets/script/mailchamp.php"
                    method="post">
                    <div class="dzSubscribeMsg"></div>
                    <div class="flex items-center mt-2 h-14 justify-center p-3 rounded-lg border-2 border-solid border-blue-500">
                      <input
                        name="dzEmail"
                        required="required"
                        type="email"
                        class="form-input outline-none bg-transparent"
                        placeholder="Your Email Address"
                      />
                      <button
                        name="submit"
                        value="Submit"
                        type="submit"
                        class="btn btn-primary style-1 ml-1  bg-blue-500 rounded-lg   text-white p-3  ">
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
      <div className="FooterBottom bg-gray-100">
        <div className="container  max-w-7xl mx-auto px-4">
          <div className="col-span-12">
            <div className="text-center">"Copyright 2023 By CareerGate"</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

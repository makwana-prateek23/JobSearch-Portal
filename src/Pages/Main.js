import React from "react";
import About from "../components/About";
import JobsCategory from "../components/JobsCategory";
import JobsGrid from "../components/JobsGrid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Layout from "../components/Layout";
// import User from "./UserLogin";
function Main() {
  // const [showDetails, setShowDetails] = useState(false);
  // const user = {
  //   name: "John Doe",
  //   profilePicture: "https://example.com/profile.jpg",
  //   // Add more user details here
  // };
  // const handleUserClick = (value) => {
  //   setShowDetails(value);
  // };

  const testimonials = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "url_to_image_1.jpg",
      name: "John Doe",
      jobPosition: "Software",
    },
    {
      id: 2,
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "url_to_image_2.jpg",
      name: "Jane Smith",
      jobPosition: "UX Designer",
    },
    {
      id: 3,
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "url_to_image_2.jpg",
      name: "Will Smith",
      jobPosition: "UI Designer",
    },
    // Add more testimonials as needed
  ];

  return (
    <>
      <div className="">
        <Layout>
          <div className="content">
            <section>
              <div className="relative">
                <div className="flex flex-wrap main-bnr justify-evenly bg-gray-100">
                  <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex items-center flex-wrap ">
                      <div className="xl:col-span-7 lg:col-span-7 md:col-span-12">
                        <h6 className="text-blue-500 mb-2 text-xl font-semibold">
                          We Have 208,000+ Live jobs
                        </h6>
                        <h1 className="text-7xl mb-5 font-semibold">
                          Your
                          <span className="text-blue-600 font-semibold">
                            {" "}
                            Dream{" "}
                          </span>
                          Job Is <br></br>Waiting For You
                        </h1>
                        <p className="text-xl font-semibold text-blue-500">
                          Type your keywork,then click search to find your
                          perfect job
                        </p>
                        <div className="m-2 w-full flex h-20 items-center bg-white rounded-xl shadow-xl mb-20px">
                          <div className="items-center">
                            <span className="text-blue-500 ml-6 mr-3 font-semibold">
                              <i class="fa-solid fa-magnifying-glass"></i>
                            </span>
                            <input
                              type="search"
                              placeholder="Job Titles,Keywords..."
                              className="outline-none"></input>
                          </div>
                          <div className="h-7 bg-gray-400 w-0.5 mr-6"></div>
                          <div>
                            <span className="text-blue-600 mr-3">
                              <i class="fa-solid fa-location-dot"></i>
                            </span>
                            <input
                              type="search"
                              placeholder="City or Postcode"
                              className="outline-none"></input>
                          </div>
                          <div className="bg-blue-500 h-10 flex items-center justify-center text-white rounded-md w-1/5">
                            <button className="">Find Jobs</button>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-gray-400">
                            <span className="font-bold text-black">
                              Popular Searches:
                            </span>
                            <span> Designer,Senor,Architecture,IOS,Etc.</span>
                          </p>
                        </div>
                      </div>
                      <div className="xl:col-5 lg:col-5 md:col-12">
                        <div className="Banner">
                          <img
                            src="https://jobick.dexignlab.com/frontend/xhtml/assets/images/home-banner/media-men.png"
                            alt="Myimage"
                            className="max-w-full align-middle"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <About />
            </section>
            <section>
              <JobsCategory />
            </section>
            <section className="inner-content bg-gray-100">
              <div className="container max-w-7xl mx-auto px-4">
                <div className="text-center mb-7">
                  <h6 className="text-blue-500 font-semibold mb-2 text-lg">
                    All Jobs Post
                  </h6>
                  <h2 className="text-6xl font-semibold mb-2">
                    Find Your Career You Deserve It
                  </h2>
                </div>
                <div>
                  <JobsGrid />
                </div>
              </div>
            </section>
            <section className="inner-content4">
              <div className="container max-w-7xl mx-auto px-4">
                <div className="text-center mb-7">
                  <h6 className="text-blue-500 font-semibold mb-2 text-lg">
                    Client Testimonials
                  </h6>
                  <h2 className="text-6xl font-semibold mb-2">
                    What A Job Holder Says About Us
                  </h2>
                </div>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}>
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="mr-7">
                      <div className="relative bg-blue-100 m-2 rounded-lg">
                        <div className="dzCard-text">
                          <p>{testimonial.quote}</p>
                        </div>
                        <div className="dz-card">
                          <div className="flex items-center">
                            <div className="flex items-center">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="rounded-full w-20 h-20 "
                              />
                            </div>
                            <div>
                              <h3>{testimonial.name}</h3>
                              <h5>{testimonial.jobPosition}</h5>
                            </div>
                          </div>
                          <svg
                            viewBox="0 0 111 79"
                            fill="currentColor"
                            className="svgStyle"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M24.6166 0.323242C11.0432 0.323242 0.00183105 11.3646 0.00183105 24.9382C0.00183105 38.0324 10.2777 48.7721 23.1889 49.5141C23.4124 51.9277 23.2447 58.4977 16.9491 67.6369C16.4732 68.3264 16.5596 69.2561 17.1506 69.8472C19.7269 72.4235 21.319 74.046 22.4334 75.1808C23.8918 76.6645 24.5575 77.342 25.5313 78.2262C25.8615 78.5259 26.2781 78.6766 26.6966 78.6766C27.103 78.6766 27.5078 78.5344 27.8347 78.2515C38.805 68.7057 50.9914 48.9822 49.2282 24.8128C48.1951 10.6228 37.8447 0.323242 24.6166 0.323242ZM26.7135 74.5727C26.241 74.107 25.7023 73.5583 24.908 72.7502C23.9426 71.7663 22.6181 70.418 20.6093 68.4025C28.2498 56.6294 26.8066 48.2438 26.1749 47.0412C25.8751 46.4705 25.2602 46.0859 24.6166 46.0859C12.9571 46.0859 3.47058 36.5994 3.47058 24.9382C3.47058 13.2785 12.9571 3.79199 24.6166 3.79199C35.9748 3.79199 44.8703 12.7382 45.7696 25.0634C47.7513 52.2478 31.5949 69.898 26.7135 74.5727Z"
                              fill="Lightblue"></path>
                            <path
                              d="M110.827 24.8128C109.791 10.6246 99.4387 0.323242 86.2141 0.323242C72.6406 0.323242 61.5975 11.3646 61.5975 24.9382C61.5975 38.0324 71.875 48.7721 84.788 49.5141C85.0115 51.9259 84.8421 58.4924 78.5449 67.6369C78.069 68.3264 78.1554 69.2561 78.7464 69.8472C81.3125 72.4132 82.9011 74.0324 84.0156 75.1655C85.4807 76.6593 86.1498 77.3402 87.1287 78.2277C87.4589 78.5259 87.8772 78.6766 88.294 78.6766C88.7005 78.6766 89.1053 78.5344 89.4321 78.2498C100.402 68.7039 112.589 48.9806 110.827 24.8128ZM88.3108 74.5727C87.8349 74.1036 87.2914 73.5515 86.4901 72.7351C85.5247 71.7526 84.2054 70.4079 82.205 68.4025C89.8454 56.6276 88.4041 48.2438 87.774 47.0412C87.4742 46.4722 86.8578 46.0859 86.2141 46.0859C74.5527 46.0859 65.0662 36.5994 65.0662 24.9382C65.0662 13.2785 74.5527 3.79199 86.2141 3.79199C97.5705 3.79199 106.468 12.7382 107.369 25.0651C109.349 52.2461 93.1922 69.898 88.3108 74.5727Z"
                              fill="Lightblue"></path>
                          </svg>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
            <div className="container max-w-7xl mx-auto px-4 h-2/12">
              <section>
                <div className="bg-blue-500 FooterAction flex items-center justify-between">
                  <div className="text-white text-5xl font-semibold">
                    <h3>
                      Lets Get Connected and Start
                      <br />
                      Finding Your Dream Job
                    </h3>
                  </div>
                  <div className="w-1/6 bg-white text-blue-500 h-12 rounded-lg font-semibold flex items-center justify-center">
                    <button> Create Free Account</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default Main;

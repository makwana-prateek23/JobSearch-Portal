import React from "react";

const JobsCategory = () => {
  const data = [
    {
      title: "UI/Ux Design",
      description: "100+Posted New Jobs",
      image:
        "https://e7.pngegg.com/pngimages/634/984/png-clipart-flat-design-web-design-graphic-design-ui-ux-search-engine-optimization-business-thumbnail.png",
    },
    {
      title: "Illustration",
      description: "200+Posted New Jobs",
    },
    {
      title: "Cool Art",
      description: "150+Posted New Jobs",
    },
    {
      title: "Web Design",
      description: "100+Posted New Jobs",
    },
    {
      title: "Product Design",
      description: "100+Posted New Jobs",
    },
    {
      title: "Developer",
      description: "200+Posted New Jobs",
    },
    {
      title: "Animation",
      description: "150+Posted New Jobs",
    },
    {
      description: "100+ More Category",
    },
  ];
  return (
    <div>
      <section className="inner-content2">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="Section-head mb-7">
            <h6 className="text-center text-blue-500 font-semibold mb-2 text-semibold">
              Jobs Categories
            </h6>
            <h2 className="text-5xl text-center mb-2 font-semibold">
              Choose Your Desired Category
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.map((item, index) => (
              <div key={index} className="col-span-1">
                <div className="bg-blue-100  transition duration-700 ease-in-out transform hover:-translate-y-2 hover:bg-blue-600 hover:text-white rounded-lg style-2 p-10 text-center wow fadeInUp">
                  <div className="icon-media">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="icon-content">
                    <h5 className="fs-20 mb-0">{item.title}</h5>
                    <p className="text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobsCategory;

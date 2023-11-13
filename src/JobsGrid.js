import React from "react";
const jsonData = [
  {
    companyIcon: "path/to/company1.svg",
    jobUploadTime: "2 hours ago",
    jobType: "Full Time",
    jobTitle: "Senior Software Engineer",
    companyDescription: "Company Description 1",
    salary: "3000$",
    smallSvg: "path/to/small1.svg",
  },
  {
    companyIcon: "path/to/company2.svg",
    jobUploadTime: "1 day ago",
    jobType: "Part Time",
    jobTitle: "Marketing Manager",
    companyDescription: "Company Description 2",
    salary: "2000$",
    smallSvg: "path/to/small2.svg",
  },
  {
    companyIcon: "path/to/company3.svg",
    jobUploadTime: "5 hours ago",
    jobType: "Full Time",
    jobTitle: "Product Manager",
    companyDescription: "Company Description 3",
    salary: "4000$",
    smallSvg: "path/to/small3.svg",
  },
  {
    companyIcon: "path/to/company4.svg",
    jobUploadTime: "3 days ago",
    jobType: "Part Time",
    jobTitle: "Graphic Designer",
    companyDescription: "Company Description 4",
    salary: "2500$",
    smallSvg: "path/to/small4.svg",
  },
  {
    companyIcon: "path/to/company5.svg",
    jobUploadTime: "6 hours ago",
    jobType: "Full Time",
    jobTitle: "Data Analyst",
    companyDescription: "Company Description 5",
    salary: "3500$",
    smallSvg: "path/to/small5.svg",
  },
  {
    companyIcon: "path/to/company6.svg",
    jobUploadTime: "4 days ago",
    jobType: "Part Time",
    jobTitle: "Content Writer",
    companyDescription: "Company Description 6",
    salary: "2200$",
    smallSvg: "path/to/small6.svg",
  },
  // Add more data objects as needed
];
function JobsGrid() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {jsonData.map((data, index) => (
          <div className="bg-white p-4 rounded-lg job-box" key={index}>
            <div className="job-media flex justify-between">
              <span>
                <img src={data.companyIcon} alt="Company Icon" />
              </span>
              <ul className="flex justify-between text-sm">
                <li className=" text-blue-500">{data.jobUploadTime}</li>
                <li className="text-blue-500 bg-blue-100 rounded-lg flex justify-center items-center">
                  {data.jobType}
                </li>
              </ul>
            </div>
            <div className="job-title">
              <h3>Vacancy: {data.jobTitle}</h3>
              <p>{data.companyDescription}</p>
            </div>
            <div className="job-amount">
              <h6>Salary: {data.salary}</h6>
              <img src={data.smallSvg} alt="Small SVG" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsGrid;

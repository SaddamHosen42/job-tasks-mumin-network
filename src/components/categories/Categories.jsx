import React from "react";
import categoriesImg1 from "../../assets/categories/categories-img-1.png";
import categoriesImg2 from "../../assets/categories/categories-img-2.png";
import categoriesImg3 from "../../assets/categories/categories-img-3.png";
import categoriesImg4 from "../../assets/categories/categories-img-4.png";
import categoriesImg5 from "../../assets/categories/categories-img-5.png";
import videosIcon from "../../assets/categories/videosIcon.png";
const Categories = () => {
  const categories = [
    { id: 1, img: categoriesImg1, title: "Science & Islam", videos: "148k" },
    {
      id: 2,
      img: categoriesImg1,
      title: "Comparative Religion",
      videos: "148k",
    },
    {
      id: 3,
      img: categoriesImg2,
      title: "Importance of Salah",
      videos: "148k",
    },
    { id: 4, img: categoriesImg3, title: "Science & Islam", videos: "148k" },
    { id: 5, img: categoriesImg4, title: "Islamic Nasheed", videos: "148k" },
    { id: 6, img: categoriesImg5, title: "Islamic Nasheed", videos: "148k" },
  ];

  return (
    <div>
      <h1 className="font-medium text-[#151116] text-[28px]">Categories</h1>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-[#FFFFFF] border-[#E5E7EB] p-3 rounded-sm"
          >
            <div className="flex items-center justify-between">
              <img
                src={category.img}
                alt={category.title}
                className="w-12 h-12 rounded-sm"
              />
              <div className="flex items-center gap-2 pr-3">
                <img src={videosIcon} alt="Views Count" />
                <p className="font-semibold text-sm ">
                  {category.videos}
                  <br />
                  <span className="text-sm opacity-60">Views</span>
                </p>
              </div>
            </div>
            <h2 className="mt-3 text-sm  font-medium text-[#121826]">
              {category.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

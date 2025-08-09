import React from "react";
import { assets } from "../assets/assets";

const Testimonial = () => {
  const dummyTestimonialData = [
  {
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=200&h=200&fit=crop",
    name: "Ava Thompson",
    title: "Content Manager, PixelBloom",
    content:
      "ContentAI helped us scale our blog strategy faster than we imagined. It’s like having a full editorial team in your browser.",
    rating: 5,
  },
  {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "John Doe",
      title: "Marketing Director, TechCorp",
      content:
        "ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
      rating: 4,
    },
  {
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&h=200&fit=crop",
    name: "Emily Carter",
    title: "Head of Marketing, BrightPixel",
    content:
      "Using ContentAI has completely streamlined how we handle content. The quality is top-notch and it saves us countless hours every week.",
    rating: 5,
  },
];

  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Loved by Creators
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
See for yourself what our users are saying about us.
        </p>
      </div>

      <div className="flex flex-wrap mt-10 justify-center">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            {/* Star Ratings */}
            <div className="flex items-center gap-1 mb-3">
              {Array(5)
                .fill(0)
                .map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={
                      starIndex < testimonial.rating
                        ? assets.star_icon
                        : assets.star_dull_icon
                    }
                    className="w-4 h-4"
                    alt={starIndex < testimonial.rating ? "star" : "no star"}
                  />
                ))}
            </div>

            {/* Testimonial Content */}
            <p className="text-gray-500 text-sm mb-5">
              "{testimonial.content}"
            </p>

            <hr className="mb-5 border-gray-300" />

            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                className="w-12 h-12 object-cover rounded-full"
                alt={`${testimonial.name}'s profile`}
              />
              <div className="text-sm text-gray-600">
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-xs text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

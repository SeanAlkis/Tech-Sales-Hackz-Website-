export default function Testimonials() {
  const testimonials = [
    {
      content: "Working with TalentForce transformed our hiring process. They understood our needs perfectly and delivered exceptional candidates.",
      author: "Sarah Johnson",
      role: "HR Director",
      company: "Tech Innovations Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "They helped me find my dream job in record time. Their team was professional, supportive, and truly cared about my career goals.",
      author: "Michael Chen",
      role: "Software Engineer",
      company: "Cloud Systems",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What People Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Don't just take our word for it
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="relative">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-xl text-gray-600">{testimonial.content}</p>
              </div>
              <div className="mt-8 flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-base text-gray-500">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
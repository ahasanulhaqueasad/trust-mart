const SectionTitle = ({ subtitle, title, description, center = true }) => {
  return (
    <div
      className={`max-w-3xl mb-10 ${
        center ? "mx-auto text-center" : "text-left"
      }`}
    >
      {subtitle && (
        <span className="inline-block text-sm font-semibold text-[#1d5638] bg-[#1d5638]/10 px-4 py-2 rounded-full mb-4">
          {subtitle}
        </span>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#173f2b] leading-tight">
        {title}
      </h2>

      {description && (
        <p className="text-gray-600 text-base md:text-lg leading-8 mt-5">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

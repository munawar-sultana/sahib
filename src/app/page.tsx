const HomePage = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to My Website</h2>
      <img
        src="/front.jpg"
        alt="Front"
        className="mx-auto rounded-lg shadow-lg w-96"
      />
      <p className="mt-4 text-lg">
        This is a simple homepage built with Next.js 15, TypeScript, and Tailwind CSS.
      </p>
    </div>
  );
};

export default HomePage;

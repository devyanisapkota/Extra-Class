function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center space-y-2">
        <h1 className="text-lg font-semibold text-white">
          This is the Footer
        </h1>

        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-indigo-400 font-medium">
            Devyani Sapkota
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

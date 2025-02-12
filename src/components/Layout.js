const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white animate-fade-in flex flex-col justify-start">
      {children}
    </div>
  );
};

export default Layout;

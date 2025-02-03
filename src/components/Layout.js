
const Layout = ({ children }) => {
  return (
    <div className="py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white animate-fade-in">
      {children}
    </div>
  );
};

export default Layout;

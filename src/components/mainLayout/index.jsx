import '@/styles/globals.css';

const MainLayout = ({ children }) => {
  return (
    <div className='pageContainer'>
      {children}
    </div>
  );
};

export default MainLayout;
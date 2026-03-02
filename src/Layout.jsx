export default function Layout({ children, currentPageName }) {
  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        body { background-color: #FAFAF8; color: #1a1a1a; margin: 0; padding: 0; overflow-x: hidden; -webkit-font-smoothing: antialiased; font-weight: 300; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #f0f0ec; }
        ::-webkit-scrollbar-thumb { background: #8B6E47; border-radius: 2px; }
        input::placeholder, textarea::placeholder { color: #aaa; }
        select option { background: #fff; color: #1a1a1a; }
      `}</style>
      {children}
    </div>
  );
}
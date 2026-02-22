export default function Layout({ children, currentPageName }) {
  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        body { background-color: #080808; color: #ffffff; margin: 0; padding: 0; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: #C9A96E; border-radius: 2px; }
        input::placeholder, textarea::placeholder { color: #444; }
        select option { background: #111; color: #fff; }
      `}</style>
      {children}
    </div>
  );
}
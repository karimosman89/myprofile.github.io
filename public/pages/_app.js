import '../styles/globals.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';  // Ensure the Sidebar is included in the layout
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'animate.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      

      {/* Main content area */}
      <div className="flex-1">
        {/* Header should be sticky or at the top */}
        
        <main className="p-10">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;

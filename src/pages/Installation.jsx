import { Helmet } from 'react-helmet-async';
import { Smartphone, MonitorPlay, Tv, Laptop, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Installation = () => {
  return (
    <>
      <Helmet>
        <title>Switzerland IPTV Installation Guide – Setup on Any Device in Minutes</title>
        <meta name="description" content="Step-by-step Switzerland IPTV setup guide for Android, iOS, Smart TV, Fire TV, PC & more. Get SRF, RTS, RSI and 10,000+ channels streaming in HD & 4K today." />
        <link rel="canonical" href="https://iptvswitzerland.cloud/installation" />
      </Helmet>

      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container markdown-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="section-title">Complete IPTV Switzerland Setup Instructions for Every Device</h1>
            <p className="lead" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '40px' }}>
              Setting up your Switzerland IPTV subscription has never been easier. Whether you're watching on a Smart TV in Zurich, streaming via Firestick in Geneva, or using your iPhone in Basel, this comprehensive installation guide walks you through the full setup process on every major device — step by step. Our Switzerland IPTV service delivers over 10,000 live channels including SRF 1, SRF zwei, RTS Un, RTS Deux, RSI LA 1, and hundreds of international sports and entertainment networks, all in HD and 4K quality. Most users complete their setup in under five minutes with zero technical experience required.
            </p>

            <div className="glass-panel" style={{ padding: '30px', marginBottom: '40px', borderLeft: '4px solid var(--color-yellow)' }}>
              <h2><MonitorPlay size={24} style={{ display: 'inline', marginRight: '10px' }} /> Before You Begin — Requirements</h2>
              <p>Before installing your IPTV Switzerland service, make sure your setup meets these minimum requirements to ensure smooth, buffer-free streaming across all devices.</p>
              
              <div className="table-wrapper">
                <table className="glass-table">
                  <thead>
                    <tr>
                      <th>Resolution</th>
                      <th>Minimum Speed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Standard Definition (SD)</td><td>5 Mbps minimum</td></tr>
                    <tr><td>High Definition (HD)</td><td>10 Mbps recommended</td></tr>
                    <tr><td>Full HD (1080p)</td><td>15 Mbps recommended</td></tr>
                    <tr><td>4K Ultra HD</td><td>25 Mbps or higher</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 style={{ marginTop: '30px' }}>What You'll Need:</h3>
              <ul style={{ listStyle: 'none', marginLeft: 0 }}>
                <li><ChevronRight size={16} color="var(--color-green)" /> Your Switzerland IPTV login credentials (Username, Password, and Server URL)</li>
                <li><ChevronRight size={16} color="var(--color-green)" /> Your M3U playlist link or Xtream Codes API details</li>
                <li><ChevronRight size={16} color="var(--color-green)" /> A compatible IPTV application installed on your device</li>
                <li><ChevronRight size={16} color="var(--color-green)" /> A stable broadband connection</li>
              </ul>
              
              <div style={{ background: 'rgba(46, 204, 113, 0.1)', padding: '15px', borderRadius: '10px', marginTop: '20px', border: '1px solid var(--color-dark-green)' }}>
                <strong>Pro Tip:</strong> For the most stable Switzerland IPTV experience, connect your streaming device directly to your router via Ethernet cable. This eliminates Wi-Fi interference and delivers significantly faster load times for Swiss and international channels.
              </div>
            </div>

            <div className="grid-devices" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              
              <div className="glass-panel" style={{ padding: '30px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Smartphone size={28} color="var(--color-pink)" /> Android Setup</h3>
                <p><strong>Estimated Setup Time: 3–5 minutes</strong></p>
                <p>Android is the most versatile platform for Switzerland IPTV, supporting a wide range of high-performance IPTV players available through the Google Play Store.</p>
                <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  <li>Open the Google Play Store on your Android device or Android TV box.</li>
                  <li>Search for and install a trusted IPTV player application.</li>
                  <li>Launch the app and tap <strong>Add Playlist</strong> or <strong>Add New User</strong>.</li>
                  <li>Select <strong>Xtream Codes API</strong> from the connection options.</li>
                  <li>Enter Server URL, Username, and Password.</li>
                  <li>Tap <strong>Save</strong> and wait 30-60 seconds to load channels.</li>
                </ol>
                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '0.9rem' }}>
                  <strong>Fixing Buffering:</strong> Switch decoder from ExoPlayer to VLC (or vice versa) in Settings → Player Settings.
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '30px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Smartphone size={28} color="var(--color-yellow)" /> iOS (iPhone & iPad)</h3>
                <p><strong>Estimated Setup Time: 3–5 minutes</strong></p>
                <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  <li>Open the App Store and download a compatible IPTV application.</li>
                  <li>Navigate to <strong>Playlist Management</strong> or <strong>Add Source</strong>.</li>
                  <li>Select <strong>Xtream Codes API</strong> as your connection method.</li>
                  <li>Enter a Playlist Name, Server URL, Username, and Password.</li>
                  <li>Tap <strong>Save</strong>.</li>
                </ol>
                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '0.9rem' }}>
                  <strong>Performance Tips:</strong> Enable hardware-accelerated decoding within the app settings for smoother playback.
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '30px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Tv size={28} color="var(--color-orange)" /> Smart TVs (Samsung & LG)</h3>
                <p><strong>Samsung (Tizen OS)</strong></p>
                <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
                  <li>Open the Samsung App Store.</li>
                  <li>Search for and install a compatible IPTV application.</li>
                  <li>Locate your device's MAC Address in settings.</li>
                  <li>Upload your M3U playlist via the app's web portal.</li>
                </ol>
                <p><strong>LG (WebOS)</strong></p>
                <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>Open the LG Content Store and install an IPTV player.</li>
                  <li>Go to Playlist Management & Add New Playlist.</li>
                  <li>Enter Xtream Codes details and save.</li>
                </ol>
              </div>

              <div className="glass-panel" style={{ padding: '30px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Tv size={28} color="var(--color-green)" /> Amazon Fire TV & Stick</h3>
                <p><strong>Estimated Setup Time: 5–8 minutes</strong></p>
                <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>Navigate to <strong>Find → Search</strong> on the home screen.</li>
                  <li>Search for a compatible IPTV application.</li>
                  <li>Install and open the IPTV app.</li>
                  <li>Select Xtream Codes Login.</li>
                  <li>Enter Server URL, Username, Password.</li>
                </ol>
              </div>

              <div className="glass-panel" style={{ padding: '30px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Tv size={28} color="var(--color-green)" /> Formuler Box</h3>
                <p><strong>Estimated Setup Time: 5 minutes</strong></p>
                <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>Open the built-in IPTV application.</li>
                  <li>Navigate to <strong>Settings → Add Portal</strong>.</li>
                  <li>Enter Portal Nickname, Portal URL, Username, and Password.</li>
                  <li>Select Connect.</li>
                </ol>
              </div>

              <div className="glass-panel" style={{ padding: '30px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Laptop size={28} color="var(--color-green)" /> PC & Mac (Desktop)</h3>
                <p><strong>Using VLC Media Player</strong></p>
                <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
                  <li>Download VLC Media Player.</li>
                  <li>Click Media → Open Network Stream.</li>
                  <li>Paste the M3U playlist URL and Play.</li>
                </ol>
                <p>For EPG and VOD we recommend downloading dedicated desktop players that support Xtream Codes API.</p>
              </div>

            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Installation;

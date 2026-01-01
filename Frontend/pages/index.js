import { useState, useEffect } from 'react';
export default function HomePage() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        🏢 SyndicPro.ma
      </h1>
      
      <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>
        La solution de gestion syndicale #1 au Maroc
      </p>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {[
          { icon: '📊', title: 'Tableau de bord', desc: 'Visualisez vos finances en temps réel' },
          { icon: '💳', title: 'Paiements en ligne', desc: 'CIB, CIH, Attijari, PayPal' },
          { icon: '📅', title: 'AG Digitales', desc: 'Gérez vos assemblées en ligne' },
          { icon: '📱', title: 'Application mobile', desc: 'iOS & Android' },
          { icon: '📄', title: 'Documents légaux', desc: 'Conforme loi 18-00' },
          { icon: '🛡️', title: 'Sécurité maximale', desc: 'Données chiffrées' }
        ].map((item, idx) => (
          <div key={idx} style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '10px',
            width: '250px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '50px' }}>
        <button style={{
          padding: '15px 40px',
          fontSize: '1.2rem',
          background: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginRight: '20px'
        }}>
          Essai gratuit 30 jours
        </button>
        
        <button style={{
          padding: '15px 40px',
          fontSize: '1.2rem',
          background: 'transparent',
          color: 'white',
          border: '2px solid white',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Voir démo
        </button>
      </div>
      
      <footer style={{
        marginTop: '60px',
        paddingTop: '20px',
        borderTop: '1px solid rgba(255,255,255,0.2)',
        fontSize: '0.9rem',
        opacity: 0.8
      }}>
        <p>© 2024 SyndicPro.ma - Solution 100% marocaine</p>
        <p>Contact: contact@syndicpro.ma - Tél: +212 5 XX XX XX XX</p>
      </footer>
    </div>
  );
}
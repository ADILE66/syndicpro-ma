// SyndicPro.ma - Backend Simplifié
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route d'accueil
app.get('/', (req, res) => {
  res.json({ 
    message: '🏢 Bienvenue sur SyndicPro.ma API',
    status: '✅ En ligne',
    endpoints: [
      '/api/health',
      '/api/immeubles',
      '/api/charges'
    ]
  });
});

// Vérification santé
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'SyndicPro Backend'
  });
});

// Route test pour immeubles
app.get('/api/immeubles', (req, res) => {
  res.json([
    { id: 1, nom: 'Résidence Les Jardins', ville: 'Casablanca', lots: 24 },
    { id: 2, nom: 'Tour Hassan', ville: 'Rabat', lots: 36 }
  ]);
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log('===================================');
  console.log('🚀 SYNDICPRO.MA BACKEND DÉMARRÉ');
  console.log(`📍 http://localhost:${PORT}`);
  console.log('===================================');
});
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <div 
        className="mediq-card" 
        style={{ maxWidth: '480px', textAlign: 'center', padding: '3rem 2rem' }}
        role="alert"
      >
        <div 
          style={{ 
            width: '64px', 
            height: '64px', 
            borderRadius: 'var(--radius-xl)', 
            backgroundColor: 'var(--rose-50)', 
            color: 'var(--rose-600)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 1.5rem' 
          }}
        >
          <AlertCircle size={32} />
        </div>

        <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--slate-900)' }}>
          404 - Page Not Found
        </h1>
        <p style={{ color: 'var(--slate-600)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
          The requested MediQ route or clinical workspace does not exist in this milestone build.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return to MediQ Overview</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

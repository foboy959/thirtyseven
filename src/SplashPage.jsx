import React from 'react';
import teamPhoto from './assets/team.jpg';
import { Link } from 'react-router-dom';

export default function SplashPage() {
  return (
    <div
  style={{
    position: 'relative',
    height: '100dvh',
    width: '100%',
    backgroundImage: `url(${teamPhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  }}
>
    
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      {/* Content - Centered within viewport */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
          padding: '2rem',
          maxHeight: '80vh',
          overflow: 'hidden',
        }}
      >
        <h1
          style={{
            fontFamily: '"Anton", "Impact", sans-serif',
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            fontWeight: 400,
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            lineHeight: 1,
            textShadow: '3px 3px 12px rgba(0,0,0,0.8)',
            WebkitTextStroke: '1px rgba(255,255,255,0.3)',
          }}
        >
          37 Jiu Jitsu
        </h1>
        <p
          style={{
            fontFamily: '"Anton", "Impact", sans-serif',
            fontSize: 'clamp(0.8rem, 2vw, 1.1rem)',
            textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
            marginBottom: '2.5rem',
            letterSpacing: '0.2em',
            opacity: 0.9,
          }}
        >
          LEARN THE ART OF BRAZILIAN JIU JITSU
        </p>

        <Link to="/services" style={{ textDecoration: 'none' }}>
          <button
            style={{
              fontFamily: '"Anton", "Impact", sans-serif',
              background: 'linear-gradient(black, #1a1a1a)',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              padding: '1rem 2.5rem',
              fontSize: '1.2rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 400,
              borderRadius: '12px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.5)',
            }}
            onMouseOver={(e) => {
              e.target.style.boxShadow = 'inset 0 0 30px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 1)';
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.background = 'linear-gradient(#1a1a1a, black)';
            }}
            onMouseOut={(e) => {
              e.target.style.boxShadow = 'inset 0 0 20px rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.5)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.background = 'linear-gradient(black, #1a1a1a)';
            }}
          >
            JOIN NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
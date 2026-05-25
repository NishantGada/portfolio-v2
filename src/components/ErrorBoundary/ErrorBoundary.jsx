import React from 'react';
import './ErrorBoundary.css';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught:', error, info);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="error-boundary">
        <div className="error-boundary__inner">
          <p className="error-boundary__code">error</p>
          <h1 className="error-boundary__title">Something broke on this page.</h1>
          <p className="error-boundary__message">
            Sorry about that — try a reload, or reach out directly.
          </p>
          <div className="error-boundary__actions">
            <button type="button" className="error-boundary__btn" onClick={this.handleReload}>
              Reload
            </button>
            <a className="error-boundary__btn error-boundary__btn--ghost" href="mailto:nishantgada01@gmail.com">
              Email me
            </a>
            <a className="error-boundary__btn error-boundary__btn--ghost" href="https://www.linkedin.com/in/nishant-gada/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="error-boundary__btn error-boundary__btn--ghost" href="https://github.com/NishantGada/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
}

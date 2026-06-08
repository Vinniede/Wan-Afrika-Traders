import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error('Error caught by boundary:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h1 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h1>
              <p className="text-gray-700 mb-4">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              <details className="mb-4 p-3 bg-gray-100 rounded text-sm overflow-auto max-h-64">
                <summary className="cursor-pointer font-semibold text-gray-800">Error Details</summary>
                <pre className="mt-2 whitespace-pre-wrap break-words text-xs text-gray-700">
                  {this.state.error?.stack}
                </pre>
              </details>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

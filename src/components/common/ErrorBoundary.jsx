import React from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'
import Button from '../ui/Button'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    // يمكنك إرسال الخطأ إلى خدمة تحليلات مثل Sentry هنا
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={40} className="text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
              Something went wrong
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <Button onClick={this.handleReset} icon={RefreshCw}>
              Refresh Page
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
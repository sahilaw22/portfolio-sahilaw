import { Router, Route, Switch } from 'wouter'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/toaster'
import Home from '@/pages/Home'
import AdminLogin from '@/pages/AdminLogin'
import AdminDashboard from '@/pages/AdminDashboard'

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/admin" component={AdminLogin} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route>404 Page Not Found</Route>
        </Switch>
      </Router>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
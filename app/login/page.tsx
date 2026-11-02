'use client';
import { useState, type FormEvent } from 'react';
import { Wallet, LoaderCircle } from 'lucide-react';
export default function Login() {
  const [error, setError] = useState(''), [busy, setBusy] = useState(false);
  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(''); setBusy(true);
    const password = new FormData(event.currentTarget).get('password');
    try {
      const response = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || 'Could not sign in.');
      window.location.assign('/');
    } catch (error) { setError((error as Error).message); setBusy(false); }
  }
  return <main className="login-page"><section className="card login-card"><span className="empty-icon"><Wallet size={27}/></span><p className="eyebrow">YOUR PERSONAL SPACE</p><h1>Welcome to Penny.</h1><p className="muted">Sign in with your workspace password to see your expenses.</p><form onSubmit={login}><label>Password<input name="password" type="password" autoComplete="current-password" autoFocus required maxLength={1024}/></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="btn primary full form-submit" disabled={busy}>{busy ? <LoaderCircle className="spin" size={17}/> : 'Sign in'}</button></form></section></main>;
}

import {Link} from '@remix-run/react';

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-slate-950 px-3 py-6 text-slate-200">
      <Link to="/" className="text-2xl font-bold uppercase">
        One more rep
      </Link>
      <div className="text-slate-500">Sign in</div>
    </nav>
  );
}

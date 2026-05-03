/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Programs from './components/Programs';
import Interior from './components/Interior';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Programs />
        <Interior />
        <Location />
      </main>
      <Footer />
    </div>
  );
}


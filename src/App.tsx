import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Intelligence from './pages/Intelligence';
import Universe from './pages/Universe';
import Money from './pages/Money';
import Time from './pages/Time';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/universe" element={<Universe />} />
          <Route path="/money" element={<Money />} />
          <Route path="/time" element={<Time />} />
        </Routes>
      </Layout>
    </Router>
  );
}

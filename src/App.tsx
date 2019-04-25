import React from 'react';
import './App.css';
import Registration from './pages/Registration';

const App: React.FC = () => {
  return (
    <div className="clr-row clr-justify-content-center">
      <div className="clr-col-4">
          <Registration />
      </div>
  </div>
  );
}

export default App;

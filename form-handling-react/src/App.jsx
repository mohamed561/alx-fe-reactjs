import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import formikForm from './components/formikForm';

function App() {
  return (
    <div className="App">
      <h1>Registration Form (Controlled Components)</h1>
      <RegistrationForm />
      <h1>Registration Form (Formik)</h1>
      <formikForm />
    </div>
  );
}

export default App;
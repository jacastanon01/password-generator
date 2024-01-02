import PasswordForm from './components/passwordForm/PasswordForm';
import StrengthDisplay from './components/passwordForm/StrengthDisplay';

function App() {
  return (
    <main className='min-h-screen bg-black text-white'>
      <div className='container pt-12 flex flex-col sm:items-center gap-2'>
        <h1 className='text-2xl font-bold tracking-wide sm:text-4xl'>
          Password Generator
        </h1>
        <StrengthDisplay />
        <PasswordForm />
      </div>
    </main>
  );
}

export default App;

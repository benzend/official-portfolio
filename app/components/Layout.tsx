import { Alert } from '../components/Alert';
import { Footer } from '../components/Footer';

export default function Layout({ preview, children }: { preview?: boolean; children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

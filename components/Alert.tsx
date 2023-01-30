import { Container } from './Container';

export const Alert = ({ preview }) => {
  return (
    <div>
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 h-screen justify-center items-center">
        <h1 className="text-4xl font-bold">ItMayWork</h1>
        <a className="text-muted-foreground">ItMayWork.com</a>
        <p className="text-muted-foreground">
          by{' '}
          <a href="https://charan.dev" className="underline" rel="noopener noreferrer" target="_blank">
            Charan
          </a>
        </p>
      </div>
    </>
  );
}

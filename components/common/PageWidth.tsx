import clsx from 'clsx';

type RootTagOptions = 'header' | 'main' | 'footer';

const PageWidth = ({
  className,
  rootTag,
  children,
}: {
  className?: string;
  rootTag?: RootTagOptions;
  children: React.ReactNode;
}) => {
  switch (rootTag) {
    case 'header':
      return (
        <header className={clsx(className, 'max-w-5xl lg:max-w-7xl mx-auto')}>
          {children}
        </header>
      );
    case 'main':
      return (
        <main className={clsx(className, 'max-w-5xl lg:max-w-7xl mx-auto')}>
          {children}
        </main>
      );
    case 'footer':
      return (
        <footer className={clsx(className, 'max-w-5xl lg:max-w-7xl mx-auto')}>
          {children}
        </footer>
      );
    default:
      return (
        <div className={clsx(className, 'max-w-5xl lg:max-w-7xl mx-auto')}>
          {children}
        </div>
      );
  }
};
export default PageWidth;

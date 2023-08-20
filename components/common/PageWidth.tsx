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
  const commonClass = 'max-w-5xl lg:max-w-7xl mx-auto px-4 lg:px-0';
  switch (rootTag) {
    case 'header':
      return (
        <header className={clsx(className, commonClass)}>{children}</header>
      );
    case 'main':
      return <main className={clsx(className, commonClass)}>{children}</main>;
    case 'footer':
      return (
        <footer className={clsx(className, commonClass)}>{children}</footer>
      );
    default:
      return <div className={clsx(className, commonClass)}>{children}</div>;
  }
};
export default PageWidth;

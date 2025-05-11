export default function Test1Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <p className="text-text-center font-bold text-red-600 dark:text-yellow-300>the nesting page">this is nesting page </p>
                {children}
        </div>

    );
  }
  
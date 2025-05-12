export default function RoutingLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="h-screen overflow-hidden">
        {children}
      </div>
    );
  }
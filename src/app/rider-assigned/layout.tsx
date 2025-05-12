export default function RiderAssignedLayout({
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
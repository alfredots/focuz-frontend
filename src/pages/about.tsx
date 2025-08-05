import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nulla et velit fermentum blandit. Aliquam erat volutpat. Cras
          tincidunt, justo a congue dapibus, sapien lorem bibendum augue, in gravida nisl tortor nec augue.
        </p>

        <p className="mb-4">
          Sed malesuada, magna a interdum pretium, purus mi dictum justo, sit amet lacinia leo orci sit amet urna. Integer mattis risus ut nisl
          convallis, sed posuere elit congue. Donec nec justo turpis. Fusce nec elit at lorem vestibulum fermentum.
        </p>

        <p className="mb-4">
          Curabitur non ex ac mauris feugiat tincidunt. Morbi tincidunt fringilla sapien non dignissim. Vivamus ac blandit lorem. Pellentesque in
          turpis nec leo dapibus tincidunt. Sed sit amet justo at quam gravida blandit.
        </p>

        <p className="text-sm text-gray-500 mt-8">&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}
